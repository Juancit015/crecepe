## Why

La card incrustada en móvil funciona pero no se ve como las cards de Planes del home (evidencia 2026-09-24 19:58:27 en `presencia-digital.html`): precio sin banda con bordes, mini-lista sin el ritmo de `pricing-features`, CTA estirado a todo ancho y padding distinto. Si pediste "como en Planes", debe ser indistinguible en proporciones.

## What Changes

- En viewports ≤992px la card del aside espeja las métricas de `.pricing-card--featured`: padding 38/30, banda de precio con bordes superior/inferior, mini-lista con el espaciado de `pricing-features` y CTA con el mismo ancho/comportamiento que en Planes.
- Solo CSS en el media 992px; sin markup, sin copy, sin cambios en desktop ni en JSON-LD/SEO/GA.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ficha-compra`: la card móvil incrustada iguala las proporciones de la card destacada de Planes.

## Impact

- `assets/css/styles.css` (+ `styles.min.css`): reglas del aside en `@media (max-width: 992px)`.
- Sin impacto fuera del móvil de fichas.
