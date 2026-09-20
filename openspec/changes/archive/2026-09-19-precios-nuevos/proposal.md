## Why

Cambio de precios pedido por el dueño: Presencia Digital 990→500, Tienda Virtual 700 (antes 2,990), Automatización 1,490→900. Los precios viven en ~40 puntos (cards, FAQs visibles, titles/metas/OG, asides, JSON-LD, prefills de WhatsApp, `llms.txt`): si se cambia a medias, el sitio se contradice.

## What Changes

Sustitución global en `index.html`, 3 páginas de servicios y `llms.txt`:
- `S/ 990`→`S/ 500`, `S/ 2,990`→`S/ 700`, `S/ 1,490`→`S/ 900` (y formas `990`, `2990`, `1490` en JSON-LD y URLs con `%2F`).
- Incluye `priceRange`, `price` de schema, titles/metas/OG, asides, relacionados cruzados y mensajes prellenados de WhatsApp.
- Mantenimiento S/ 149 intacto (no pedido). README se actualiza en el commit (docs, fuera del change).

## Capabilities

### New Capabilities

- `precios-nuevos`: precios 500/700/900 consistentes en todo el sitio y máquinas.

### Modified Capabilities

- Ninguna.

## Impact

- Afectado: textos y datos en 5 HTML + `llms.txt`. Sin cambios de layout, estilos ni lógica.
