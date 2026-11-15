#!/usr/bin/env node
/** Build a hash-bound external bibliography crosswalk; READ ONLY, never a release gate. */
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { buildExternalSourceCandidateCrosswalk } from "./lib/ncos-external-source-candidates.mjs";
const root = new URL("../", import.meta.url);
const read = path => readFileSync(new URL(path, root));
const sha = path => createHash("sha256").update(read(path)).digest("hex");
const catalogPath = "registers/governance/ncos-external-source-candidates-20261114.v1.json";
const bindingsPath = "contracts/entities/tool-bindings.v1.json";
const catalog = JSON.parse(read(catalogPath).toString("utf8"));
const mixed = JSON.parse(read(bindingsPath).toString("utf8")).items;
if (!Array.isArray(mixed)) throw new Error("CKO_BINDING_INPUT_MISSING");
const bindings = mixed.filter(x => x.authority_class !== undefined);
const out = buildExternalSourceCandidateCrosswalk({ catalog, bindings });
out.inputProvenance = [
  { path: catalogPath, sha256: sha(catalogPath) },
  { path: bindingsPath, sha256: sha(bindingsPath) }
];
out.inputDigest = createHash("sha256").update(out.inputProvenance.map(x => x.path+":"+x.sha256).join("\n")).digest("hex");
out.repositorySha = process.env.GITHUB_SHA || null;
const folder = new URL("../audit-evidence/ncos-canonical-source-lineage/",import.meta.url);
mkdirSync(folder,{recursive:true});
writeFileSync(new URL("external-source-candidates-crosswalk.v1.json",folder),JSON.stringify(out,null,2)+"\n");
console.log("NCOS_EXTERNAL_SOURCE_CANDIDATES "+JSON.stringify(out.counts));
console.log("NCOS_EXTERNAL_SOURCE_STATUS "+out.result);
if (process.argv.includes("--enforce-research-coverage") &&
    (out.counts.candidateFieldMatches !== 274 || out.counts.noExternalCandidate !== 4 ||
      out.counts.unusedCandidateTools !== 0 || out.releaseEligible !== false)) {
  process.exitCode = 1;
}
