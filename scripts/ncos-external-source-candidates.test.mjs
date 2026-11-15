import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { buildExternalSourceCandidateCrosswalk } from "./lib/ncos-external-source-candidates.mjs";
const json = path => JSON.parse(readFileSync(path,"utf8"));
const catalog = json("registers/governance/ncos-external-source-candidates-20261114.v1.json");
const all = json("contracts/entities/tool-bindings.v1.json").items;
const bindings = all.filter(b=>b.authority_class!==undefined);

test("41 candidate references cover only 274 clinical missing-source fields, not 4 internal fields", () => {
 const result = buildExternalSourceCandidateCrosswalk({catalog,bindings});
 assert.deepEqual(result.counts,{
   candidates:41,bindingsWithoutSource:278,candidateFieldMatches:274,
   noExternalCandidate:4,toolsWithCandidate:41,unusedCandidateTools:0
 });
 assert.equal(result.uncovered.every(x=>x.toolSlug==="contexto"),true);
 assert.equal(result.changesToCanonicalContracts,0);
 assert.equal(result.result,"HOLD_HUMAN");
 assert.equal(result.releaseEligible,false);
 assert.equal(result.rows.every(x=>x.sourceIdsStillMissing && !x.claimMatched &&
   !x.fieldScoreVerified && !x.versionCompatible && !x.licenseVerified &&
   !x.rightsApproved && !x.humanApproval && !x.permissionToPublish),true);
});
test("candidate source URL does not silently fill source_ids or approve evidence", () => {
 const before=JSON.stringify(bindings);
 const r=buildExternalSourceCandidateCrosswalk({catalog,bindings});
 assert.equal(JSON.stringify(bindings),before);
 const mapped=r.rows.find(x=>x.toolSlug==="tinetti");
 assert.ok(mapped.candidateUrl.startsWith("https://pubmed.ncbi.nlm.nih.gov/"));
 assert.equal(mapped.sourceIdsStillMissing,true);
 assert.equal(mapped.decision,"HOLD_HUMAN");
});
test("SOFA-2 version and Waterlow copyright are held for clinical/legal review", () => {
 const sofa=catalog.sources.find(x=>x.toolSlug==="sofa");
 const waterlow=catalog.sources.find(x=>x.toolSlug==="waterlow");
 assert.ok(sofa.additionalReferences.some(x=>x.role==="VERSION_CONFLICT_SOFA2_2025"));
 assert.ok(waterlow.additionalReferences.some(x=>x.role==="RIGHTS_WARNING"));
 assert.equal(waterlow.rightsApproved,false);
 assert.equal(sofa.fieldByFieldVerified,false);
});
test("duplicate candidate, non-HTTPS URL or fake approvals fail closed", () => {
 const make=()=>structuredClone(catalog);
 const duplicate=make(); duplicate.sources.push({...duplicate.sources[0]});
 assert.throws(()=>buildExternalSourceCandidateCrosswalk({catalog:duplicate,bindings}),
   /EXTERNAL_SOURCE_CANDIDATE_INVALID_OR_PREAPPROVED/);
 const unsafe=make(); unsafe.sources[0].url="http://example.com/insecure";
 assert.throws(()=>buildExternalSourceCandidateCrosswalk({catalog:unsafe,bindings}),
   /EXTERNAL_SOURCE_CANDIDATE_INVALID_OR_PREAPPROVED/);
 const approved=make(); approved.sources[0].rightsApproved=true;
 assert.throws(()=>buildExternalSourceCandidateCrosswalk({catalog:approved,bindings}),
   /EXTERNAL_SOURCE_CANDIDATE_INVALID_OR_PREAPPROVED/);
 const badTop=make(); badTop.authorizesRelease=true;
 assert.throws(()=>buildExternalSourceCandidateCrosswalk({catalog:badTop,bindings}),
   /EXTERNAL_SOURCE_CANDIDATE_INPUT_INVALID/);
});
