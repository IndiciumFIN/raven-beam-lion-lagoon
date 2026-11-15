// GERADO por scripts/generate-entity-contracts.mjs — nao editar a mao.
// A fonte da verdade sao os JSON em contracts/entities/. Qualquer mudanca aqui
// e sobrescrita no proximo run e detectada pelo gate de cobertura.
export interface ContractItem { id: string; [k: string]: unknown }
export interface Contract<T> { contract: string; domain: string; items: T[] }

export const contractRoutes = [
  {
    "id": "CE-ROUTE-$",
    "file": "src/routes/$.tsx"
  },
  {
    "id": "CE-ROUTE-admin",
    "file": "src/routes/admin.tsx"
  },
  {
    "id": "CE-ROUTE-album",
    "file": "src/routes/album.tsx"
  },
  {
    "id": "CE-ROUTE-assinante.ferramentas.$slug",
    "file": "src/routes/assinante.ferramentas.$slug.tsx"
  },
  {
    "id": "CE-ROUTE-assinante",
    "file": "src/routes/assinante.tsx"
  },
  {
    "id": "CE-ROUTE-bibliotecas.$slug.$object",
    "file": "src/routes/bibliotecas.$slug.$object.tsx"
  },
  {
    "id": "CE-ROUTE-bibliotecas.$slug.index",
    "file": "src/routes/bibliotecas.$slug.index.tsx"
  },
  {
    "id": "CE-ROUTE-bibliotecas.$slug",
    "file": "src/routes/bibliotecas.$slug.tsx"
  },
  {
    "id": "CE-ROUTE-bibliotecas.index",
    "file": "src/routes/bibliotecas.index.tsx"
  },
  {
    "id": "CE-ROUTE-blog.$slug",
    "file": "src/routes/blog.$slug.tsx"
  },
  {
    "id": "CE-ROUTE-blog.index",
    "file": "src/routes/blog.index.tsx"
  },
  {
    "id": "CE-ROUTE-blog.mary-eliza-mahoney",
    "file": "src/routes/blog.mary-eliza-mahoney.tsx"
  },
  {
    "id": "CE-ROUTE-bolsas",
    "file": "src/routes/bolsas.tsx"
  },
  {
    "id": "CE-ROUTE-calculadoras-trabalhistas",
    "file": "src/routes/calculadoras-trabalhistas.tsx"
  },
  {
    "id": "CE-ROUTE-central-comando",
    "file": "src/routes/central-comando.tsx"
  },
  {
    "id": "CE-ROUTE-concurso",
    "file": "src/routes/concurso.tsx"
  },
  {
    "id": "CE-ROUTE-concursos",
    "file": "src/routes/concursos.tsx"
  },
  {
    "id": "CE-ROUTE-conta",
    "file": "src/routes/conta.tsx"
  },
  {
    "id": "CE-ROUTE-curiosidades",
    "file": "src/routes/curiosidades.tsx"
  },
  {
    "id": "CE-ROUTE-cursos-sus",
    "file": "src/routes/cursos-sus.tsx"
  },
  {
    "id": "CE-ROUTE-doencas-compulsorias",
    "file": "src/routes/doencas-compulsorias.tsx"
  },
  {
    "id": "CE-ROUTE-estudo",
    "file": "src/routes/estudo.tsx"
  },
  {
    "id": "CE-ROUTE-exames-laboratoriais",
    "file": "src/routes/exames-laboratoriais.tsx"
  },
  {
    "id": "CE-ROUTE-ferramentas-pesquisa",
    "file": "src/routes/ferramentas-pesquisa.tsx"
  },
  {
    "id": "CE-ROUTE-ferramentas.$slug",
    "file": "src/routes/ferramentas.$slug.tsx"
  },
  {
    "id": "CE-ROUTE-forum",
    "file": "src/routes/forum.tsx"
  },
  {
    "id": "CE-ROUTE-index",
    "file": "src/routes/index.tsx"
  },
  {
    "id": "CE-ROUTE-institucional.$hub.$page",
    "file": "src/routes/institucional.$hub.$page.tsx"
  },
  {
    "id": "CE-ROUTE-institucional.$hub.index",
    "file": "src/routes/institucional.$hub.index.tsx"
  },
  {
    "id": "CE-ROUTE-institucional.$hub",
    "file": "src/routes/institucional.$hub.tsx"
  },
  {
    "id": "CE-ROUTE-institucional.index",
    "file": "src/routes/institucional.index.tsx"
  },
  {
    "id": "CE-ROUTE-institucional",
    "file": "src/routes/institucional.tsx"
  },
  {
    "id": "CE-ROUTE-kids.$section",
    "file": "src/routes/kids.$section.tsx"
  },
  {
    "id": "CE-ROUTE-kids.colorir",
    "file": "src/routes/kids.colorir.tsx"
  },
  {
    "id": "CE-ROUTE-kids.index",
    "file": "src/routes/kids.index.tsx"
  },
  {
    "id": "CE-ROUTE-kids.jogos",
    "file": "src/routes/kids.jogos.tsx"
  },
  {
    "id": "CE-ROUTE-kids",
    "file": "src/routes/kids.tsx"
  },
  {
    "id": "CE-ROUTE-login",
    "file": "src/routes/login.tsx"
  },
  {
    "id": "CE-ROUTE-modelos.$id",
    "file": "src/routes/modelos.$id.tsx"
  },
  {
    "id": "CE-ROUTE-modelos.index",
    "file": "src/routes/modelos.index.tsx"
  },
  {
    "id": "CE-ROUTE-modelos",
    "file": "src/routes/modelos.tsx"
  },
  {
    "id": "CE-ROUTE-oficina-local",
    "file": "src/routes/oficina-local.tsx"
  },
  {
    "id": "CE-ROUTE-oportunidades",
    "file": "src/routes/oportunidades.tsx"
  },
  {
    "id": "CE-ROUTE-pacote",
    "file": "src/routes/pacote.tsx"
  },
  {
    "id": "CE-ROUTE-residencias",
    "file": "src/routes/residencias.tsx"
  },
  {
    "id": "CE-ROUTE-sbar",
    "file": "src/routes/sbar.tsx"
  },
  {
    "id": "CE-ROUTE-secao.$slug",
    "file": "src/routes/secao.$slug.tsx"
  },
  {
    "id": "CE-ROUTE-sessao",
    "file": "src/routes/sessao.tsx"
  },
  {
    "id": "CE-ROUTE-sistema",
    "file": "src/routes/sistema.tsx"
  },
  {
    "id": "CE-ROUTE-vagas",
    "file": "src/routes/vagas.tsx"
  },
  {
    "id": "CE-ROUTE-viladocuidado",
    "file": "src/routes/viladocuidado.tsx"
  }
] as const;
export const contractTools = [
  {
    "id": "CE-TOOL-braden",
    "slug": "braden"
  },
  {
    "id": "CE-TOOL-morse",
    "slug": "morse"
  },
  {
    "id": "CE-TOOL-apgar",
    "slug": "apgar"
  },
  {
    "id": "CE-TOOL-gotejamento",
    "slug": "gotejamento"
  },
  {
    "id": "CE-TOOL-imc",
    "slug": "imc"
  },
  {
    "id": "CE-TOOL-aldrete",
    "slug": "aldrete"
  },
  {
    "id": "CE-TOOL-exames-laboratoriais",
    "slug": "exames-laboratoriais"
  },
  {
    "id": "CE-TOOL-dimensionamento",
    "slug": "dimensionamento"
  },
  {
    "id": "CE-TOOL-escalanumerica",
    "slug": "escalanumerica"
  },
  {
    "id": "CE-TOOL-insulina",
    "slug": "insulina"
  },
  {
    "id": "CE-TOOL-gestacional",
    "slug": "gestacional"
  },
  {
    "id": "CE-TOOL-gasometria",
    "slug": "gasometria"
  },
  {
    "id": "CE-TOOL-gosnell",
    "slug": "gosnell"
  },
  {
    "id": "CE-TOOL-norton",
    "slug": "norton"
  },
  {
    "id": "CE-TOOL-waterlow",
    "slug": "waterlow"
  },
  {
    "id": "CE-TOOL-berg",
    "slug": "berg"
  },
  {
    "id": "CE-TOOL-downton",
    "slug": "downton"
  },
  {
    "id": "CE-TOOL-hendrich",
    "slug": "hendrich"
  },
  {
    "id": "CE-TOOL-humpty",
    "slug": "humpty"
  },
  {
    "id": "CE-TOOL-tinetti",
    "slug": "tinetti"
  },
  {
    "id": "CE-TOOL-cam",
    "slug": "cam"
  },
  {
    "id": "CE-TOOL-cincinnati",
    "slug": "cincinnati"
  },
  {
    "id": "CE-TOOL-fast",
    "slug": "fast"
  },
  {
    "id": "CE-TOOL-four",
    "slug": "four"
  },
  {
    "id": "CE-TOOL-glasgow",
    "slug": "glasgow"
  },
  {
    "id": "CE-TOOL-nihss",
    "slug": "nihss"
  },
  {
    "id": "CE-TOOL-rancholosamigos",
    "slug": "rancholosamigos"
  },
  {
    "id": "CE-TOOL-capurro",
    "slug": "capurro"
  },
  {
    "id": "CE-TOOL-nips",
    "slug": "nips"
  },
  {
    "id": "CE-TOOL-silverman",
    "slug": "silverman"
  },
  {
    "id": "CE-TOOL-ramsay",
    "slug": "ramsay"
  },
  {
    "id": "CE-TOOL-richmond",
    "slug": "richmond"
  },
  {
    "id": "CE-TOOL-curb-65",
    "slug": "curb-65"
  },
  {
    "id": "CE-TOOL-qsofa",
    "slug": "qsofa"
  },
  {
    "id": "CE-TOOL-sofa",
    "slug": "sofa"
  },
  {
    "id": "CE-TOOL-bps",
    "slug": "bps"
  },
  {
    "id": "CE-TOOL-cries",
    "slug": "cries"
  },
  {
    "id": "CE-TOOL-flacc",
    "slug": "flacc"
  },
  {
    "id": "CE-TOOL-lanss",
    "slug": "lanss"
  },
  {
    "id": "CE-TOOL-painad",
    "slug": "painad"
  },
  {
    "id": "CE-TOOL-barthel",
    "slug": "barthel"
  },
  {
    "id": "CE-TOOL-katz",
    "slug": "katz"
  },
  {
    "id": "CE-TOOL-lachs",
    "slug": "lachs"
  },
  {
    "id": "CE-TOOL-lawton",
    "slug": "lawton"
  },
  {
    "id": "CE-TOOL-bishop",
    "slug": "bishop"
  },
  {
    "id": "CE-TOOL-asa",
    "slug": "asa"
  },
  {
    "id": "CE-TOOL-classificacao_wifi",
    "slug": "classificacao_wifi"
  },
  {
    "id": "CE-TOOL-sistema_sinbad",
    "slug": "sistema_sinbad"
  },
  {
    "id": "CE-TOOL-hamilton",
    "slug": "hamilton"
  },
  {
    "id": "CE-TOOL-gds",
    "slug": "gds"
  },
  {
    "id": "CE-TOOL-fugulin",
    "slug": "fugulin"
  },
  {
    "id": "CE-TOOL-elpo",
    "slug": "elpo"
  }
] as const;
export const contractComponents = [
  {
    "id": "CE-COMP-agent-roster",
    "file": "src/components/site/agent-roster.tsx"
  },
  {
    "id": "CE-COMP-app-link",
    "file": "src/components/site/app-link.tsx"
  },
  {
    "id": "CE-COMP-areas",
    "file": "src/components/site/areas.tsx"
  },
  {
    "id": "CE-COMP-breadcrumb",
    "file": "src/components/site/breadcrumb.tsx"
  },
  {
    "id": "CE-COMP-callout",
    "file": "src/components/site/callout.tsx"
  },
  {
    "id": "CE-COMP-command-center",
    "file": "src/components/site/command-center.tsx"
  },
  {
    "id": "CE-COMP-community",
    "file": "src/components/site/community.tsx"
  },
  {
    "id": "CE-COMP-home-page",
    "file": "src/components/site/home-page.tsx"
  },
  {
    "id": "CE-COMP-not-found",
    "file": "src/components/site/not-found.tsx"
  },
  {
    "id": "CE-COMP-page-hero",
    "file": "src/components/site/page-hero.tsx"
  },
  {
    "id": "CE-COMP-page-toc",
    "file": "src/components/site/page-toc.tsx"
  },
  {
    "id": "CE-COMP-page-tools",
    "file": "src/components/site/page-tools.tsx"
  },
  {
    "id": "CE-COMP-related-content",
    "file": "src/components/site/related-content.tsx"
  },
  {
    "id": "CE-COMP-section-page",
    "file": "src/components/site/section-page.tsx"
  },
  {
    "id": "CE-COMP-shell",
    "file": "src/components/site/shell.tsx"
  },
  {
    "id": "CE-COMP-site-nav",
    "file": "src/components/site/site-nav.tsx"
  },
  {
    "id": "CE-COMP-study",
    "file": "src/components/site/study.tsx"
  },
  {
    "id": "CE-COMP-subscription",
    "file": "src/components/site/subscription.tsx"
  },
  {
    "id": "CE-COMP-translated",
    "file": "src/components/site/translated.tsx"
  }
] as const;
export const contractTokens = [
  {
    "id": "CE-TOKEN-NAVY",
    "name": "Navy",
    "hex": "#1A3E74",
    "role": "canonical"
  },
  {
    "id": "CE-TOKEN-NAVY-MID",
    "name": "Navy mid",
    "hex": "#1E4D8C",
    "role": "canonical"
  },
  {
    "id": "CE-TOKEN-NAVY-DEEP",
    "name": "Navy deep",
    "hex": "#163269",
    "role": "canonical"
  },
  {
    "id": "CE-TOKEN-SKY",
    "name": "Sky",
    "hex": "#4A90E2",
    "role": "canonical"
  },
  {
    "id": "CE-TOKEN-INK",
    "name": "Ink",
    "hex": "#0F2440",
    "role": "canonical"
  },
  {
    "id": "CE-TOKEN-SLATE",
    "name": "Slate",
    "hex": "#475569",
    "role": "canonical"
  },
  {
    "id": "CE-TOKEN-MUTED",
    "name": "Muted",
    "hex": "#64748B",
    "role": "canonical"
  },
  {
    "id": "CE-TOKEN-CANVAS",
    "name": "Canvas",
    "hex": "#F9FAFB",
    "role": "canonical"
  },
  {
    "id": "CE-TOKEN-SKY-500",
    "name": "Sky 500",
    "hex": "#0EA5E9",
    "role": "rejected"
  },
  {
    "id": "CE-TOKEN-INDIGO",
    "name": "Indigo",
    "hex": "#6366F1",
    "role": "rejected"
  },
  {
    "id": "CE-TOKEN-GRADIENTE-HERO",
    "name": "Gradiente hero",
    "hex": "#E0F2FE",
    "role": "rejected"
  }
] as const;
export const contractChrome = [
  {
    "id": "CE-CHROME-UTILITY",
    "value": "44px"
  },
  {
    "id": "CE-CHROME-HEADER",
    "value": "64px"
  },
  {
    "id": "CE-CHROME-TOTAL",
    "value": "calc(var(--chrome-utility) + var(--chrome-a11y) + var(--chrome-header))"
  },
  {
    "id": "CE-CHROME-TABLET",
    "value": "calc(var(--chrome-utility) + var(--chrome-header))"
  },
  {
    "id": "CE-CHROME-GAP",
    "value": "16px"
  },
  {
    "id": "CE-CHROME-RULE",
    "value": "rgba(255, 255, 255, 0.16)"
  },
  {
    "id": "CE-CHROME-CONTROL-BORDER",
    "value": "rgba(255, 255, 255, 0.34)"
  },
  {
    "id": "CE-CHROME-CONTROL-HOVER",
    "value": "rgba(255, 255, 255, 0.14)"
  },
  {
    "id": "CE-CHROME-CONTROL-SELECTED",
    "value": "rgba(255, 255, 255, 0.2)"
  },
  {
    "id": "CE-CHROME-EMPHASIS-BG",
    "value": "#ffffff"
  },
  {
    "id": "CE-CHROME-EMPHASIS-FG",
    "value": "#1a3e74"
  }
] as const;
export const contractArticles = [
  {
    "id": "CE-ARTICLE-MARY-ELIZA-MAHONEY",
    "slug": "mary-eliza-mahoney",
    "route": "/blog/mary-eliza-mahoney"
  }
] as const;
// Contrato universal de ferramenta — o vocabulario do CKO (canonical_id, nao id).
export const contractToolSources = [
  {
    "canonical_id": "SRC-CFM-PARECER-28-2020",
    "authority": "Conselho Federal de Medicina (CFM)",
    "jurisdiction": "BR",
    "source_type": "REGULATOR"
  },
  {
    "canonical_id": "SRC-REV-ENF-USP-BRADEN-1999",
    "authority": "Revista de Enfermagem da USP",
    "jurisdiction": "BR",
    "source_type": "PRIMARY_STUDY"
  },
  {
    "canonical_id": "SRC-CAPES-MEC-MANUAL-CONSULTA-RAPIDA",
    "authority": "CAPES/MEC",
    "jurisdiction": "BR",
    "source_type": "GUIDELINE"
  },
  {
    "canonical_id": "SRC-OMS-OBESIDADE-2000",
    "authority": "Organização Mundial da Saúde (OMS/WHO)",
    "jurisdiction": "INTERNACIONAL",
    "source_type": "REGULATOR"
  },
  {
    "canonical_id": "SRC-APGAR-1953",
    "authority": "Current Researches in Anesthesia & Analgesia",
    "jurisdiction": "INTERNACIONAL",
    "source_type": "PRIMARY_STUDY"
  },
  {
    "canonical_id": "SRC-GOTEJAMENTO-FORMULA-CLASSICA",
    "authority": "COREN-SP",
    "jurisdiction": "BR",
    "source_type": "STANDARD"
  }
] as const;
export const contractToolBindings = [
  {
    "canonical_id": "AB-ALDRETE-ATIVIDADE",
    "field_path": "tool.aldrete.criteria.atividade",
    "source_ids": [
      "SRC-CFM-PARECER-28-2020"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-ALDRETE-RESPIRACAO",
    "field_path": "tool.aldrete.criteria.respiracao",
    "source_ids": [
      "SRC-CFM-PARECER-28-2020"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-ALDRETE-CIRCULACAO",
    "field_path": "tool.aldrete.criteria.circulacao",
    "source_ids": [
      "SRC-CFM-PARECER-28-2020"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-ALDRETE-CONSCIENCIA",
    "field_path": "tool.aldrete.criteria.consciencia",
    "source_ids": [
      "SRC-CFM-PARECER-28-2020"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-ALDRETE-SATURACAO",
    "field_path": "tool.aldrete.criteria.saturacao",
    "source_ids": [
      "SRC-CFM-PARECER-28-2020"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-ALDRETE-BAND-OK",
    "field_path": "tool.aldrete.bands.ok",
    "source_ids": [
      "SRC-CFM-PARECER-28-2020"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-ALDRETE-BAND-WARN",
    "field_path": "tool.aldrete.bands.warn",
    "source_ids": [
      "SRC-CFM-PARECER-28-2020"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-ALDRETE-BAND-DANGER",
    "field_path": "tool.aldrete.bands.danger",
    "source_ids": [
      "SRC-CFM-PARECER-28-2020"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-BRADEN-SENSORIAL",
    "field_path": "tool.braden.criteria.sensorial",
    "source_ids": [
      "SRC-REV-ENF-USP-BRADEN-1999"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-BRADEN-UMIDADE",
    "field_path": "tool.braden.criteria.umidade",
    "source_ids": [
      "SRC-REV-ENF-USP-BRADEN-1999"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-BRADEN-ATIVIDADE",
    "field_path": "tool.braden.criteria.atividade",
    "source_ids": [
      "SRC-REV-ENF-USP-BRADEN-1999"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-BRADEN-MOBILIDADE",
    "field_path": "tool.braden.criteria.mobilidade",
    "source_ids": [
      "SRC-REV-ENF-USP-BRADEN-1999"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-BRADEN-NUTRICAO",
    "field_path": "tool.braden.criteria.nutricao",
    "source_ids": [
      "SRC-REV-ENF-USP-BRADEN-1999"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-BRADEN-FRICCAO",
    "field_path": "tool.braden.criteria.friccao",
    "source_ids": [
      "SRC-REV-ENF-USP-BRADEN-1999"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-BRADEN-BAND-MUITOALTO",
    "field_path": "tool.braden.bands.muitoAlto",
    "source_ids": [
      "SRC-REV-ENF-USP-BRADEN-1999"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-BRADEN-BAND-ALTO",
    "field_path": "tool.braden.bands.alto",
    "source_ids": [
      "SRC-REV-ENF-USP-BRADEN-1999"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-BRADEN-BAND-MODERADO",
    "field_path": "tool.braden.bands.moderado",
    "source_ids": [
      "SRC-REV-ENF-USP-BRADEN-1999"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-BRADEN-BAND-BAIXO",
    "field_path": "tool.braden.bands.baixo",
    "source_ids": [
      "SRC-REV-ENF-USP-BRADEN-1999"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-BRADEN-BAND-SEMRISCO",
    "field_path": "tool.braden.bands.semRisco",
    "source_ids": [
      "SRC-REV-ENF-USP-BRADEN-1999"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-MORSE-QUEDAS",
    "field_path": "tool.morse.criteria.quedas",
    "source_ids": [
      "SRC-CAPES-MEC-MANUAL-CONSULTA-RAPIDA"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-MORSE-DIAGNOSTICO",
    "field_path": "tool.morse.criteria.diagnostico",
    "source_ids": [
      "SRC-CAPES-MEC-MANUAL-CONSULTA-RAPIDA"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-MORSE-AUXILIO",
    "field_path": "tool.morse.criteria.auxilio",
    "source_ids": [
      "SRC-CAPES-MEC-MANUAL-CONSULTA-RAPIDA"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-MORSE-VENOSO",
    "field_path": "tool.morse.criteria.venoso",
    "source_ids": [
      "SRC-CAPES-MEC-MANUAL-CONSULTA-RAPIDA"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-MORSE-MARCHA",
    "field_path": "tool.morse.criteria.marcha",
    "source_ids": [
      "SRC-CAPES-MEC-MANUAL-CONSULTA-RAPIDA"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-MORSE-MENTAL",
    "field_path": "tool.morse.criteria.mental",
    "source_ids": [
      "SRC-CAPES-MEC-MANUAL-CONSULTA-RAPIDA"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-MORSE-BAND-BAIXO",
    "field_path": "tool.morse.bands.baixo",
    "source_ids": [
      "SRC-CAPES-MEC-MANUAL-CONSULTA-RAPIDA"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-MORSE-BAND-MEDIO",
    "field_path": "tool.morse.bands.medio",
    "source_ids": [
      "SRC-CAPES-MEC-MANUAL-CONSULTA-RAPIDA"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-MORSE-BAND-ALTO",
    "field_path": "tool.morse.bands.alto",
    "source_ids": [
      "SRC-CAPES-MEC-MANUAL-CONSULTA-RAPIDA"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-APGAR-APARENCIA",
    "field_path": "tool.apgar.criteria.aparencia",
    "source_ids": [
      "SRC-APGAR-1953"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-APGAR-PULSO",
    "field_path": "tool.apgar.criteria.pulso",
    "source_ids": [
      "SRC-APGAR-1953"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-APGAR-REFLEXO",
    "field_path": "tool.apgar.criteria.reflexo",
    "source_ids": [
      "SRC-APGAR-1953"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-APGAR-TONUS",
    "field_path": "tool.apgar.criteria.tonus",
    "source_ids": [
      "SRC-APGAR-1953"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-APGAR-COR",
    "field_path": "tool.apgar.criteria.cor",
    "source_ids": [
      "SRC-APGAR-1953"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-APGAR-BAND-NORMAL",
    "field_path": "tool.apgar.bands.normal",
    "source_ids": [
      "SRC-APGAR-1953"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-APGAR-BAND-DEPRESSAO",
    "field_path": "tool.apgar.bands.depressao",
    "source_ids": [
      "SRC-APGAR-1953"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-APGAR-BAND-GRAVE",
    "field_path": "tool.apgar.bands.grave",
    "source_ids": [
      "SRC-APGAR-1953"
    ],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-GOTEJAMENTO-VOLUME",
    "field_path": "tool.gotejamento.fields.volume",
    "source_ids": [
      "SRC-GOTEJAMENTO-FORMULA-CLASSICA"
    ],
    "authority_class": "TECHNICAL_STANDARD",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-GOTEJAMENTO-HORAS",
    "field_path": "tool.gotejamento.fields.horas",
    "source_ids": [
      "SRC-GOTEJAMENTO-FORMULA-CLASSICA"
    ],
    "authority_class": "TECHNICAL_STANDARD",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-GOTEJAMENTO-MINUTOS",
    "field_path": "tool.gotejamento.fields.minutos",
    "source_ids": [
      "SRC-GOTEJAMENTO-FORMULA-CLASSICA"
    ],
    "authority_class": "TECHNICAL_STANDARD",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-GOTEJAMENTO-FATOR",
    "field_path": "tool.gotejamento.fields.fator",
    "source_ids": [
      "SRC-GOTEJAMENTO-FORMULA-CLASSICA"
    ],
    "authority_class": "TECHNICAL_STANDARD",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-IMC-PESO",
    "field_path": "tool.imc.fields.peso",
    "source_ids": [
      "SRC-OMS-OBESIDADE-2000"
    ],
    "authority_class": "TECHNICAL_STANDARD",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-IMC-ALTURA",
    "field_path": "tool.imc.fields.altura",
    "source_ids": [
      "SRC-OMS-OBESIDADE-2000"
    ],
    "authority_class": "TECHNICAL_STANDARD",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-ESCALANUMERICA-DOR",
    "field_path": "tool.escalanumerica.criteria.dor",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GOSNELL-MENTAL",
    "field_path": "tool.gosnell.criteria.mental",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GOSNELL-CONTINENCIA",
    "field_path": "tool.gosnell.criteria.continencia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GOSNELL-MOBILIDADE",
    "field_path": "tool.gosnell.criteria.mobilidade",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GOSNELL-ATIVIDADE",
    "field_path": "tool.gosnell.criteria.atividade",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GOSNELL-NUTRICAO",
    "field_path": "tool.gosnell.criteria.nutricao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NORTON-PHYSICAL_CONDITION",
    "field_path": "tool.norton.criteria.physical_condition",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NORTON-MENTAL_CONDITION",
    "field_path": "tool.norton.criteria.mental_condition",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NORTON-ACTIVITY",
    "field_path": "tool.norton.criteria.activity",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NORTON-MOBILITY",
    "field_path": "tool.norton.criteria.mobility",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NORTON-INCONTINENCE",
    "field_path": "tool.norton.criteria.incontinence",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-BUILD",
    "field_path": "tool.waterlow.criteria.build",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-SKIN",
    "field_path": "tool.waterlow.criteria.skin",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-SEX",
    "field_path": "tool.waterlow.criteria.sex",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-AGE_BAND",
    "field_path": "tool.waterlow.criteria.age_band",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-CONTINENCE",
    "field_path": "tool.waterlow.criteria.continence",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-MOBILITY",
    "field_path": "tool.waterlow.criteria.mobility",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-APPETITE",
    "field_path": "tool.waterlow.criteria.appetite",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-ORGAN",
    "field_path": "tool.waterlow.criteria.organ",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-VASCULAR",
    "field_path": "tool.waterlow.criteria.vascular",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-ANEMIA",
    "field_path": "tool.waterlow.criteria.anemia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-SMOKING",
    "field_path": "tool.waterlow.criteria.smoking",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-NEUROLOGIC",
    "field_path": "tool.waterlow.criteria.neurologic",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-ORTHOPEDIC",
    "field_path": "tool.waterlow.criteria.orthopedic",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-SURGERY",
    "field_path": "tool.waterlow.criteria.surgery",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-WATERLOW-MEDICATIONS",
    "field_path": "tool.waterlow.criteria.medications",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BERG-SIT_TO_STAND",
    "field_path": "tool.berg.criteria.sit_to_stand",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BERG-STAND_UNSUPPORTED",
    "field_path": "tool.berg.criteria.stand_unsupported",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BERG-SIT_UNSUPPORTED",
    "field_path": "tool.berg.criteria.sit_unsupported",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BERG-STAND_TO_SIT",
    "field_path": "tool.berg.criteria.stand_to_sit",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BERG-TRANSFERS",
    "field_path": "tool.berg.criteria.transfers",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BERG-EYES_CLOSED",
    "field_path": "tool.berg.criteria.eyes_closed",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BERG-FEET_TOGETHER",
    "field_path": "tool.berg.criteria.feet_together",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BERG-FORWARD_REACH",
    "field_path": "tool.berg.criteria.forward_reach",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BERG-PICK_UP",
    "field_path": "tool.berg.criteria.pick_up",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BERG-LOOK_BEHIND",
    "field_path": "tool.berg.criteria.look_behind",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BERG-TURN_360",
    "field_path": "tool.berg.criteria.turn_360",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BERG-STEP_ALTERNATE",
    "field_path": "tool.berg.criteria.step_alternate",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BERG-TANDEM",
    "field_path": "tool.berg.criteria.tandem",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BERG-SINGLE_LEG",
    "field_path": "tool.berg.criteria.single_leg",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-DOWNTON-QUEDAS",
    "field_path": "tool.downton.criteria.quedas",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-DOWNTON-SEDATIVOS",
    "field_path": "tool.downton.criteria.sedativos",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-DOWNTON-DIURETICOS",
    "field_path": "tool.downton.criteria.diureticos",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-DOWNTON-ANTI_HIPERTENSIVOS",
    "field_path": "tool.downton.criteria.anti_hipertensivos",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-DOWNTON-ANTI_PARKINSON",
    "field_path": "tool.downton.criteria.anti_parkinson",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-DOWNTON-ANTIDEPRESSIVOS",
    "field_path": "tool.downton.criteria.antidepressivos",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-DOWNTON-VISAO",
    "field_path": "tool.downton.criteria.visao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-DOWNTON-AUDICAO",
    "field_path": "tool.downton.criteria.audicao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-DOWNTON-MEMBROS",
    "field_path": "tool.downton.criteria.membros",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-DOWNTON-MENTAL",
    "field_path": "tool.downton.criteria.mental",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-DOWNTON-MARCHA",
    "field_path": "tool.downton.criteria.marcha",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HENDRICH-CONFUSAO",
    "field_path": "tool.hendrich.criteria.confusao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HENDRICH-DEPRESSAO",
    "field_path": "tool.hendrich.criteria.depressao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HENDRICH-ELIMINACAO",
    "field_path": "tool.hendrich.criteria.eliminacao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HENDRICH-VERTIGEM",
    "field_path": "tool.hendrich.criteria.vertigem",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HENDRICH-SEXO_MASCULINO",
    "field_path": "tool.hendrich.criteria.sexo_masculino",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HENDRICH-ANTIEPILEPTICO",
    "field_path": "tool.hendrich.criteria.antiepileptico",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HENDRICH-BENZODIAZEPINICO",
    "field_path": "tool.hendrich.criteria.benzodiazepinico",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HENDRICH-GET_UP_GO",
    "field_path": "tool.hendrich.criteria.get_up_go",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HUMPTY-IDADE",
    "field_path": "tool.humpty.criteria.idade",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HUMPTY-SEXO",
    "field_path": "tool.humpty.criteria.sexo",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HUMPTY-DIAGNOSTICO",
    "field_path": "tool.humpty.criteria.diagnostico",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HUMPTY-COGNICAO",
    "field_path": "tool.humpty.criteria.cognicao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HUMPTY-AMBIENTE",
    "field_path": "tool.humpty.criteria.ambiente",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HUMPTY-CIRURGIA",
    "field_path": "tool.humpty.criteria.cirurgia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HUMPTY-MEDICAMENTOS",
    "field_path": "tool.humpty.criteria.medicamentos",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-SITTING",
    "field_path": "tool.tinetti.criteria.sitting",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-RISING",
    "field_path": "tool.tinetti.criteria.rising",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-ATTEMPT",
    "field_path": "tool.tinetti.criteria.attempt",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-IMMEDIATE",
    "field_path": "tool.tinetti.criteria.immediate",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-STANDING",
    "field_path": "tool.tinetti.criteria.standing",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-NUDGE",
    "field_path": "tool.tinetti.criteria.nudge",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-EYES",
    "field_path": "tool.tinetti.criteria.eyes",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-TURN_STEPS",
    "field_path": "tool.tinetti.criteria.turn_steps",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-TURN_STABILITY",
    "field_path": "tool.tinetti.criteria.turn_stability",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-SIT_DOWN",
    "field_path": "tool.tinetti.criteria.sit_down",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-GAIT_START",
    "field_path": "tool.tinetti.criteria.gait_start",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-STEP_RIGHT_LEN",
    "field_path": "tool.tinetti.criteria.step_right_len",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-STEP_RIGHT_HEIGHT",
    "field_path": "tool.tinetti.criteria.step_right_height",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-STEP_LEFT_LEN",
    "field_path": "tool.tinetti.criteria.step_left_len",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-STEP_LEFT_HEIGHT",
    "field_path": "tool.tinetti.criteria.step_left_height",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-SYMMETRY",
    "field_path": "tool.tinetti.criteria.symmetry",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-CONTINUITY",
    "field_path": "tool.tinetti.criteria.continuity",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-PATH",
    "field_path": "tool.tinetti.criteria.path",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-TRUNK",
    "field_path": "tool.tinetti.criteria.trunk",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-TINETTI-STANCE",
    "field_path": "tool.tinetti.criteria.stance",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CAM-RASS",
    "field_path": "tool.cam.criteria.rass",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CAM-F1",
    "field_path": "tool.cam.criteria.f1",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CAM-F2",
    "field_path": "tool.cam.criteria.f2",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CAM-F4",
    "field_path": "tool.cam.criteria.f4",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CINCINNATI-FACE",
    "field_path": "tool.cincinnati.criteria.face",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CINCINNATI-ARM",
    "field_path": "tool.cincinnati.criteria.arm",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CINCINNATI-SPEECH",
    "field_path": "tool.cincinnati.criteria.speech",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FAST-FACE",
    "field_path": "tool.fast.criteria.face",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FAST-ARM",
    "field_path": "tool.fast.criteria.arm",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FAST-SPEECH",
    "field_path": "tool.fast.criteria.speech",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FOUR-OCULAR",
    "field_path": "tool.four.criteria.ocular",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FOUR-MOTORA",
    "field_path": "tool.four.criteria.motora",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FOUR-TRONCO",
    "field_path": "tool.four.criteria.tronco",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FOUR-RESPIRACAO",
    "field_path": "tool.four.criteria.respiracao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GLASGOW-EYE",
    "field_path": "tool.glasgow.criteria.eye",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GLASGOW-VERBAL",
    "field_path": "tool.glasgow.criteria.verbal",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GLASGOW-MOTOR",
    "field_path": "tool.glasgow.criteria.motor",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-LOC",
    "field_path": "tool.nihss.criteria.loc",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-LOCQ",
    "field_path": "tool.nihss.criteria.locq",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-LOCC",
    "field_path": "tool.nihss.criteria.locc",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-GAZE",
    "field_path": "tool.nihss.criteria.gaze",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-VISUAL",
    "field_path": "tool.nihss.criteria.visual",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-FACIAL",
    "field_path": "tool.nihss.criteria.facial",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-ARM_L",
    "field_path": "tool.nihss.criteria.arm_l",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-ARM_R",
    "field_path": "tool.nihss.criteria.arm_r",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-LEG_L",
    "field_path": "tool.nihss.criteria.leg_l",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-LEG_R",
    "field_path": "tool.nihss.criteria.leg_r",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-ATAXIA",
    "field_path": "tool.nihss.criteria.ataxia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-SENSORY",
    "field_path": "tool.nihss.criteria.sensory",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-LANGUAGE",
    "field_path": "tool.nihss.criteria.language",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-DYSARTHRIA",
    "field_path": "tool.nihss.criteria.dysarthria",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIHSS-NEGLECT",
    "field_path": "tool.nihss.criteria.neglect",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-RANCHOLOSAMIGOS-NIVEL",
    "field_path": "tool.rancholosamigos.criteria.nivel",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CAPURRO-PELE",
    "field_path": "tool.capurro.criteria.pele",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CAPURRO-ORELHA",
    "field_path": "tool.capurro.criteria.orelha",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CAPURRO-GLANDULA",
    "field_path": "tool.capurro.criteria.glandula",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CAPURRO-PLANTA",
    "field_path": "tool.capurro.criteria.planta",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CAPURRO-MAMILO",
    "field_path": "tool.capurro.criteria.mamilo",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIPS-EXPRESSAO_FACIAL",
    "field_path": "tool.nips.criteria.expressao_facial",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIPS-CHORO",
    "field_path": "tool.nips.criteria.choro",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIPS-RESPIRACAO",
    "field_path": "tool.nips.criteria.respiracao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIPS-BRACOS",
    "field_path": "tool.nips.criteria.bracos",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIPS-PERNAS",
    "field_path": "tool.nips.criteria.pernas",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-NIPS-ESTADO_CONSCIENCIA",
    "field_path": "tool.nips.criteria.estado_consciencia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SILVERMAN-THORACOABDOMINAL",
    "field_path": "tool.silverman.criteria.thoracoabdominal",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SILVERMAN-LOWER_CHEST",
    "field_path": "tool.silverman.criteria.lower_chest",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SILVERMAN-XIPHOID",
    "field_path": "tool.silverman.criteria.xiphoid",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SILVERMAN-NASAL_FLARING",
    "field_path": "tool.silverman.criteria.nasal_flaring",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SILVERMAN-EXPIRATORY_GRUNT",
    "field_path": "tool.silverman.criteria.expiratory_grunt",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-RAMSAY-RAMSAY_LEVEL",
    "field_path": "tool.ramsay.criteria.ramsay_level",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-RICHMOND-RASS_LEVEL",
    "field_path": "tool.richmond.criteria.rass_level",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CURB-65-CONFUSAO",
    "field_path": "tool.curb-65.criteria.confusao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CURB-65-UREIA",
    "field_path": "tool.curb-65.criteria.ureia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CURB-65-RESPIRACAO",
    "field_path": "tool.curb-65.criteria.respiracao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CURB-65-PRESSAO",
    "field_path": "tool.curb-65.criteria.pressao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CURB-65-IDADE",
    "field_path": "tool.curb-65.criteria.idade",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-QSOFA-MENTAL",
    "field_path": "tool.qsofa.criteria.mental",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-QSOFA-PA",
    "field_path": "tool.qsofa.criteria.pa",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-QSOFA-FR",
    "field_path": "tool.qsofa.criteria.fr",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SOFA-RESPIRATORIO",
    "field_path": "tool.sofa.criteria.respiratorio",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SOFA-PLAQUETAS",
    "field_path": "tool.sofa.criteria.plaquetas",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SOFA-BILIRRUBINA",
    "field_path": "tool.sofa.criteria.bilirrubina",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SOFA-CARDIOVASCULAR",
    "field_path": "tool.sofa.criteria.cardiovascular",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SOFA-GLASCOW",
    "field_path": "tool.sofa.criteria.glascow",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SOFA-RENAL",
    "field_path": "tool.sofa.criteria.renal",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BPS-FACE",
    "field_path": "tool.bps.criteria.face",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BPS-ARMS",
    "field_path": "tool.bps.criteria.arms",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BPS-VENTILATOR",
    "field_path": "tool.bps.criteria.ventilator",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CRIES-CHORO",
    "field_path": "tool.cries.criteria.choro",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CRIES-OXIGENIO",
    "field_path": "tool.cries.criteria.oxigenio",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CRIES-SINAIS",
    "field_path": "tool.cries.criteria.sinais",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CRIES-EXPRESSAO",
    "field_path": "tool.cries.criteria.expressao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CRIES-SONO",
    "field_path": "tool.cries.criteria.sono",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FLACC-FACE",
    "field_path": "tool.flacc.criteria.face",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FLACC-LEGS",
    "field_path": "tool.flacc.criteria.legs",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FLACC-ACTIVITY",
    "field_path": "tool.flacc.criteria.activity",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FLACC-CRY",
    "field_path": "tool.flacc.criteria.cry",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FLACC-CONSOLABILITY",
    "field_path": "tool.flacc.criteria.consolability",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LANSS-SENSACOES",
    "field_path": "tool.lanss.criteria.sensacoes",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LANSS-COR",
    "field_path": "tool.lanss.criteria.cor",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LANSS-HIPERSENSIBILIDADE",
    "field_path": "tool.lanss.criteria.hipersensibilidade",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LANSS-PAROXISTICA",
    "field_path": "tool.lanss.criteria.paroxistica",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LANSS-TEMPERATURA",
    "field_path": "tool.lanss.criteria.temperatura",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LANSS-ALODINIA",
    "field_path": "tool.lanss.criteria.alodinia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LANSS-LIMIAR",
    "field_path": "tool.lanss.criteria.limiar",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-PAINAD-RESPIRACAO",
    "field_path": "tool.painad.criteria.respiracao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-PAINAD-VOCALIZACAO",
    "field_path": "tool.painad.criteria.vocalizacao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-PAINAD-EXPRESSAO",
    "field_path": "tool.painad.criteria.expressao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-PAINAD-CORPO",
    "field_path": "tool.painad.criteria.corpo",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-PAINAD-CONSOLABILIDADE",
    "field_path": "tool.painad.criteria.consolabilidade",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BARTHEL-FEEDING",
    "field_path": "tool.barthel.criteria.feeding",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BARTHEL-BATHING",
    "field_path": "tool.barthel.criteria.bathing",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BARTHEL-GROOMING",
    "field_path": "tool.barthel.criteria.grooming",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BARTHEL-DRESSING",
    "field_path": "tool.barthel.criteria.dressing",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BARTHEL-BOWEL",
    "field_path": "tool.barthel.criteria.bowel",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BARTHEL-BLADDER",
    "field_path": "tool.barthel.criteria.bladder",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BARTHEL-TOILET",
    "field_path": "tool.barthel.criteria.toilet",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BARTHEL-TRANSFERS",
    "field_path": "tool.barthel.criteria.transfers",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BARTHEL-MOBILITY",
    "field_path": "tool.barthel.criteria.mobility",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BARTHEL-STAIRS",
    "field_path": "tool.barthel.criteria.stairs",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-KATZ-BANHO",
    "field_path": "tool.katz.criteria.banho",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-KATZ-VESTIR",
    "field_path": "tool.katz.criteria.vestir",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-KATZ-SANITARIO",
    "field_path": "tool.katz.criteria.sanitario",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-KATZ-TRANSFERENCIA",
    "field_path": "tool.katz.criteria.transferencia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-KATZ-CONTINENCIA",
    "field_path": "tool.katz.criteria.continencia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-KATZ-ALIMENTACAO",
    "field_path": "tool.katz.criteria.alimentacao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LACHS-VISAO",
    "field_path": "tool.lachs.criteria.visao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LACHS-AUDICAO",
    "field_path": "tool.lachs.criteria.audicao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LACHS-CONTINENCIA",
    "field_path": "tool.lachs.criteria.continencia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LACHS-AVD_AIVD",
    "field_path": "tool.lachs.criteria.avd_aivd",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LACHS-MEMBROS_SUPERIORES",
    "field_path": "tool.lachs.criteria.membros_superiores",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LACHS-MEMBROS_INFERIORES",
    "field_path": "tool.lachs.criteria.membros_inferiores",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LACHS-NUTRICAO",
    "field_path": "tool.lachs.criteria.nutricao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LACHS-COGNICAO",
    "field_path": "tool.lachs.criteria.cognicao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LACHS-HUMOR",
    "field_path": "tool.lachs.criteria.humor",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LACHS-AMBIENTE",
    "field_path": "tool.lachs.criteria.ambiente",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LACHS-REDE_APOIO",
    "field_path": "tool.lachs.criteria.rede_apoio",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LAWTON-TELEFONE",
    "field_path": "tool.lawton.criteria.telefone",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LAWTON-COMPRAS",
    "field_path": "tool.lawton.criteria.compras",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LAWTON-REFEICOES",
    "field_path": "tool.lawton.criteria.refeicoes",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LAWTON-CASA",
    "field_path": "tool.lawton.criteria.casa",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LAWTON-ROUPAS",
    "field_path": "tool.lawton.criteria.roupas",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LAWTON-TRANSPORTE",
    "field_path": "tool.lawton.criteria.transporte",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LAWTON-MEDICAMENTOS",
    "field_path": "tool.lawton.criteria.medicamentos",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-LAWTON-FINANCAS",
    "field_path": "tool.lawton.criteria.financas",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BISHOP-DILATION",
    "field_path": "tool.bishop.criteria.dilation",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BISHOP-EFFACEMENT",
    "field_path": "tool.bishop.criteria.effacement",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BISHOP-STATION",
    "field_path": "tool.bishop.criteria.station",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BISHOP-CONSISTENCY",
    "field_path": "tool.bishop.criteria.consistency",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-BISHOP-POSITION",
    "field_path": "tool.bishop.criteria.position",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-ASA-ASA_PHYSICAL_STATUS",
    "field_path": "tool.asa.criteria.asa_physical_status",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CLASSIFICACAO_WIFI-WOUND",
    "field_path": "tool.classificacao_wifi.criteria.wound",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CLASSIFICACAO_WIFI-ISCHEMIA",
    "field_path": "tool.classificacao_wifi.criteria.ischemia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-CLASSIFICACAO_WIFI-INFECTION",
    "field_path": "tool.classificacao_wifi.criteria.infection",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SISTEMA_SINBAD-SITE",
    "field_path": "tool.sistema_sinbad.criteria.site",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SISTEMA_SINBAD-ISQUEMIA",
    "field_path": "tool.sistema_sinbad.criteria.isquemia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SISTEMA_SINBAD-NEUROPATIA",
    "field_path": "tool.sistema_sinbad.criteria.neuropatia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SISTEMA_SINBAD-INFECCAO",
    "field_path": "tool.sistema_sinbad.criteria.infeccao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SISTEMA_SINBAD-AREA",
    "field_path": "tool.sistema_sinbad.criteria.area",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-SISTEMA_SINBAD-PROFUNDIDADE",
    "field_path": "tool.sistema_sinbad.criteria.profundidade",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HAMILTON-ANSIEDADE",
    "field_path": "tool.hamilton.criteria.ansiedade",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HAMILTON-TENSAO",
    "field_path": "tool.hamilton.criteria.tensao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HAMILTON-MEDOS",
    "field_path": "tool.hamilton.criteria.medos",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HAMILTON-INSONIA",
    "field_path": "tool.hamilton.criteria.insonia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HAMILTON-COGNICAO",
    "field_path": "tool.hamilton.criteria.cognicao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HAMILTON-HUMOR_DEPRIMIDO",
    "field_path": "tool.hamilton.criteria.humor_deprimido",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HAMILTON-MUSCULAR",
    "field_path": "tool.hamilton.criteria.muscular",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HAMILTON-SENSORIAL",
    "field_path": "tool.hamilton.criteria.sensorial",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HAMILTON-CARDIOVASCULAR",
    "field_path": "tool.hamilton.criteria.cardiovascular",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HAMILTON-RESPIRATORIO",
    "field_path": "tool.hamilton.criteria.respiratorio",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HAMILTON-GASTROINTESTINAL",
    "field_path": "tool.hamilton.criteria.gastrointestinal",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HAMILTON-GENITURINARIO",
    "field_path": "tool.hamilton.criteria.geniturinario",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HAMILTON-AUTONOMICO",
    "field_path": "tool.hamilton.criteria.autonomico",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-HAMILTON-ENTREVISTA",
    "field_path": "tool.hamilton.criteria.entrevista",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_1",
    "field_path": "tool.gds.criteria.gds_1",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_2",
    "field_path": "tool.gds.criteria.gds_2",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_3",
    "field_path": "tool.gds.criteria.gds_3",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_4",
    "field_path": "tool.gds.criteria.gds_4",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_5",
    "field_path": "tool.gds.criteria.gds_5",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_6",
    "field_path": "tool.gds.criteria.gds_6",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_7",
    "field_path": "tool.gds.criteria.gds_7",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_8",
    "field_path": "tool.gds.criteria.gds_8",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_9",
    "field_path": "tool.gds.criteria.gds_9",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_10",
    "field_path": "tool.gds.criteria.gds_10",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_11",
    "field_path": "tool.gds.criteria.gds_11",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_12",
    "field_path": "tool.gds.criteria.gds_12",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_13",
    "field_path": "tool.gds.criteria.gds_13",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_14",
    "field_path": "tool.gds.criteria.gds_14",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-GDS-GDS_15",
    "field_path": "tool.gds.criteria.gds_15",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FUGULIN-MENTAL",
    "field_path": "tool.fugulin.criteria.mental",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FUGULIN-OXIGENACAO",
    "field_path": "tool.fugulin.criteria.oxigenacao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FUGULIN-SINAIS_VITAIS",
    "field_path": "tool.fugulin.criteria.sinais_vitais",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FUGULIN-MOTILIDADE",
    "field_path": "tool.fugulin.criteria.motilidade",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FUGULIN-DEAMBULACAO",
    "field_path": "tool.fugulin.criteria.deambulacao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FUGULIN-ALIMENTACAO",
    "field_path": "tool.fugulin.criteria.alimentacao",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FUGULIN-CUIDADO_CORPORAL",
    "field_path": "tool.fugulin.criteria.cuidado_corporal",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FUGULIN-ELIMINACOES",
    "field_path": "tool.fugulin.criteria.eliminacoes",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FUGULIN-TERAPEUTICA",
    "field_path": "tool.fugulin.criteria.terapeutica",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FUGULIN-PELE",
    "field_path": "tool.fugulin.criteria.pele",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FUGULIN-CURATIVO",
    "field_path": "tool.fugulin.criteria.curativo",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-FUGULIN-TEMPO_CURATIVO",
    "field_path": "tool.fugulin.criteria.tempo_curativo",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-ELPO-POSICAO_CIRURGICA",
    "field_path": "tool.elpo.criteria.posicao_cirurgica",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-ELPO-TEMPO_CIRURGIA",
    "field_path": "tool.elpo.criteria.tempo_cirurgia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-ELPO-ANESTESIA",
    "field_path": "tool.elpo.criteria.anestesia",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-ELPO-SUPERFICIE",
    "field_path": "tool.elpo.criteria.superficie",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-ELPO-MEMBROS",
    "field_path": "tool.elpo.criteria.membros",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-ELPO-COMORBIDADES",
    "field_path": "tool.elpo.criteria.comorbidades",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-HOLD-ELPO-FAIXA_ETARIA",
    "field_path": "tool.elpo.criteria.faixa_etaria",
    "source_ids": [],
    "authority_class": "CLINICAL",
    "decision": "HOLD_HUMAN"
  },
  {
    "canonical_id": "AB-CTX-NOME",
    "field_path": "tool.contexto.nome",
    "source_ids": [],
    "authority_class": "INTERNAL_NONCLINICAL",
    "decision": "NOT_APPLICABLE_JUSTIFIED"
  },
  {
    "canonical_id": "AB-CTX-IDADE",
    "field_path": "tool.contexto.idade",
    "source_ids": [],
    "authority_class": "INTERNAL_NONCLINICAL",
    "decision": "NOT_APPLICABLE_JUSTIFIED"
  },
  {
    "canonical_id": "AB-CTX-SETOR",
    "field_path": "tool.contexto.setor",
    "source_ids": [],
    "authority_class": "INTERNAL_NONCLINICAL",
    "decision": "NOT_APPLICABLE_JUSTIFIED"
  },
  {
    "canonical_id": "AB-CTX-DATA",
    "field_path": "tool.contexto.data",
    "source_ids": [],
    "authority_class": "INTERNAL_NONCLINICAL",
    "decision": "NOT_APPLICABLE_JUSTIFIED"
  },
  {
    "canonical_id": "FD-ALDRETE-ATIVIDADE",
    "field_path": "tool.aldrete.criteria.atividade",
    "source_ids": []
  },
  {
    "canonical_id": "FD-ALDRETE-RESPIRACAO",
    "field_path": "tool.aldrete.criteria.respiracao",
    "source_ids": []
  },
  {
    "canonical_id": "FD-ALDRETE-CIRCULACAO",
    "field_path": "tool.aldrete.criteria.circulacao",
    "source_ids": []
  },
  {
    "canonical_id": "FD-ALDRETE-CONSCIENCIA",
    "field_path": "tool.aldrete.criteria.consciencia",
    "source_ids": []
  },
  {
    "canonical_id": "FD-ALDRETE-SATURACAO",
    "field_path": "tool.aldrete.criteria.saturacao",
    "source_ids": []
  },
  {
    "canonical_id": "FD-BRADEN-SENSORIAL",
    "field_path": "tool.braden.criteria.sensorial",
    "source_ids": []
  },
  {
    "canonical_id": "FD-BRADEN-UMIDADE",
    "field_path": "tool.braden.criteria.umidade",
    "source_ids": []
  },
  {
    "canonical_id": "FD-BRADEN-ATIVIDADE",
    "field_path": "tool.braden.criteria.atividade",
    "source_ids": []
  },
  {
    "canonical_id": "FD-BRADEN-MOBILIDADE",
    "field_path": "tool.braden.criteria.mobilidade",
    "source_ids": []
  },
  {
    "canonical_id": "FD-BRADEN-NUTRICAO",
    "field_path": "tool.braden.criteria.nutricao",
    "source_ids": []
  },
  {
    "canonical_id": "FD-BRADEN-FRICCAO",
    "field_path": "tool.braden.criteria.friccao",
    "source_ids": []
  },
  {
    "canonical_id": "FD-MORSE-QUEDAS",
    "field_path": "tool.morse.criteria.quedas",
    "source_ids": []
  },
  {
    "canonical_id": "FD-MORSE-DIAGNOSTICO",
    "field_path": "tool.morse.criteria.diagnostico",
    "source_ids": []
  },
  {
    "canonical_id": "FD-MORSE-AUXILIO",
    "field_path": "tool.morse.criteria.auxilio",
    "source_ids": []
  },
  {
    "canonical_id": "FD-MORSE-VENOSO",
    "field_path": "tool.morse.criteria.venoso",
    "source_ids": []
  },
  {
    "canonical_id": "FD-MORSE-MARCHA",
    "field_path": "tool.morse.criteria.marcha",
    "source_ids": []
  },
  {
    "canonical_id": "FD-MORSE-MENTAL",
    "field_path": "tool.morse.criteria.mental",
    "source_ids": []
  },
  {
    "canonical_id": "FD-APGAR-APARENCIA",
    "field_path": "tool.apgar.criteria.aparencia",
    "source_ids": []
  },
  {
    "canonical_id": "FD-APGAR-PULSO",
    "field_path": "tool.apgar.criteria.pulso",
    "source_ids": []
  },
  {
    "canonical_id": "FD-APGAR-REFLEXO",
    "field_path": "tool.apgar.criteria.reflexo",
    "source_ids": []
  },
  {
    "canonical_id": "FD-APGAR-TONUS",
    "field_path": "tool.apgar.criteria.tonus",
    "source_ids": []
  },
  {
    "canonical_id": "FD-APGAR-COR",
    "field_path": "tool.apgar.criteria.cor",
    "source_ids": []
  },
  {
    "canonical_id": "FD-GOTEJAMENTO-VOLUME",
    "field_path": "tool.gotejamento.fields.volume",
    "source_ids": []
  },
  {
    "canonical_id": "FD-GOTEJAMENTO-HORAS",
    "field_path": "tool.gotejamento.fields.horas",
    "source_ids": []
  },
  {
    "canonical_id": "FD-GOTEJAMENTO-MINUTOS",
    "field_path": "tool.gotejamento.fields.minutos",
    "source_ids": []
  },
  {
    "canonical_id": "FD-GOTEJAMENTO-FATOR",
    "field_path": "tool.gotejamento.fields.fator",
    "source_ids": []
  },
  {
    "canonical_id": "FD-IMC-PESO",
    "field_path": "tool.imc.fields.peso",
    "source_ids": []
  },
  {
    "canonical_id": "FD-IMC-ALTURA",
    "field_path": "tool.imc.fields.altura",
    "source_ids": []
  },
  {
    "canonical_id": "FD-CTX-NOME",
    "field_path": "tool.contexto.nome",
    "source_ids": []
  },
  {
    "canonical_id": "FD-CTX-IDADE",
    "field_path": "tool.contexto.idade",
    "source_ids": []
  },
  {
    "canonical_id": "FD-CTX-SETOR",
    "field_path": "tool.contexto.setor",
    "source_ids": []
  },
  {
    "canonical_id": "FD-CTX-DATA",
    "field_path": "tool.contexto.data",
    "source_ids": []
  }
] as const;
export const contractToolComponents = [
  {
    "id": "CE-COMP-agent-roster",
    "component_key": "agent-roster"
  },
  {
    "id": "CE-COMP-app-link",
    "component_key": "app-link"
  },
  {
    "id": "CE-COMP-areas",
    "component_key": "areas"
  },
  {
    "id": "CE-COMP-breadcrumb",
    "component_key": "breadcrumb"
  },
  {
    "id": "CE-COMP-callout",
    "component_key": "callout"
  },
  {
    "id": "CE-COMP-command-center",
    "component_key": "command-center"
  },
  {
    "id": "CE-COMP-community",
    "component_key": "community"
  },
  {
    "id": "CE-COMP-home-page",
    "component_key": "home-page"
  },
  {
    "id": "CE-COMP-not-found",
    "component_key": "not-found"
  },
  {
    "id": "CE-COMP-page-hero",
    "component_key": "page-hero"
  },
  {
    "id": "CE-COMP-page-toc",
    "component_key": "page-toc"
  },
  {
    "id": "CE-COMP-page-tools",
    "component_key": "page-tools"
  },
  {
    "id": "CE-COMP-related-content",
    "component_key": "related-content"
  },
  {
    "id": "CE-COMP-section-page",
    "component_key": "section-page"
  },
  {
    "id": "CE-COMP-shell",
    "component_key": "shell"
  },
  {
    "id": "CE-COMP-site-nav",
    "component_key": "site-nav"
  },
  {
    "id": "CE-COMP-study",
    "component_key": "study"
  },
  {
    "id": "CE-COMP-subscription",
    "component_key": "subscription"
  },
  {
    "id": "CE-COMP-translated",
    "component_key": "translated"
  }
] as const;
export const contractBrand = [
  {
    "id": "CE-BRAND-CALC-ICON-WEBP",
    "file": "public/brand/calc-icon.webp",
    "status": "live"
  },
  {
    "id": "CE-BRAND-CHAPEU-WEBP",
    "file": "public/brand/chapeu.webp",
    "status": "live"
  },
  {
    "id": "CE-BRAND-ENFERMEIRA-WEBP",
    "file": "public/brand/enfermeira.webp",
    "status": "live"
  },
  {
    "id": "CE-BRAND-EXT-BRADEN-WEBP",
    "file": "public/brand/ext-braden.webp",
    "status": "live"
  },
  {
    "id": "CE-BRAND-EXT-GASOMETRIA-WEBP",
    "file": "public/brand/ext-gasometria.webp",
    "status": "live"
  },
  {
    "id": "CE-BRAND-EXT-GOTEJAMENTO-WEBP",
    "file": "public/brand/ext-gotejamento.webp",
    "status": "live"
  },
  {
    "id": "CE-BRAND-FORM-001-WEBP",
    "file": "public/brand/form-001.webp",
    "status": "live"
  },
  {
    "id": "CE-BRAND-LIVRO-WEBP",
    "file": "public/brand/livro.webp",
    "status": "live"
  },
  {
    "id": "CE-BRAND-LOGO-SVG",
    "file": "public/brand/logo.svg",
    "status": "superseded",
    "supersededBy": "CE-BRAND-LOGO-WEBP",
    "nota": "Ícone vetorial criado no repositório. Não é o logotipo oficial e não entra no cabeçalho."
  },
  {
    "id": "CE-BRAND-LOGO-WEBP",
    "file": "public/brand/logo.webp",
    "status": "live",
    "papel": "marca-primaria",
    "nota": "Logotipo oficial do release. A palavra já está na imagem, então o cabeçalho não repete o nome ao lado."
  }
] as const;
