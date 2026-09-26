## Why

A 960px (tablet) la navbar muestra los 7 enlaces + CTA + toggle en horizontal con `gap: clamp(8px, 1vw, 14px)` (~9px efectivos): los items se ven pegados. La regla actual priorizó que todo quepa, pero quedó sin aire. En desktop (28px) y móvil (drawer) está bien y Ño se tocan.

## What Changes

- **Más aire en 769–1100**: gap sube a `clamp(14px, 2vw, 22px)` (~19px a 960px).
- **Compensación para que todo siga cabiendo**: enlaces a 0.88rem, CTA con padding lateral 10px y logo a 34px, solo dentro de la banda (fuera de ella todo intacto).
- Verificación por captura a 960px: items con aire, sin overflow ni salto de línea; desktop y móvil iguales que antes.

## Capabilities

### New Capabilities

(Ninguna.)

### Modified Capabilities

- `nav-adaptativa`: en la banda 769–1100 la navbar MUST mostrar los enlaces con espaciado amplio sin overflow.

## Impact

- Solo `assets/css/styles.css` (+ minificado y `?v=`). Sin cambios de DOM, enlaces, drawer, textos ni JS.
