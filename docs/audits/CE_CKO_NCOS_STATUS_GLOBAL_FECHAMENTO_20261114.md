# CE / CKO / NCOS — status global para conclusão (corte read-only)

**Corte:** 2026-11-14 (BRT); verificação por GitHub, Supabase, Vercel e pesquisa normativa externa. **Estado:** DRAFT / HOLD_HUMAN / NO-GO. Nenhum merge, deploy ou migração remota autorizado por este relatório.

## 1. Escopo e limites

Avaliação de metadados e evidências de **quatro repositórios relacionados**, banco **Calculadoras-Smart**, amostra de Vercel de projetos relacionados, Drive por busca e o HEAD da PR #1. **Não é auditoria integral de todas as branches nem de todos os arquivos do Drive**, e o inventário GitHub inclui projetos satélites e WU-TRIB que não devem ser fundidos automaticamente ao domínio clínico. O snapshot atual e os detalhes sensíveis devem permanecer nos respectivos controles, não neste repositório público.

### Evidência de código e integração

| Repositório | Branches observadas | PRs abertas | Main no corte | Interpretação |
|---|---:|---:|---|---|
| [raven-beam-lion-lagoon](https://github.com/IndiciumFIN/raven-beam-lion-lagoon) | 2 | 1 | `87218a63ae43` | PR #1 reúne correções estruturais, **não mergeada** |
| [dev-chatgpt-workspace](https://github.com/IndiciumFIN/dev-chatgpt-workspace) | 57 | 31 | `dacfaa6bc29f` | Há PRs CKO, NCOS, pesquisa e módulos WU-TRIB; separar por domínio antes de consolidar |
| [calculadorasdeenfermagem](https://github.com/IndiciumFIN/calculadorasdeenfermagem) | 70 | 55 | `e0f62491b104` | Muitas PRs de parser, corpus e módulos educacionais seguem DRAFT/HOLD |
| [blue-ember-fjord-prairie](https://github.com/IndiciumFIN/blue-ember-fjord-prairie) | 7 | 3 | `e213dcb0d28b` | PR #5 separação build/migrations; PR #6 correção de bootstrap admin; PR #4 prints em revisão |
| **Inventário, sem deduplicar conteúdo** | **136** | **90** | — | Total de referências de branches/PRs; não corresponde a 136 entregas distintas nem 90 funcionalidades |

Este levantamento é uma **fotografia de integração**: branches podem conter alterações iguais ou conflitantes. Nenhuma foi excluída, promovida ou fundida nesta rodada.

### CI / CKO / Conteúdo

- [PR #1](https://github.com/IndiciumFIN/raven-beam-lion-lagoon/pull/1): último corte já verificado **7/9** workflows verdes; 2 falhas no `--enforce` são bloqueios legítimos de linhagem/fonte/rights.
- Auditoria fonte-primeiro: **588 erros** (310 classes de autoridade não canônicas, 278 vínculos sem fonte) e **791 HOLDs**, com ocorrências que se sobrepõem.
- **320** bindings em revisão: 320 sem vigência formal e 320 sem pacote de evidência. **52 ferramentas clínicas** e **27 páginas editoriais** no recorte técnico.
- Pesquisa externa: **41 candidatos bibliográficos/institucionais**, associados mecanicamente a **274 campos clínicos** de 41 ferramentas por slug. Não são fontes/claims homologados. **Quatro campos de contexto** precisam de política interna e LGPD, não fonte clínica genérica.
- Corpus de origem: 17 PDFs com hashes de bytes conferidos no relatório de recuperação, porém **0 arquivos JSONL atomizados recuperados e verificados** naquele recorte; **18 claims sem asserção**, **16 projeções normativas ausentes no mestre**, **17 revisões de direitos concluídas: 0**.
- Os índices reportam 25.508 átomos textuais PDF e 547.908 átomos de dados em corpus distinto: são inventários **não equivalentes**. O relatório não declara 100% de atomização ou 100% de conteúdo validado.

### Supabase — fotografia READ_ONLY de Calculadoras-Smart

Consulta de catálogos PostgreSQL: **59 schemas** (incluindo schemas internos), **610 tabelas**, **114 views** e **100 policies** existentes no banco. Isto não mede tabelas **admitidas**, integradas ou seguras. Advisor de segurança registrou:
- 245 `INFO: rls_enabled_no_policy`: RLS habilitada sem policy (pode ser isolamento intencional; revisar exposição e GRANT, não criar policy `TO authenticated` indiscriminadamente).
- 4 `WARN: function_search_path_mutable`, 1 `WARN: extension_in_public`, 1 `WARN: auth_leaked_password_protection`.
- Antes de publicar: mapear grants e exposed schemas, executar testes de acesso `anon/authenticated`, revisar `security_invoker` nas views e privilégios de `SECURITY DEFINER`. Não alterar produção sem governança.

Documentação de referência: [RLS sem policy](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy), [search_path](https://supabase.com/docs/guides/database/database-linter?lint=0011_function_search_path_mutable).

### Vercel — fotografia de deployments, não de todo o portfólio

- `dev-chatgpt-workspace`: os dois deploys de produção mais recentes recuperados estavam em `ERROR`, inclusive `main@dacfaa6bc29f`. [Inspector](https://vercel.com/leivisml-7739s-projects/dev-chatgpt-workspace/FLbQgoLVHjHwR9z45gVHQzd5wgkG)
  - **Causa reproduzida no log do deployment:** `[STATIC_BUILD_NO_OUT_DIR] No Output Directory named "dist"`, enquanto o build Nitro gerou `.vercel/output/nitro.json`. As configurações do projeto Vercel reportam `framework=vite`; o `vercel.json` no `dev-chatgpt-workspace@dacfaa6b` informa `framework:null` e `buildCommand:npm run build`. Conciliar preset e saída Nitro/TanStack com Build Output API antes do deploy, em vez de criar pasta `dist` vazia. [Vercel Build Output API](https://vercel.com/docs/build-output-api).
  - **Risco adicional:** `package.json` deste repo define `build` como `vite build && npm run db:migrate`; o log confirma chamada a `db:migrate` no build, embora tenha pulado devido à ausência de `DATABASE_URL`. Separar migração em WO explícita e testada, nunca acoplada ao build de produção. Não alterar credenciais nem executar migrations para diagnosticar.
- `ce-site-institucional`: o deploy de produção mais recente recuperado estava `BLOCKED`. [Inspector](https://vercel.com/leivisml-7739s-projects/ce-site-institucional/62RRaPLTishFxJ3XscBXULdyf7bJ)
- A conta listou **33 projetos Vercel**, inclusive múltiplos pilotos. Não inferir destes dois projetos que não exista outro site em produção; identificar o **deployment canônico único** antes de promover.
- Build SPA/Chromium PASS na PR não comprova deploy com auth, RLS, migrações e rollback.

### Drive e ativos editoriais

Busca restrita por CKO/M09 localizou planilha de PMO e materiais com nome de Cânone; **não houve extração exaustiva nem comparação de hashes de todo o Drive** nesta rodada. Antes de concluir 100%, reconciliar manifestos Drive/Library/ZIP/SQL por ID, SHA-256, revisão, direitos e `source_uri`, preservando originais e deduplicando apenas as referências.

## 2. Achado clínico prioritário — Fugulin, versão e score

Implementação inspecionada em `src/lib/tools/frozen-scales.ts`: **12 indicadores**, escolhas 1–4, soma possível **12–48**, bandas **12–17, 18–22, 23–28, 29–34, 35–48** e publicação candidata. A extensão de 2007 documenta essa categorização; **não substitui automaticamente** a variante original de **9 indicadores**. A literatura secundária não é inteiramente consistente (algumas descrições de 12 indicadores misturam limites 11–44 e 12–48), exigindo revisão da publicação original e da adaptação antes de liberar.

Fonte [Santos et al. (2007), RLAE](https://www.scielo.br/j/rlae/a/fSf3XdRSV6JjyPks3qDGRYd/?format=pdf&lang=en), [estudo 12 categorias e 12–48](https://new.scielo.br/j/reben/a/JyqRw3qXtXG7nyZRXr6dTvn/?ilang=pt_BR&lang=pt), [estudo variante 9 categorias](https://www.scielo.br/j/rgenf/a/jxNqLyzgWnx89GBZWw9FYbg/?lang=pt), [Parecer COFEN 1/2024](https://www.cofen.gov.br/parecer-normativo-no-1-2024-cofen/).

Também bloquear reclassificação tácita de [SOFA 1996](https://pubmed.ncbi.nlm.nih.gov/8844239/) para [SOFA-2 2025](https://pubmed.ncbi.nlm.nih.gov/41159833/), e reprodução não autorizada da [Waterlow (openEHR copyright warning)](https://ckm.openehr.org/ckm/archetypes/1013.1.1036).

O teste `scripts/ncos-clinical-version-risk.test.mjs` confronta contratos de runtime com esses riscos e exige `HOLD_HUMAN` sem `evidence_bundle_ids`. **É uma prova de não promoção, não uma validação clínica do escore.**

## 3. Etapas objetivas de conclusão e dependências (não cumulativas)

| Prioridade | Frente | Critério para GO | Estado |
|---|---|---|---|
| P0 | Fontes, direitos, validade e átomos | Cada campo aponta a versão original conferida, licença por uso, pacote de claim/átomo e revisor independente | **HOLD** |
| P0 | Segurança / auth / DB | RLS, grants, views, tokens, RBAC e revisões independentes; plano de migrations e rollback | **HOLD** |
| P0 | Integração e Canonical Main | Mapear 136 branches e 90 PRs por domínio/SHA; selecionar candidatas e executar testes de regressão; resolver PRs bloqueantes sem merge em massa | **HOLD** |
| P0 | Publicação | Escolher deployment canônico, corrigir erro/blocked e verificar E2E, rollback e observabilidade | **HOLD** |
| P1 | Conteúdo educacional | Revisar extração/atomização por origem e direitos; aceitar claims M08/M09 e projeções editoriais individualmente | **HOLD** |
| P1 | Ferramentas e UX | Vetores clínicos, tradução, acessibilidade, responsividade e testes por calculadora; confrontar mocks e rotas | **PARCIAL** |
| P1 | Governança e auditoria | Maker/checker/auditor separados, decisão assinada e gates independentes demonstrados | **PARCIAL / HOLD** |

**Percentual global:** não há denominador de aceites independentes e pesos aprovados para cálculo honesto. Os **7/9 (77,8%)** são **somente CI da PR #1** e **não** o progresso da plataforma. Sem homologação clínica e release confiável, a prontidão de produção é **NO-GO**.

**Próximas ordens de trabalho:** (1) qualificar referências dos 41 instrumentos por versão/pinpoint/licença; (2) reconciliar 16 projeções e 18 claims sem asserção; (3) auditar auth/RLS efetivos; (4) organizar PRs/branches por domínio; (5) recuperar build/deploy canônico; (6) E2E e aceite independente. Não integrar WU-TRIB/contabilidade ao Cânone clínico por semelhança de nome.


## 4. Complemento P0 — build Vercel e RLS por papel

**Corte complementar:** 14/11/2026, auditorias não mutantes de build e metadados. O fechamento global continua **NO-GO**.

### Vercel: correção preliminar e causa residual comprovada

- [Workspace PR #71](https://github.com/IndiciumFIN/dev-chatgpt-workspace/pull/71) em `DRAFT`: separou `npm run build` de `db:migrate`; configurou `tanstack-start`, `npm ci` e guard de build; não foi fundida em `main`.
- Projeto Vercel `dev-chatgpt-workspace` configurado para `framework=tanstack-start`, output override removido. **Somente configuração do projeto, não promoção de release**.
- Um preview isolado ainda retornou `STATIC_BUILD_NO_OUT_DIR: dist`. O [preflight Github Actions](https://github.com/IndiciumFIN/dev-chatgpt-workspace/actions/runs/43665351445) executou build sem `DATABASE_URL` e sem deploy, provando: `.vercel/output/nitro.json` presente, **`.vercel/output/config.json` ausente**, uma entrada de função e 21 entradas estáticas. Três testes de isolamento do build passaram, o verificador de Build Output API V3 falhou corretamente.
- Próximo P0: harmonizar versão/preset Nitro v3 com o **Build Output API completo**, emitir `config.json` verificado e rotas/functions corretas em ambiente isolado, testar SSR, server functions, autenticação e rollback no preview. **Proibido** mascarar como pasta `dist` estática (exporia arquivos de função sem SSR).
- O CI geral do workspace segue com quatro contratos gerados divergentes (`clinical-tools`, `routes`, `components`, `chrome-bands`), falha também observada em `main`. Os testes candidatos de Better Auth reportaram cinco falhas na branch; reconciliar com o owner de auth, sem confundir com o bug de build.

### Supabase: exposição efetiva versus contagem de warnings

Conferência de metadados do projeto `Calculadoras-Smart` em modo somente leitura:

| Schema | Tabelas | RLS desligada | RLS sem policy | SELECT anon | SELECT authenticated |
|---|---:|---:|---:|---:|---:|
| `ce_platform` | 96 | 0 | 62 | 0 | 0 |
| `ce_research_candidate` | 23 | 0 | 23 | 0 | 0 |
| `public` | 48 | 0 | 25 | 12 | 28 |

Os 245 avisos `rls_enabled_no_policy` no advisor não equivalem a 245 vazamentos: tabela sem policy é negada por padrão às roles sujeitas à RLS, desde que não haja bypass por owner/definer e conforme `GRANT`/schema exposto. Das oito tabelas `public` selecionadas com policies explícitas, todas as oito tinham expressões que referenciavam identidade `auth.uid`/JWT e nenhuma usava `USING true` irrestrito no recorte. Esta conferência **não é um teste de acesso HTTP nem de RLS com identidades diferentes**.

P0 de segurança: testar leitura/gravação de objetos `public` sob `anon` e usuários distintos; confirmar Data API `exposed_schemas`, grants de schema e views definer (há uma view `public` sem `security_invoker=true`, mas não foi constatado `SELECT` direto para `anon` ou `authenticated`); verificar as quatro functions com `search_path` mutável, extensão em `public` e Leak Password Protection desativado indicados pelo Security Advisor. Não alterar policies unilateralmente, nem abrir tabelas para cumprir a contagem de warnings.

Fontes técnicas: [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [Vercel Build Output API](https://vercel.com/docs/build-output-api), [TanStack Start na Vercel](https://vercel.com/kb/guide/deploy-a-tanstack-start-app-to-vercel).

**Go/no-go:** sem documentação de direitos clínicos, RLS real validada por papel e preview SSR funcional, a plataforma permanece em `HOLD_HUMAN / NO-GO`. A PR #71 é uma frente de correção independente e não é autorização de merge das demais branches.
