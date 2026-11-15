/**
 * Derive a reproducible, non-authorizing remediation queue from existing CKO records.
 * This is NOT an alternate CKO schema, evidence registry or admission mechanism.
 */
export function buildBindingReviewQueue({ sources, bindings, fields, findings, allowedAuthorityClasses }) {
  if (![sources, bindings, fields, allowedAuthorityClasses].every(Array.isArray) ||
      !findings || !Array.isArray(findings.errors) || !Array.isArray(findings.holds))
    throw new Error("CKO_REVIEW_QUEUE_INPUT_INVALID");
  const sourcesById = new Map(sources.map(s => [s.canonical_id, s]));
  const fieldsByAuthority = new Map();
  for (const field of fields) {
    const key = field.authority_binding_ref;
    if (!fieldsByAuthority.has(key)) fieldsByAuthority.set(key, []);
    fieldsByAuthority.get(key).push(field.canonical_id);
  }
  const issuesById = new Map();
  for (const [severity, list] of [["ERROR", findings.errors], ["HOLD", findings.holds]]) {
    for (const issue of list) {
      if (!issuesById.has(issue.entity)) issuesById.set(issue.entity, []);
      issuesById.get(issue.entity).push({ severity, code: issue.code });
    }
  }
  const rows = bindings.map(b => {
    const sourceIds = Array.isArray(b.source_ids) ? b.source_ids : [];
    const sourceDetails = sourceIds.map(id => {
      const source = sourcesById.get(id);
      const sha = source?.integrity?.sha256;
      const snapshot = source?.integrity?.snapshot_ref;
      return {
        canonical_id: id,
        found: Boolean(source),
        authority: source?.authority || null,
        status: source?.status || null,
        rights: source?.rights || null,
        originalIntegrityPending: !sha || !/^[a-f0-9]{64}$/.test(sha) ||
          /^0{64}$/.test(sha) || !snapshot || /PENDING|PLACEHOLDER|TODO/i.test(snapshot),
        rightsAuthorizationVerified: false // this audit has no independent rights signoff
      };
    });
    const authorityDrift = !allowedAuthorityClasses.includes(b.authority_class);
    const missingSource = sourceIds.length === 0;
    const unresolvedSources = sourceDetails.some(s => !s.found);
    const missingValidity = !b.validity?.applicable_from;
    const missingAtomEvidence = !Array.isArray(b.evidence_bundle_ids) || b.evidence_bundle_ids.length === 0;
    const steps = ["CONFIRM_FIELD_INTENT_AND_POPULATION"];
    if (missingSource || unresolvedSources) steps.push("LOCATE_AND_VALIDATE_PRIMARY_SOURCE");
    if (authorityDrift) steps.push("RECONCILE_CANONICAL_AUTHORITY_CLASS_WITH_SOURCE");
    if (sourceIds.length) steps.push("VERIFY_ORIGINAL_EDITION_PINPOINT_HASH_AND_RIGHTS");
    if (missingValidity) steps.push("PROVE_APPLICABLE_FROM_NOT_COMMIT_DATE");
    if (missingAtomEvidence) steps.push("BIND_VERIFIED_ATOM_CLAIM_AND_EVIDENCE_PACKAGE");
    steps.push("INDEPENDENT_CLINICAL_LEGAL_AND_SAFETY_REVIEW");
    const priority = missingSource || unresolvedSources ? "P0_SOURCE" :
      authorityDrift ? "P1_AUTHORITY" : "P2_EVIDENCE_AND_REVIEW";
    return {
      canonical_id: b.canonical_id,
      field_path: b.field_path,
      tool: /^tool\.([^.]+)\./.exec(b.field_path || "")?.[1] || "UNRESOLVED",
      authority_class_observed: b.authority_class,
      authority_class_candidate: null,
      source_ids_observed: sourceIds,
      sourceReview: sourceDetails,
      fieldDefinitionRefs: (fieldsByAuthority.get(b.canonical_id) || []).sort(),
      validity_observed: b.validity || null,
      evidence_bundle_ids_observed: b.evidence_bundle_ids || [],
      issues: (issuesById.get(b.canonical_id) || []).sort((a, b) => a.code.localeCompare(b.code)),
      flags: { authorityDrift, missingSource, unresolvedSources, missingValidity, missingAtomEvidence },
      priority,
      requiredSteps: steps,
      decision: "HOLD_HUMAN",
      admitted: false,
      evidenceVerified: false,
      rightsApproved: false,
      releaseEligible: false
    };
  }).sort((a, b) => a.priority.localeCompare(b.priority) || a.canonical_id.localeCompare(b.canonical_id));
  const count = flag => rows.filter(row => row.flags[flag]).length;
  const perTool = {};
  for (const row of rows) {
    perTool[row.tool] ??= { total: 0, missingSource: 0, authorityDrift: 0, missingEvidence: 0 };
    perTool[row.tool].total++;
    if (row.flags.missingSource) perTool[row.tool].missingSource++;
    if (row.flags.authorityDrift) perTool[row.tool].authorityDrift++;
    if (row.flags.missingAtomEvidence) perTool[row.tool].missingEvidence++;
  }
  return {
    schemaVersion: "1.0.0",
    purpose: "CKO_FIELD_BY_FIELD_REVIEW_QUEUE_NOT_AUTHORIZATION",
    sourceOfTruth: "contracts/entities/tool-sources.v1.json + tool-bindings.v1.json + CKO authority_binding schema",
    counts: {
      bindings: rows.length,
      authorityDrift: count("authorityDrift"),
      missingSource: count("missingSource"),
      unresolvedSources: count("unresolvedSources"),
      missingValidity: count("missingValidity"),
      missingAtomEvidence: count("missingAtomEvidence")
    },
    byTool: Object.fromEntries(Object.entries(perTool).sort(([a], [b]) => a.localeCompare(b))),
    rows,
    releaseEligible: false,
    status: "HOLD_HUMAN",
    prohibitedActions: ["AUTO_CLASSIFICATION", "AUTO_SOURCE_INSERTION", "AUTO_RIGHTS_APPROVAL", "AUTO_RELEASE"]
  };
}
