## Context

Ver `proposal.md` (Why). Estado: rige `hibrido-airbnb-movil` (card quieta + `.buybar` con observers). Piezas a retirar: markup `.buybar` ×3 fichas, bloque CSS `.buybar` + `body.buybar-on` + `reduce`, observer `buybarPostCard` en `main.js`, y la transición agregada a `.contact-dial` (vuelve a sin transición propia).

## Goals / Non-Goals

**Goals:**
- Cero rastros de la barra en CSS, JS, markup y specs.
- Card fija intacta; desktop intacto.

**Non-Goals:**
- Rediseñar nada; solo restar.

## Decisions

- **Borrado directo, sin reemplazo**: quitar markup, CSS y JS completos (no comentar ni dejar clases huérfanas). Verificar con `grep` que no queden referencias a `buybar` en ningún archivo.
- **Dial vuelve a su estado**: quitar la transición agregada y la regla de ocultamiento (ya no hay nada que la dispare).
- **Sin `?v` extra por el JS**: el bump rutinario del cierre cubre ambos assets.

## Risks / Trade-offs

- [Riesgo] Se pierde CTA persistente en lectura larga móvil → Mitigación: decisión consciente del usuario; la card está en punto caliente y el nav lleva CTA persistente.
- [Riesgo] Referencia huérfana olvidada → Mitigación: `grep buybar` final debe dar vacío (salvo CHANGELOG/archivos).
- Caché de GitHub Pages (10 min): Ctrl+F5 tras el push.
