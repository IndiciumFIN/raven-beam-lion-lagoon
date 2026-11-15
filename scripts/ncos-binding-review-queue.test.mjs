import test from "node:test";
import assert from "node:assert/strict";
import { buildBindingReviewQueue } from "./lib/ncos-binding-review-queue.mjs";

const allowedAuthorityClasses = [
  "REGULATORY", "TECHNICAL_STANDARD", "AUTHORITATIVE_TERMINOLOGY",
  "CLINICAL_EVIDENCE", "INTERNAL_NONCLINICAL"
];
function fixture() {
  return {
    sources: [{
      canonical_id: "SRC-1", authority: "test publisher", status: "REVIEW_REQUIRED",
      rights: "RESTRICTED", integrity: { sha256: "0".repeat(64), snapshot_ref: "PENDING_SNAPSHOT" }
    }],
    bindings: [
      { canonical_id: "AB-A", field_path: "tool.braden.criteria.a", authority_class: "CLINICAL",
        source_ids: [], validity: { jurisdiction: "BR" }, evidence_bundle_ids: [], decision: "HOLD_HUMAN" },
      { canonical_id: "AB-B", field_path: "tool.morse.bands.b", authority_class: "TECHNICAL_STANDARD",
        source_ids: ["SRC-1"], validity: { jurisdiction: "BR", applicable_from: "2020-01-01" },
        evidence_bundle_ids: ["UNVERIFIED-ID"], decision: "HOLD_HUMAN" },
      { canonical_id: "AB-C", field_path: "tool.morse.criteria.c", authority_class: "CLINICAL_EVIDENCE",
        source_ids: ["SRC-MISSING"], validity: { jurisdiction: "BR" },
        evidence_bundle_ids: [], decision: "HOLD_HUMAN" }
    ],
    fields: [{ canonical_id: "FD-A", authority_binding_ref: "AB-A" }],
    findings: {
      errors: [{ code: "NOT_IN_CANONICAL_VOCABULARY", entity: "AB-A" }],
      holds: [{ code: "BINDING_WITHOUT_ATOM_EVIDENCE", entity: "AB-A" }]
    },
    allowedAuthorityClasses
  };
}
test("review queue identifies distinct source, authority, validity and atom blockers", () => {
  const result = buildBindingReviewQueue(fixture());
  assert.deepEqual(result.counts, {
    bindings: 3, authorityDrift: 1, missingSource: 1,
    unresolvedSources: 1, missingValidity: 2, missingAtomEvidence: 2
  });
  const a = result.rows.find(row => row.canonical_id === "AB-A");
  assert.equal(a.tool, "braden");
  assert.equal(a.priority, "P0_SOURCE");
  assert.deepEqual(a.fieldDefinitionRefs, ["FD-A"]);
  assert.equal(a.authority_class_candidate, null);
  assert.ok(a.requiredSteps.includes("LOCATE_AND_VALIDATE_PRIMARY_SOURCE"));
  assert.ok(a.issues.some(i => i.code === "NOT_IN_CANONICAL_VOCABULARY"));
});
test("even present source ID and evidence ID do not auto-approve rights or release", () => {
  const result = buildBindingReviewQueue(fixture());
  const b = result.rows.find(row => row.canonical_id === "AB-B");
  assert.equal(b.sourceReview[0].originalIntegrityPending, true);
  assert.equal(b.sourceReview[0].rightsAuthorizationVerified, false);
  assert.equal(b.evidenceVerified, false);
  assert.equal(b.admitted, false);
  assert.equal(b.releaseEligible, false);
  assert.equal(result.releaseEligible, false);
  assert.ok(result.prohibitedActions.includes("AUTO_CLASSIFICATION"));
});
test("missing source identity does not become a source candidate", () => {
  const c = buildBindingReviewQueue(fixture()).rows.find(row => row.canonical_id === "AB-C");
  assert.equal(c.sourceReview[0].found, false);
  assert.equal(c.flags.unresolvedSources, true);
  assert.equal(c.decision, "HOLD_HUMAN");
});
test("invalid audit inputs fail closed", () => {
  assert.throws(() => buildBindingReviewQueue({
    sources: [], bindings: [], fields: [], findings: {}, allowedAuthorityClasses
  }), /CKO_REVIEW_QUEUE_INPUT_INVALID/);
});
