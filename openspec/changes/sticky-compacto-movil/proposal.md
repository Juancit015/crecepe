## Why

La mini-barra `fixed` en móvil tapa contenido, se apila con los flotantes (↑ y WhatsApp) y su CTA a todo ancho se ve postizo (evidencia 2026-09-24: capturas 19:42:10 y 19:42:51 en `presencia-digital.html`). Un sticky compacto dentro del flujo aparece de forma natural, nunca cubre el footer/relacionados y libera la zona inferior.

## What Changes

- En viewports ≤992px el aside deja de ser barra `fixed` y pasa a card compacta en flujo (precio + nombre + CTA de ancho natural, sin mini-lista ni nota), subida tras la intro con `order` y con `position: sticky` bajo el header: acompaña la lectura y se suelta sola al terminar el layout (antes de "También te puede interesar", que está fuera del grid).
- Se retira el mecanismo `buybar-*` (`scrolled-past`, `buybar-down`, `buybar-hidden`) en las fichas: el show/hide por JS ya no hace falta porque el sticky entra y sale solo.
- Sin cambios en desktop (sticky actual intacto), en el copy ni en JSON-LD/SEO/GA.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ficha-compra`: la compra móvil pasa de mini-barra fija a card compacta sticky en flujo (el requirement de 92px/`buybar` se reemplaza).

## Impact

- `assets/css/styles.css` (+ `styles.min.css`): bloque `@media (max-width: 992px)` del aside reescrito; `assets/js/main.js`: retirar o desactivar lógica `buybar` en fichas.
- Sin cambios de markup; sin impacto en desktop, SEO, schemas ni GA.
