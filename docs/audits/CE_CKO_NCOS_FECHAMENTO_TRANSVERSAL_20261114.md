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
