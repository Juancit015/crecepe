## Context

Ver `proposal.md`. Mapa: index (12: amounts, FAQ visibles, `priceRange`, FAQ `"text"` del JSON-LD), subpáginas (6–7 c/u: title/meta/OG, aside, relacionados, `"price"`), prefills `wa.me` con precio URL-encoded, `llms.txt` (8), README (3, va en commit).

## Goals / Non-Goals

**Goals:**
- Cero precios viejos en visibles, metadatos, schema, prefills y `llms.txt`.

**Non-Goals:**
- No se tocan layout, estilos, URLs de planes ni el precio de mantenimiento.

## Decisions

- **Decisión 1: sustitución mecánica con verificación por conteo.**
  Ternas (`S/ 990`→`S/ 500`, `S/ 2,990`→`S/ 700`, `S/ 1,490`→`S/ 900`, más `990/2990/1490` y `%2F%20990` etc. en prefills) y cierre con `rg` que devuelva 0 fuera de README/historial. Orden: primero `2,990`/`1,490` (con coma) para no colisionar con subcadenas.
- **Decisión 2: prefills de WhatsApp incluidos.**
  El mensaje prellenado cita el precio; si no se actualiza, el cliente escribe el viejo. Se actualizan como parte del change.

## Risks / Trade-offs

- [Riesgo] `2990` como subcadena de otros números: verificar cada reemplazo con contexto, no a ciegas.

## Migration Plan

- Sustituir, barrido `rg` a cero, validar schema (JSON válido) y `openspec validate precios-nuevos`.

## Open Questions

- Ninguna.
