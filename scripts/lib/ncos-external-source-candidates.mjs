/**
 * Source-first, READ-ONLY matching of externally located bibliographic candidates
 * to CKO fields currently lacking source_ids. Never mutates clinical contracts.
 * A name-based candidate is not a verified field assertion or a rights license.
 */
export function buildExternalSourceCandidateCrosswalk({ catalog, bindings }) {
  if (catalog?.schemaVersion !== "1.0.0" || !Array.isArray(catalog.sources) ||
      !Array.isArray(bindings) || catalog.authorizesRelease !== false ||
      catalog.notCanonicalSources !== true) {
    throw new Error("EXTERNAL_SOURCE_CANDIDATE_INPUT_INVALID");
  }
  const seenSlugs = new Set(), seenIds = new Set();
  for (const item of catalog.sources) {
    if (!item.toolSlug || !item.candidateId || !/^https:\/\//.test(item.url || "") ||
        seenSlugs.has(item.toolSlug) || seenIds.has(item.candidateId) ||
        item.status !== "CANDIDATE_REVIEW_REQUIRED" ||
        item.originalBytesVerified !== false || item.fieldByFieldVerified !== false ||
        item.rightsApproved !== false || item.validityVerified !== false ||
        item.evidenceAtomVerified !== false || item.canPromoteAuthority !== false) {
      throw new Error("EXTERNAL_SOURCE_CANDIDATE_INVALID_OR_PREAPPROVED");
    }
    for (const ref of item.additionalReferences || []) {
      if (!ref.role || !/^https:\/\//.test(ref.url || "")) {
        throw new Error("EXTERNAL_SOURCE_ADDITIONAL_REFERENCE_INVALID");
      }
    }
    seenSlugs.add(item.toolSlug);seenIds.add(item.candidateId);
  }
  const bySlug = new Map(catalog.sources.map(source => [source.toolSlug, source]));
  const seenBindings = new Set();
  const rows = bindings.filter(b => Array.isArray(b.source_ids) && b.source_ids.length === 0)
    .map(binding => {
      if (seenBindings.has(binding.canonical_id)) throw new Error("DUPLICATE_BINDING_ID");
      seenBindings.add(binding.canonical_id);
      const toolSlug = /^tool\.([^.]+)\./.exec(binding.field_path || "")?.[1] || null;
      const candidate = bySlug.get(toolSlug) || null;
      // Only the named tool matches, not a claim/criterion, scope or scoring system.
      return {
        authorityBindingId: binding.canonical_id,
        fieldPath: binding.field_path,
        toolSlug,
        candidateSourceId: candidate?.candidateId || null,
        candidateUrl: candidate?.url || null,
        referenceKind: candidate?.referenceKind || null,
        coverage: candidate ? "BIBLIOGRAPHIC_CANDIDATE_LOCATED" : "NO_EXTERNAL_CANDIDATE",
        sourceIdsStillMissing: true,
        claimMatched: false,
        fieldScoreVerified: false,
        versionCompatible: false,
        licenseVerified: false,
        rightsApproved: false,
        humanApproval: false,
        permissionToPublish: false,
        decision: "HOLD_HUMAN"
      };
    }).sort((a,b) => a.authorityBindingId.localeCompare(b.authorityBindingId));
  const covered = rows.filter(row => row.candidateSourceId !== null);
  const without = rows.filter(row => row.candidateSourceId === null);
  const used = new Set(covered.map(row => row.toolSlug));
  const orphanCandidates = catalog.sources.filter(s => !used.has(s.toolSlug)).map(s => s.toolSlug).sort();
  return {
    schemaVersion: "1.0.0",
    purpose: "BIBLIOGRAPHIC_TOOL_TO_FIELD_CANDIDATES_NO_AUTHORITY_ADMISSION",
    sourceCatalog: "registers/governance/ncos-external-source-candidates-20261114.v1.json",
    counts: {
      candidates: catalog.sources.length,
      bindingsWithoutSource: rows.length,
      candidateFieldMatches: covered.length,
      noExternalCandidate: without.length,
      toolsWithCandidate: used.size,
      unusedCandidateTools: orphanCandidates.length
    },
    uncovered: without.map(r => ({ authorityBindingId: r.authorityBindingId, toolSlug: r.toolSlug })),
    orphanCandidates,
    rows,
    result: "HOLD_HUMAN",
    releaseEligible: false,
    changesToCanonicalContracts: 0,
    caveat: "Name-scoped links are only research leads; prove version, exact rubric, license, source bytes, dates and claim evidence with independent review."
  };
}
