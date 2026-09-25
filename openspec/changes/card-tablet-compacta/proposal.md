## Why

En tablet la card incrustada ocupa todo el ancho del contenedor y se ve gigante (evidencia 2026-09-24 20:07:13 en `tienda-online-bagisto.html`). La referencia (card de planes de AZ, captura 20:08:02) es angosta, contenida y compacta. Acotar el ancho + centrar devuelve la proporción correcta en tablet sin tocar móvil chico ni desktop.

## What Changes

- En viewports ≤992px el aside lleva `max-width` (~440px) + centrado con `margin-inline: auto`, y type ligeramente más compacto (precio y paddings) para que no domine la pantalla.
- Solo CSS en el media 992px (con ajuste fino si hace falta en 768px); sin markup, copy, desktop ni JSON-LD/SEO/GA.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ficha-compra`: la card móvil incrustada queda contenida (ancho máximo + centrada) en tablet.

## Impact

- `assets/css/styles.css` (+ `styles.min.css`): reglas del aside en `@media (max-width: 992px)`.
- Sin impacto fuera de tablet/móvil de fichas.
