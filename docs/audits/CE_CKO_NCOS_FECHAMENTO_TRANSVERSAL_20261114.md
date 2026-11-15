# CE / CKO / NCOS — Registro de fechamento transversal (candidato)

**Corte técnico:** 2026-11-14. **Main examinada:** `87218a63ae43f2c31210a41e54400ceb73543710`. **Integração:** [PR #1](https://github.com/IndiciumFIN/raven-beam-lion-lagoon/pull/1), branch `fix/cko-fechamento-ci-proveniencia-20261114`.

**Decisão:** `HOLD_HUMAN / NO_GO_CLINICAL_RELEASE`. Este arquivo **não é aceite**, não emite assinatura do titular, não admite WO, não aprova normas e não altera Supabase ou Drive. A conclusão requer evidência real, revisão independente e gates completos.

## 1. Linha de base e fontes internas

| Origem | Identidade e escopo confirmado | Limite |
| --- | --- | --- |
| ZIP normativos/OPA/COSO/IIA recebido | SHA-256 `ba439f8697d2c9a407c21c70c5c4617fa2ef0bb7c47a8a49fe7cce4489f25e05`; 55 arquivos; 39 mapeamentos originais + 7 referências adicionais; 46 workpapers candidatos | São propostas de aplicação, **não** 46 cláusulas auditadas ou políticas autorizadas. OPA real e SHACL completo informados como NOT_RUN pelo próprio pacote. |
| ZIP Mavis de agentes | SHA-256 `e6380c7387626166d3d41206762cbdfa5317cd52b89d8961a8d1c97cce3d1e36`; 239 entradas ZIP, 196 arquivos, 39 `agent.json` | Exportação não prova execução, separação Maker/Checker/Auditor, assinatura ou admissão de agentes. |
| Biblioteca ChatGPT | `HANDOFF_CKO_PRODUCAO_DE_CONTEUDO_2026-11-14.md`; `AUDITORIA_122_BRANCHES_NORMATIVOS_CAMADAS_CKO_NCOS_20261114.md`; `REVISAO_CANONICA_NORMATIVA_EDITORIAL_2026-11-14.md` | Snapshots anteriores não devem substituir HEAD e banco atuais. Pares `(1)` podem ter bytes iguais: deduplicar no índice, sem apagar originals. |
| GitHub | `IndiciumFIN/raven-beam-lion-lagoon`, `IndiciumFIN/dev-chatgpt-workspace`, `IndiciumFIN/calculadorasdeenfermagem`, `IndiciumFIN/blue-ember-fjord-prairie`; inventário anterior de 154 referências de branches nos 8 repositórios | Metadados Git e diff de SHA **não** são auditoria semântica completa de cada branch. Não fazer merge em massa nem exclusão automática. |
| Google Drive | M08 arquivo `1cuXkb1bCg4lwtFtHL9B9aiANY1ioIhEk`; M09 `11pA7kaFqtv0UKTpx2h49GBPD4lh1T_Z6`; PMO `1vi129pgXWMZPFddxlMd5YemMEohumxqk714yCoGCVOg` | Presença, metadados e índice não comprovam extração integral, direitos, conteúdo aprovado ou versionamento idêntico. |
| Supabase Calculadoras-Smart | Inventário SELECT no recorte anterior: 362 referências, 33 extrações, 598 vínculos de artefato e 10.925 de campo | Estados `PASS_METADATA` e `ACTIVE_REFERENCE` não equivalem a cláusulas/claims validados. Sem alteração de banco nesta PR. |

**Conteúdo preservado:** M08/M09 informam 46 claims candidatos, 43 evidências e três temas mestres (Processo de Enfermagem; Segurança do Paciente; Segurança Perioperatória), não 46 artigos publicados. O conflito de ementas da UC08 segue `HOLD_CURRICULUM_CONFLICT`.

## 2. Cadeia única de autoridade, sem um segundo Cânone

`fonte oficial/editorial + edição + direitos + hash` → `trecho/pinpoint + integridade` → `átomo` → `claim e revisão` → `conceito canônico` → `contrato de ferramenta/conteúdo` → `teste e controle independente` → `WO/Kernel autorizado` → `publicação`.

- Referências editoriais autorais são lícitas como fonte editorial identificada, mas **não substituem** o documento normativo que sustenta uma obrigação.
- Mapear por ID estável, edição e SHA; não por nome semelhante de arquivo, tabela ou branch.
- Havendo direitos desconhecidos, hash zerado, fonte sem acesso autorizado, revisão faltante ou conflito de versão: `HOLD_SOURCE`, `HOLD_RIGHTS` ou `HOLD_HUMAN`.
- Não copiar normas ISO, COSO, IIA, conteúdo licenciado da NLM ou outros originais protegidos para Git público; preservar apenas metadados e artefatos autorais permitidos.
- Não conectar automaticamente o schema `wutrib`, nem conteúdo contábil, à plataforma de Enfermagem. COSO e IIA aqui são referenciais de **governança**, não fontes de veredito clínico.

## 3. Revisão normativa externa e expectativas de excelência

| Fonte oficial | Obrigação/expectativa a testar | Gate ainda necessário |
| --- | --- | --- |
| [COFEN 736/2024](https://www.cofen.gov.br/resolucao-cofen-no-736-de-17-de-janeiro-de-2024/) | Processo de Enfermagem em 5 etapas, papéis do enfermeiro/equipe; revogação da 358/2009 | Revisão profissional e por dispositivo nos claims; validação dos papéis e registros em SAE |
| [COFEN 754/2024](https://www.cofen.gov.br/resolucao-cofen-no-754-de-16-de-maio-de-2024/) | Prontuário eletrônico e plataformas digitais de Enfermagem | Determinar aplicabilidade à funcionalidade real; LGPD, RBAC, sigilo, trilha e assinatura |
| [COFEN 743/2024](https://www.cofen.gov.br/resolucao-cofen-no-743-de-12-de-marco-de-2024/) e [Parecer 01/2024](https://www.cofen.gov.br/parecer-normativo-no-1-2024-cofen/) | Revogação da 543/2017 e parâmetros de planejamento da força de trabalho | Testes de fórmula por cenário, população, IST, prevalência, exceções e parecer clínico |
| [FHIR R4 Vital Signs](https://hl7.org/fhir/R4/vitalsigns.html) | Estruturas, códigos e constraints aplicáveis à interoperabilidade | Teste formal contra perfil e escopo exato; parser de subconjunto não equivale a conformidade integral |
| [NLM MeSH](https://www.nlm.nih.gov/databases/download/mesh.html) | Descriptors, Qualifiers e SCR, edição/DTD por versão | Pin de release, direitos, formatos e testes negativos |
| [IIA Global Internal Audit Standards](https://www.theiia.org/en/content/standards/complete-global-internal-audit-standards/) | Em vigor desde 09/01/2025: independência, objetividade, evidência de conformidade | Check independente; nenhum agente que produziu evidência deve autoatestar conformidade |
| [COSO — Internal Control](https://www.coso.org/internal-control) | Ambiente de controle, risco, atividades, comunicação e monitoramento | Evidência por controle, desenho e efetividade; não copiar framework protegido |
| [OPA Policy Testing](https://www.openpolicyagent.org/docs/policy-testing) | Testes Rego rastreáveis e executados, não apenas presença de CLI | `opa test` real com versão fixada, decisões negativa/positiva, logs, checklist de promoção |
| [NHS Health Content](https://service-manual.nhs.uk/content/standard-for-creating-health-content) | Qualidade da evidência, revisão clínica, feedback, atualização e direitos | Dono editorial, periodicidade de revisão, ato/claim versionado, direitos e i18n clínica segura |

**Benchmark de produto:** MDCalc (estudos e validade por ferramenta), DynaMed (revisão editorial contínua) e Open RN (conteúdo educacional peer reviewed com licença apropriada) são referências de processo; comparar fluxos verificáveis, **não** copiar telas, textos ou declarar superioridade sem teste independente.

## 4. Problemas executáveis e critérios de conclusão

| ID | Bloqueio verificável | Critério de aceite |
| --- | --- | --- |
| CI-01 | `verify-bibliotecas` apagava arquivos excluídos pelo `.vercelignore` antes de `npm test`. | [PR #1](https://github.com/IndiciumFIN/raven-beam-lion-lagoon/pull/1) move simulação de exclusões para após testes e auditoria; CI completo verde na branch. |
| CI-02 | Dois logs COFEN/COR ausentes em `raven` e presentes no `dev-chatgpt-workspace`. | Blobs Git idênticos aos originais: `59640577f91ab6dbbe5ff620a2b0a53659f426a9`, `8d89abbc97323dbe9aec3cf828ffa33d09e05132`. São provas de execução histórica, **não** homologação. |
| CI-03 | Exemplo OG de argumento `--game` era capturado com pontuação Markdown. | Corrigir documento de origem, não relaxar parser/teste; teste de CI PASS. |
| CKO-01 | Schemas, vocabulários e bindings não formam ainda uma cadeia de autoridade integral. | Identidade de fonte/edição/hash por campo; zero órfãos; revisão independente; teste negativo de promoção. |
| CKO-02 | Contratos de ferramentas clínicas têm lacunas de vetores, `evidence_refs` e fontes. | Cada ferramenta com casos limites, uso pretendido, fórmulas, contraindicações e evidência verificável; HOLD até aceite humano. |
| CKO-03 | Rights e projeções do corpus incompletos; claims M08/M09 candidatos. | Licença por operação, revisão científica/jurídica e aprovação para cada claim e material antes de publicar. |
| SEC-01 | Auditoria histórica Supabase: 245 avisos INFO de RLS sem policy, 4 warnings de `search_path`, 1 extensão public, 1 senhas vazadas. | Análise de grants, Data API, funções privilegiadas, testes cross-role; não habilitar acesso por mera presença de tabela. |
| INTEG-01 | Diferentes branches e repositórios têm arquivos iguais/diferentes, além de agents Mavis com namespace próprio. | Manifesto SHA, proveniência, decisões keep/supersede/HOLD, sem duplicar DS, Kernel ou motor editorial. |
| REL-01 | Proteção e gate de produção insuficientes. | PR revisada, checks obrigatórios, rollback, evidência de execução E2E e decisão humana assinada pelo fluxo autorizado. |

## 5. Critérios objetivos de GO — cumulativos

1. CI obrigatório: todos os testes previstos executados, 0 falhas e skips bloqueantes justificados; build concluído sem migração ou deploy oculto.
2. Os workflows de fonte, linhagem, schema, segurança e direitos não podem ser transformados em PASS por supressão de controles; resolver as suas causas com documentos e testes reais.
3. Fontes efetivamente vigentes, edições, licenças, fragmentos e SHA conferidos, com reprodutibilidade de extração e auditor independente.
4. Nenhum diagnóstico/prescrição de enfermagem atribuído indevidamente, nenhuma ferramenta clínica publicada sem revisão e vetores por campo.
5. Nenhum registro de WO/Kernel/OPA ou agente autoaprovado com base em variável, texto ou declaração do executor.
6. Check independente de Supabase (RLS, privilégios, funções, Data API), GitHub (branch protection) e Vercel (build/rollback).
7. Aceite formal distinto do operador, auditor/checker e responsável clínico/jurídico quando exigido.

**Enquanto qualquer controle obrigatório estiver aberto: `NO-GO`.**


## 6. Remediações adicionais executadas na PR #1 — corte de 2026-11-14

- Inventário de rotas atualizado por *Git blob SHA*: 53 rotas atuais, 20 entradas na fonte histórica `dev-chatgpt-workspace@7ed49913`, 18 bytes de rota divergentes e dois iguais. O registro novo é `audit/branch-canonicalization/ncos-route-current-sha-observation-20261114.v1.json`; o histórico original permanece intacto. Sua interpretação não é aprovação: `HOLD_ROLE_TEMPLATE_AND_ISOLATION`, 0 autorizadas.
- O diagnóstico de build NCOS passou após o verificador distinguir histórico de estado atual, mantendo `releaseGate=BLOCKED`. O teste `scripts/test-route-registry.test.mjs` valida os 53 hashes, a preservação dos 20 pins e a não aprovação.
- Os 46 *authority bindings* e 32 definições de campo antes marcados `EVIDENCE_BOUND`, mesmo sem pacote de evidência, passaram para `HOLD_HUMAN` na fonte geradora `src/lib/tools/governance.ts` e no contrato derivado. O gate `check-generated-fresh` agora confronta também `tool-sources` e `tool-bindings`, para prevenir drift silencioso.
- O validador `scripts/lib/ncos-source-lineage.mjs` reprova `BINDING_EVIDENCE_STATUS_WITHOUT_BUNDLE` e `FIELD_EVIDENCE_STATUS_WITHOUT_BUNDLE`; testes negativos adicionados. **Nenhuma evidência clínica foi inventada.**

### 6.1 Causas exatas do verificador fonte-primeiro

Evidência GitHub Actions: [NCOS canonical evidence and editorial lineage](https://github.com/IndiciumFIN/raven-beam-lion-lagoon/actions/runs/43656069272), cuja execução permanece `HOLD_HUMAN`. O verificador mediu **589 erros** e **790 HOLDs** em 6 fontes candidatas, 320 authority bindings, 32 campos, 52 ferramentas e 27 páginas editoriais.

| Tipo | Quantidade | Ação exigida (sem inventar autoridade) |
| --- | ---: | --- |
| `NOT_IN_CANONICAL_VOCABULARY` | 310 | Reclassificar cada `authority_class=CLINICAL` somente após identificar a fonte e o papel da autoridade. **274** desses bindings não possuem fonte; os demais **36** referem-se a 8 Aldrete/CFM, 11 Braden/estudo, 9 Morse/guia e 8 Apgar/estudo. Não mapear `CLINICAL` automaticamente para `CLINICAL_EVIDENCE`. |
| `BINDING_WITHOUT_SOURCE` | 278 | **274** clínicos de escalas sem fonte qualificada; quatro contextuais `INTERNAL_NONCLINICAL` que precisam da decisão apropriada de vínculo à política interna ou exceção justificada, compatível com o schema. |
| `SOURCE_PINPOINT_MISSING` | 1 | Fórmula clássica de gotejamento sem URI original; procurar fonte confiável e licença antes de preencher. |
| `BINDING_VALIDITY_INCOMPLETE` | 320 HOLD | Preencher vigência `applicable_from` com evidência de cada fonte, não com a data do commit. |
| `BINDING_WITHOUT_ATOM_EVIDENCE` | 320 HOLD | Vincular fragmento, átomo, revisão de direitos e pacote de evidência verificável por campo. |
| `TOOL_EVIDENCE_NOT_BOUND` / `TOOL_SOURCE_IDS_NOT_RECONCILED` | 52 / 51 HOLD | Reconciliar escopos, fontes, limitações, testes e vetores das 52 ferramentas. |
| `EDITORIAL_ORIGIN_NOT_CANONICAL_SOURCE_BINDING` | 25 HOLD | Preservar origem editorial separadamente da fonte normativa/claim. |
| Fonte com `SOURCE_INTEGRITY_NOT_VERIFIED` / `SOURCE_SNAPSHOT_NOT_AVAILABLE` | 6 / 6 HOLD | Os seis SHA-256 permanecem zerados; capturar originais autorizados, versão, data, direitos e hash real. |

Os demais HOLDs incluem seis extensões legadas fora do schema, duas páginas editoriais sem locator e duas fontes com direitos sujeitos a revisão. Nenhuma dessas pendências foi removida para produzir CI verde.

### 6.2 Próximas WOs independentes para fechamento

- **WO-CKO-SOURCE-01:** recuperar fonte oficial e direitos das seis entradas, começando pela fonte de gotejamento sem URI. Provar SHA-256 do arquivo original, edição e trecho exato; autor da evidência distinto do homologador.
- **WO-CKO-BINDING-02:** reconciliar os 274 bindings clínicos sem fonte e os 36 com `authority_class` ambíguo; não definir vigência por aproximação.
- **WO-CKO-EVIDENCE-03:** vincular os 320 bindings a átomos verificados e testes de decisão (positivos, negativos e limites), preservando `HOLD_HUMAN` até aprovação profissional.
- **WO-CKO-ROUTES-04:** revisar por papel/template os 53 atuais, comparando 18 divergências de arquivo contra o snapshot histórico. O inventário SHA aprovado estruturalmente não habilita a rota.
- **WO-CKO-LEGAL-05:** confirmar licenças dos originais, conteúdos educativos, normas e direitos por operação, antes de qualquer armazenamento público de material protegido.


## 7. Fila determinística de revisão por campo (sem homologação)

A validação visual da PR #1 passou após fixar `ubuntu-24.04` no runner de Playwright, sem desabilitar captura de tela ou veredito de navegador. Evidência: [GitHub Actions visual](https://github.com/IndiciumFIN/raven-beam-lion-lagoon/actions/runs/43657826527). No corte `98f2709c8f3a`, 7 de 9 workflows passaram; linhagem e universo de fontes permaneceram `HOLD_HUMAN`.

Para substituir listas dispersas por unidades de trabalho verificáveis, a PR agora gera **`audit-evidence/ncos-canonical-source-lineage/binding-review-queue.v1.json`** em cada auditoria da linhagem. A função pura `buildBindingReviewQueue`, em `scripts/lib/ncos-binding-review-queue.mjs`, deriva exclusivamente das 6 fontes, 320 bindings, 32 field definitions, achados e enum do schema canônico. Cada item contém ID, campo, ferramenta, fontes observadas, definições relacionadas, falhas, vigência, evidências declaradas, prioridade e passos pendentes.

O arquivo mantém `inputDigest` e SHA do commit de execução, sendo preservado como artefato do workflow mesmo quando `--enforce` falha. Os quatro testes negativos específicos verificam ausência de fonte, classe incompatível, snapshot/rights pendentes e proibição de autoaprovação. Contagens históricas do HEAD anterior: 310 classes incompatíveis, 278 sem fonte, 320 sem vigência e 320 sem pacote; as contagens do novo artefato devem ser lidas do CI, não presumidas.

**Regras de interpretação:** todos os itens emitidos são `HOLD_HUMAN`, com `authority_class_candidate=null`, `admitted=false`, `rightsApproved=false`, `evidenceVerified=false`, `releaseEligible=false`. A mera presença de `source_id`, URI, hash textual ou ID de pacote não prova licença, integridade do arquivo original, claim validado ou revisão independente. A lista facilita execução de WO por campo, mas não remove nenhum bloqueio clínico, jurídico, de segurança ou de publicação.

**Dependências da próxima revisão:** para cada campo, identificar fonte adequada e versão, provar vigência e pinpoint, capturar hash de bytes autorizados, revisar direitos e vincular evidência atomizada; em seguida, obter validação clínica e jurídica independente. Enquanto o gate de linhagem ou direitos permanecer em falha, `DRAFT / NO-GO`, sem merge nem migração.
