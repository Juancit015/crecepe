## Context

Ver `proposal.md`. Inventario de jerga visible: `index.html` (title, og, franja "E-commerce Bagisto", cards con "Bagisto:/SEO técnico + GEO base (llms.txt, Schema)/Schema.org", alts), 3 subpáginas (títulos, incluye, FAQs visibles — ojo: distinguir FAQ visible de respuestas dentro del JSON-LD schema, que se conservan).

## Goals / Non-Goals

**Goals:**
- Sustituciones beneficio→mecanismo en todo el copy visible, plan renombrado, máquinas intactas.

**Non-Goals:**
- No se tocan precios, URLs, layout, schema JSON-LD, `llms.txt` ni FAQ estructurados de máquinas.

## Decisions

- **Decisión 1: glosario de sustitución fijo.**
  Bagisto→"tienda virtual" (nota menor "con tecnología Bagisto" solo en subpágina tienda) · "SEO técnico + GEO base (llms.txt, Schema)"→"apareces en Google y te recomienda la IA" · "Datos estructurados Schema.org"→"Google y la IA entienden tu negocio" · "LLMs/agentes"→"asistentes de IA que trabajan solos" · "E-commerce"→"tienda virtual". Tono: el del hero nuevo (tiempo + dinero).
- **Decisión 2: FAQ con doble capa.**
  Las respuestas visibles del FAQ se simplifican; los `"text"` del JSON-LD FAQPage conservan tecnicismos (son para Google, no se ven). Al implementar, verificar par a par que no se toque el bloque `application/ld+json`.
- **Decisión 3: title/og para humanos.**
  `<title>` y OG en lenguaje simple ("Tienda Virtual", "vende sola"); la keyword técnica vive en schema + `llms.txt`.

## Risks / Trade-offs

- [Riesgo] Algún visible con jerga puede esconderse en `alt`, `aria-label` o FAQ de subpáginas: barrido final con `rg` incluido en tareas.

## Migration Plan

- Reescribir visibles en index + 3 subpáginas, barrido `rg` de jerga en copy visible, verificar schema intacto con diff. `openspec validate lenguaje-cliente`.

## Open Questions

- Textos finales exactos los aprueba el dueño al aplicar (mismo flujo que el hero).
