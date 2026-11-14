import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const workflow = readFileSync(".github/workflows/verify-bibliotecas.yml", "utf8");

test("CI keeps original evidence through tests and audit, then simulates Vercel exclusions for build", () => {
  const testStep = workflow.indexOf("      - run: npm test");
  const auditStep = workflow.indexOf("      - run: node scripts/audit-execution-gates.mjs");
  const stripCommand =
    "git ls-files --cached --ignored --exclude-from=.vercelignore -z | xargs -0 -r rm -f";
  const stripAt = workflow.indexOf(stripCommand);
  const buildStep = workflow.indexOf("      - run: npm run build:spa");

  assert.ok(testStep !== -1, "The full test gate must remain present");
  assert.ok(auditStep > testStep, "The independent audit must run after tests");
  assert.ok(stripAt > auditStep, "The evidence must not be deleted before audit and tests");
  assert.ok(buildStep > stripAt, "The deploy-mirrored build must follow exclusions");
  assert.equal(workflow.indexOf(stripCommand, stripAt + 1), -1, "Do not strip files twice");
});
