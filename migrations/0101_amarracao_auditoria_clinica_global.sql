-- Only file-binding bookkeeping for new read-only audits/tests.
-- No clinical source, evidence, role, schema, release, or publication approval.
-- Apply ONLY to isolated PGlite gate; NOT to Supabase without reviewed migration WO.
insert into file_binding(path,kind,alvo,canonico,anterior_ds) values
('migrations/0101_amarracao_auditoria_clinica_global.sql','arquivo','suporte',false,false),
('scripts/ncos-clinical-version-risk.test.mjs','arquivo','suporte',false,false),
('docs/audits/CE_CKO_NCOS_STATUS_GLOBAL_FECHAMENTO_20261114.md','arquivo','suporte',false,false)
on conflict(path) do nothing;
