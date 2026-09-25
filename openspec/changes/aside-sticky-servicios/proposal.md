## Why

El aside de compra (precio + CTA WhatsApp) desaparece al hacer scroll en fichas largas, perdiendo la conversión justo cuando el visitante lee prueba, proceso y QA. Un sticky que acompañe hasta "También te puede interesar" mantiene la compra visible sin tapar contenido.

## What Changes

- El aside `.svc-aside` de las 3 fichas (`servicios/presencia-digital.html`, `tienda-online-bagisto.html`, `automatizacion-ia.html`) se vuelve sticky en desktop: sigue el scroll dentro de su columna y se detiene antes de "También te puede interesar".
- Solo desktop (`min-width: 961px`); en móvil la mini-barra inteligente ya cumple esa función y no cambia.
- Sin cambios visuales al aside (mantiene navy espejo de Planes, h3, mini-lista, hover lift del change `ficha-compra-planes`).
- Respeta `prefers-reduced-motion` (sin animación asociada, solo posición).

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `servicios-ficha`: el aside de compra acompaña el scroll en desktop hasta antes de "También te puede interesar".

## Impact

- `assets/css/styles.css` (+ `styles.min.css` regenerado): reglas sticky del aside.
- Las 3 páginas de servicios: solo bump `?v`; sin cambios de markup salvo que la técnica elegida lo exija (ver `design.md`).
- Sin impacto en JSON-LD, SEO, GA ni móvil.
