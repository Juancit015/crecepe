## Why

En desktop el contenido de las fichas vive en una columna angosta (~750px) porque el sidebar ocupa 340px, mientras el home respira a ancho completo. El texto apretado se lee peor y se ve distinto al sitio principal. Pasar a ancho completo unifica la experiencia.

## What Changes

- En desktop (≥993px) `.svc-layout` pasa a una columna a ancho completo como las secciones del home; el sidebar lateral desaparece.
- La card de precio se incrusta en flujo en el mismo punto que en móvil (entre QA y FAQ), con card completa centrada y contenida (`max-width`).
- Quedan jubilados en desktop: el sticky viajero del aside y su columna lateral. Se actualizan los specs afectados al archivar.
- Sin cambios de copy, JSON-LD/SEO/GA ni móvil.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `servicios-ficha`: la ficha desktop es a ancho completo sin sidebar; la compra vive incrustada entre QA y FAQ.

## Impact

- `assets/css/styles.css` (+ `styles.min.css`): `.svc-layout` desktop a 1 columna; aside desktop como bloque centrado en flujo.
- Specs en conflicto a conciliar al archivar: `servicios-ficha` (sticky desktop) y `ficha-compra` (espejo desktop) — el delta los reemplaza.
- Sin impacto en copy, schemas, SEO ni GA.
