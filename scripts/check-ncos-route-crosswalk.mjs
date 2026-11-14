#!/usr/bin/env node
// Evidence-only NCOS route crosswalk. Never infers RBAC, template approval, or publication.
import { readFileSync, readdirSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const root = new URL("../", import.meta.url);
const read = (p) => readFileSync(new URL(p, root));
const historical = "audit/branch-canonicalization/ncos-route-source-crosswalk-unregistered-20261113.v1.json";
const source = JSON.parse(read(historical));
const legacyPath = "registers/canonical/surface-contracts.v2.json";
const legacy = JSON.parse(read(legacyPath));
const observation = JSON.parse(read("audit/branch-canonicalization/ncos-route-current-sha-observation-20261114.v1.json"));
const routes = [];
function scan(dir, prefix = "") {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) scan(join(dir, e.name), prefix + e.name + "/");
    else if (/\.(tsx|ts)$/.test(e.name)) routes.push(prefix + e.name);
  }
}
scan(new URL("src/routes/", root).pathname);
routes.sort();
const findings = [];
const check = (assertion, reason) => { if (!assertion) findings.push(reason); };
check(source.documentType === "NCOS_SOURCE_ROUTE_CROSSWALK_CANDIDATE", "SOURCE_CONTRACT_WRONG_TYPE");
check(legacy.scope === "CE_PUBLIC_BACKUP_ONLY", "LEGACY_BACKUP_SCOPE_CHANGED");
check(source.releaseReady === false && source.classification === "HOLD_ROLE_AND_TEMPLATE_REVIEW", "UNAPPROVED_RELEASE_CLAIM");
check(source.sources.length === 20, "REVIEW_20_SOURCE_COUNT_DRIFT");
check(observation.documentType === "NCOS_CURRENT_ROUTE_SHA_OBSERVATION_CANDIDATE", "WRONG_CURRENT_ROUTE_OBSERVATION");
check(observation.historicalCrosswalkPath === historical &&
      observation.historicalCrosswalkBlobSha === createHash("sha1").update("blob " + read(historical).length + "\0").update(read(historical)).digest("hex") &&
      observation.historicalSourceCommit === source.source_head_sha,
      "HISTORICAL_ROUTE_PROVENANCE_CHANGED");
check(observation.legacyBackupPath === legacyPath &&
      observation.legacyBackupBlobSha === createHash("sha1").update("blob " + read(legacyPath).length + "\0").update(read(legacyPath)).digest("hex"),
      "BACKUP_ROUTE_PROVENANCE_CHANGED");
check(observation.releaseReady === false &&
      observation.approvalStatus === "HOLD_ROLE_TEMPLATE_AND_ISOLATION" &&
      observation.legacyBackupScope === "CE_PUBLIC_BACKUP_ONLY",
      "UNAUTHORIZED_ROUTE_OBSERVATION_APPROVAL");
const legacyFiles = new Set(Object.keys(legacy.entries));
const currentObservations = new Map();
for (const item of observation.routes || []) {
  check(!currentObservations.has(item.file), "DUPLICATE_CURRENT_ROUTE_OBSERVATION:" + item.file);
  currentObservations.set(item.file, item);
}
check(currentObservations.size === routes.length, "CURRENT_ROUTE_OBSERVATION_COUNT_DRIFT");
const seen = new Set();
const reviewed = [];
for (const item of source.sources) {
  const path = "src/routes/" + item.file;
  check(!seen.has(item.file), "DUPLICATE_REVIEW:" + item.file);
  seen.add(item.file);
  // The historical inventory was unregistered on its own branch; later backup
  // catalogs may contain the route without granting runtime roles or release.
  check(legacyFiles.has(item.file), "CURRENT_BACKUP_SCOPE_MISSING_ROUTE:" + item.file);
  check(routes.includes(item.file), "MISSING_ROUTE:" + item.file);
  check(item.role === "HOLD_ROLE_REVIEW" && item.templateKind === "HOLD_TEMPLATE_REVIEW" && item.releaseApproval === false, "UNAPPROVED_ROLE:" + item.file);
  if (!routes.includes(item.file)) continue;
  const bytes = read(path);
  const content = bytes.toString("utf8");
  const gitSha = createHash("sha1").update("blob " + bytes.length + "\0").update(bytes).digest("hex");
  const current = currentObservations.get(item.file);
  check(current?.historicalSourceBlobSha === item.gitBlobSha, "HISTORICAL_BLOB_NOT_PRESERVED:" + item.file);
  check(current?.sourceChangedSinceHistorical === (gitSha !== item.gitBlobSha),
      "UNREVIEWED_HISTORICAL_ROUTE_DELTA:" + item.file);
  check(current?.gitBlobSha === gitSha, "UNREVIEWED_CURRENT_SOURCE_CHANGE:" + item.file);
  const route = content.match(/createFileRoute\(\s*["'\x60]([^"'\x60]+)["'\x60]\s*\)/)?.[1] ?? null;
  check(route === item.declaredRoute, "DECLARATION_MISMATCH:" + item.file);
  const imports = [...new Set([...content.matchAll(/from\s+["']([^"']+)["']|^\s*import\s+["']([^"']+)["']/gm)].map((m) => m[1] ?? m[2]))].sort();
  reviewed.push({
    file: item.file, declaredRoute: route, gitBlobSha: gitSha,
    actualImports: imports,
    sourceObservations: {
      hasLoader: /\bloader\s*:/.test(content),
      hasBeforeLoad: /\bbeforeLoad\s*:/.test(content),
      importsPublishedContent: imports.some((x) => x.includes("content-object.functions")),
      importsSeedOrStore: imports.some((x) => /(\.seed$|\/store$|\.data$)/.test(x)),
      directlyImportsDb: imports.some((x) => /^@\/lib\/db(?:\.ts)?$/.test(x))
    },
    roleReview: "HOLD", templateReview: "HOLD",
    publicationApproval: false
  });
}
const covered = new Set([...legacyFiles, ...seen]);
for (const file of routes) {
  check(covered.has(file), "UNCOVERED_ROUTE:" + file);
  const current = currentObservations.get(file);
  check(Boolean(current), "CURRENT_OBSERVATION_MISSING:" + file);
  if (!current) continue;
  const bytes = read("src/routes/" + file);
  const gitSha = createHash("sha1").update("blob " + bytes.length + "\0").update(bytes).digest("hex");
  check(current.gitBlobSha === gitSha, "CURRENT_ROUTE_BLOB_DRIFT:" + file);
  check(current.legacyBackupEntryPresent === legacyFiles.has(file), "BACKUP_ROUTE_MEMBERSHIP_CHANGED:" + file);
  check(current.roleReview === "HOLD_ROLE_REVIEW" &&
        current.templateReview === "HOLD_TEMPLATE_REVIEW" &&
        current.releaseApproval === false,
        "ROUTE_UNAUTHORIZED_APPROVAL:" + file);
  if (!seen.has(file)) check(current.historicalSourceBlobSha === null &&
       current.sourceChangedSinceHistorical === null, "UNPROVEN_HISTORICAL_ROUTE:" + file);
}
for (const file of covered) check(routes.includes(file), "STALE_ROUTE_CONTRACT:" + file);
for (const file of currentObservations.keys())
  check(routes.includes(file), "STALE_CURRENT_OBSERVATION:" + file);
check(legacyFiles.size === routes.length &&
      observation.summary?.routeFiles === routes.length &&
      observation.summary?.legacyBackupEntries === legacyFiles.size &&
      observation.summary?.historicalSourceEntries === seen.size,
      "CURRENT_ROUTE_COUNTS_CHANGED_REVIEW_REQUIRED");
const report = {
  schemaVersion: "1.0.0",scope:"NCOS_INTEGRATED_CANDIDATE",
  kind:"ROUTE_SOURCE_INTEGRITY_NOT_AUTHORIZATION",
  sourceHeadAtReview:source.source_head_sha,
  currentObservationHead:observation.sourceTreeCommit,
  summary:{routeFiles:routes.length,legacyBackupContracts:legacyFiles.size,sourceReviewed:reviewed.length,
    historicalSourceBlobsChanged:reviewed.filter(x=>x.gitBlobSha!==source.sources.find(s=>s.file===x.file)?.gitBlobSha).length,
    findings:findings.length,authorizationApprovals:0},
  status:findings.length ? "FAIL_SOURCE_INTEGRITY" : "PASS_SOURCE_INVENTORY_WITH_ROLE_HOLD",
  routeAuthorization:"HOLD_ROLE_TEMPLATE_REVIEW",
  databaseAuthorization:"HOLD_RLS_RBAC_MIGRATIONS",
  releaseGate:"BLOCKED",findings,reviewed
};
const dest = new URL("audit-evidence/",root);
mkdirSync(dest,{recursive:true});
writeFileSync(new URL("ncos-route-behavior-check.v1.json",dest),JSON.stringify(report,null,2)+"\n");
console.log("NCOS_ROUTE_BEHAVIOR_CHECK "+JSON.stringify(report.summary));
console.log(report.status+"; HOLD_ROLE_TEMPLATE_REVIEW; no publication approval");
if (findings.length) { for (const f of findings) console.error("FAIL "+f); process.exitCode = 1; }
