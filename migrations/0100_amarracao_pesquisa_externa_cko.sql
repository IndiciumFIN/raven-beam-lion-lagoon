-- Registro ESTRUTURAL dos novos artefatos de pesquisa bibliográfica externa.
-- Nenhum candidato se torna fonte CKO, autoridade clínica, evidência, direito de uso
-- ou publicação com esta migration. Sem alteração de schema; PGlite/CI local somente.
-- DO NOT apply remotely without independent migration governance and approval.
insert into file_binding (path, kind, alvo, canonico, anterior_ds) values
  ('migrations/0100_amarracao_pesquisa_externa_cko.sql', 'arquivo', 'suporte', false, false),
  ('registers/governance/ncos-external-source-candidates-20261114.v1.json', 'arquivo', 'suporte', false, false),
  ('scripts/lib/ncos-external-source-candidates.mjs', 'arquivo', 'suporte', false, false),
  ('scripts/ncos-external-source-candidates.mjs', 'arquivo', 'suporte', false, false),
  ('scripts/ncos-external-source-candidates.test.mjs', 'arquivo', 'suporte', false, false)
on conflict (path) do nothing;
