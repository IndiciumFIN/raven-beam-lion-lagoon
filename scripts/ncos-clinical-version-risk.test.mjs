import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { loadToolContracts } from "./load-tool-contracts.mjs";

const catalog=JSON.parse(readFileSync("registers/governance/ncos-external-source-candidates-20261114.v1.json","utf8"));
const runtime=loadToolContracts();
const tool=slug=>runtime.tools.find(x=>x.slug===slug);
const candidate=slug=>catalog.sources.find(x=>x.toolSlug===slug);
const missingSourceFor=slug=>runtime.bindings.filter(b=>
 (b.field_path||"").startsWith("tool."+slug+".") &&
 (!Array.isArray(b.source_ids)||b.source_ids.length===0));

test("Fugulin 12-item candidate is explicitly versioned, not the nine-item variant",()=>{
 const f=tool("fugulin");
 assert.ok(f,"Fugulin tool must exist");
 assert.equal(f.criteria?.length,12);
 // loadToolContracts exposes criterion IDs and the overall band range,
 // not the original choice objects. Test the authentic runtime contract, not
 // assumptions from the authoring-only frozenScales TypeScript structure.
 const ids=new Set(f.criteria);
 assert.equal(ids.size,12);
 assert.ok(ids.has("curativo")&&ids.has("tempo_curativo")&&ids.has("pele"));
 assert.deepEqual(f.faixa,{min:12,max:48});
 const bindings=missingSourceFor("fugulin");
 assert.equal(bindings.length,12);
 assert.deepEqual([...ids].sort(),bindings.map(b=>b.field_path.split(".").at(-1)).sort());
 assert.ok(bindings.every(b=>b.evidence_bundle_ids?.length===0));
 assert.equal(candidate("fugulin")?.referenceYear,2005);
 assert.ok(candidate("fugulin")?.additionalReferences.some(r=>
 r.role==="SCIENTIFIC_EXTENSION_2007_VERSION_REVIEW"));
 assert.equal(candidate("fugulin")?.fieldByFieldVerified,false);
 assert.equal(candidate("fugulin")?.rightsApproved,false);
});
test("SOFA-2 discovery cannot upgrade the original SOFA rubric",()=>{
 const s=candidate("sofa");
 assert.ok(tool("sofa"));
 assert.ok(s?.additionalReferences.some(r=>r.role==="VERSION_CONFLICT_SOFA2_2025"));
 assert.equal(s.canPromoteAuthority,false);
 assert.equal(s.evidenceAtomVerified,false);
 assert.ok(missingSourceFor("sofa").length>0);
});
test("Waterlow bibliography and official-terminology listing do not imply license",()=>{
 const w=candidate("waterlow");
 assert.ok(tool("waterlow"));
 assert.ok(w?.additionalReferences.some(r=>r.role==="RIGHTS_WARNING"));
 assert.equal(w.rightsApproved,false);
 assert.equal(w.originalBytesVerified,false);
 assert.ok(missingSourceFor("waterlow").length>0);
});
test("all three sensitive instruments remain held without evidence bundles",()=>{
 for(const slug of ["fugulin","sofa","waterlow"]){
   const bindings=missingSourceFor(slug);
   assert.ok(bindings.length>0);
   assert.ok(bindings.every(b=>b.status==="HOLD_HUMAN" && b.decision==="HOLD_HUMAN"
      && b.evidence_bundle_ids?.length===0));
 }
});
