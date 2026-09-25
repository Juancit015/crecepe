## Why

Ningún sitio serio hace viajar una card completa en móvil (Airbnb, Amazon, GoodUI, CXL): usan card full quieta + barrita condensada que aparece solo tras pasar la card real. Nuestra seguidora compacta repite el error de concepto (elemento viajero). El híbrido Airbnb da CTA persistente sin tapar lectura.

## What Changes

- En viewports ≤992px el aside vuelve a card completa estática en flujo en su slot actual (tras Prueba), sin sticky viajero.
- Nueva mini-barra condensada (precio + CTA, ≤64px, thumb zone) que aparece SOLO cuando la card real sale del viewport y se retira en relacionados/footer, sin apilarse con ↑/WhatsApp (los flotantes se desplazan por clase en `body`).
- Sin cambios en desktop, copy, JSON-LD/SEO/GA.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ficha-compra`: la compra móvil es card full quieta + mini-barra condensada post-card (reemplaza la seguidora compacta).

## Impact

- 3 fichas: markup mínimo de la barra (precio + CTA por plan) + `assets/css/styles.css` + `assets/js/main.js` (observer sobre la card).
- Sin impacto en desktop, SEO, schemas ni GA.
