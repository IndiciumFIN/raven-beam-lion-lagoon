-- Complemento estrutural da PR #1: novos arquivos da fila CKO por campo.
-- Registros candidatos, sem autoridade clinica, admissao ou publicacao.
-- A migracao inclui o proprio caminho para satisfazer a cobertura Git.
-- Executar somente nos testes locais/PGlite; NAO aplicar no Supabase por CI.
insert into file_binding (path, kind, alvo, canonico, anterior_ds) values
  ('migrations/0099_amarracao_fila_revisao_cko.sql', 'arquivo', 'suporte', false, false),
  ('scripts/lib/ncos-binding-review-queue.mjs', 'arquivo', 'suporte', false, false),
  ('scripts/ncos-binding-review-queue.test.mjs', 'arquivo', 'suporte', false, false)
on conflict (path) do nothing;
