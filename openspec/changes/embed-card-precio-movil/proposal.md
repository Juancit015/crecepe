## Why

La card compacta con sticky viaja bien pero sigue siendo un elemento flotante sobre la lectura. Incrustada fija tras la sección de rigor ("Nos tomamos en serio tu sitio") y antes del FAQ —como las cards de Planes viven dentro de su sección—, el precio aparece en el momento caliente (lector ya calificado por "¿Es para ti?") y el FAQ cierra objeciones. Cero elementos flotantes en móvil.

## What Changes

- En viewports ≤992px el aside deja el sticky viajero y se incrusta como bloque fijo en flujo entre QA y FAQ, con card completa (badge, h3, precio, mini-lista, CTA, nota), igual que una card de Planes.
- Se logra con CSS puro (`display: contents` + `order`), sin mover markup en las 3 fichas y sin JS.
- Sin cambios en desktop (sidebar + sticky intactos), en el copy ni en JSON-LD/SEO/GA.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ficha-compra`: la compra móvil pasa de card compacta sticky viajera a card completa incrustada fija entre QA y FAQ.

## Impact

- `assets/css/styles.css` (+ `styles.min.css`): bloque `@media (max-width: 992px)` del aside y `.svc-main`.
- Sin markup, sin JS, sin impacto en desktop, SEO, schemas ni GA.
