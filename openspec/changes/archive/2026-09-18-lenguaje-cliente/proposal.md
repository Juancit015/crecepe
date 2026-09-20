## Why

El copy visible habla en tecnicismos (Bagisto, LLMs, Schema, "SEO técnico + GEO base") que al cliente no le dicen nada; le importa qué gana (tiempo y dinero) explicado simple. La propuesta: traducir el copy visible a lenguaje de beneficios ("tienda virtual") y reservar los términos técnicos para máquinas (schema.org, `llms.txt`).

## What Changes

Copy visible del `index.html` + 3 páginas de servicios (sin tocar layout):
- "Tienda Online Bagisto + IA" → "Tienda Virtual + IA" en títulos, cards, planes y relacionados (URL y nombre de archivo intactos; Bagisto queda como nota técnica menor donde aporte confianza).
- Listas de "qué incluye": "SEO técnico + GEO base (llms.txt, Schema)" → beneficio ("apareces en Google y te recomienda la IA"); "Datos estructurados Schema.org" → "Google e IA entienden tu negocio"; "Bagisto: catálogo..." → "tienda virtual: catálogo...".
- `<title>`, `og:title`/`og:description` y `alt` de fotos en lenguaje simple.
- Se conservan: "Presencia Digital Inteligente", "Automatización con IA", todo el JSON-LD schema.org y `llms.txt` (máquinas).
- Supuestos registrados (decididos con el usuario): renombrar el plan; tecnicismos solo en máquinas.

## Capabilities

### New Capabilities

- `lenguaje-cliente`: copy visible en lenguaje simple de beneficios, tecnicismos reservados a máquinas.

### Modified Capabilities

- Ninguna.

## Impact

- Afectado: textos visibles de index + 3 subpáginas. Schema JSON-LD, `llms.txt`, URLs, precios, FAQ y layout intactos.
- Riesgo SEO: el `<title>` pierde "Bagisto"; compensar manteniéndolo en schema y `llms.txt` (tráfico de esa keyword es técnico, no cliente final).
