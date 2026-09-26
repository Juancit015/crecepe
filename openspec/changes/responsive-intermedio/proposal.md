## Why

Las capturas a ~670px (ventana desktop redimensionada) muestran cards de una columna estiradas al tope de 600px casi de borde a borde, fotos altas y líneas de texto larguísimas en Opiniones y Casos. El fix de iPad cubrió Servicios en 481–1024px, pero Casos, Opiniones, Planes, Contacto y FAQ Ño tienen tratamiento intermedio: el rango 769–992px (Casos en 2 col estiradas, Contacto y FAQ a 1 col sin tope) y el subrango 600–768px (1 col al límite del tope) quedaron como puntos vacíos.

## What Changes

- **Rango 769–992px**: Casos y Planes pasan a 1 columna con tope centrado (adiós 2 cards estiradas y huérfana a media card en Planes); Contacto y FAQ reciben el tope 600px centrado que hoy solo existe en ≤768px; GEO y Opiniones conservan sus 2 col (ya funcionan).
- **Subrango 600–768px**: cards apiladas compactas en Servicios (foto más baja), Casos, Opiniones y Contacto: menos padding y foto contenida para que el tope de 600px Ño se sienta de borde a borde; líneas de testimonio más cortas.
- **Teléfono (≤600px) y desktop (>992px) intactos**: Ño se tocan los layouts de los extremos.
- Criterios medibles por rango (ver design): ancho máximo efectivo, altura de foto y aire lateral verificables en Chromium por captura.

## Capabilities

### New Capabilities

(Ninguna.)

### Modified Capabilities

- `cards-centradas`: el tope centrado se extiende al rango 769–992px para grids de 1 columna (Casos, Contacto, FAQ) y Casos colapsa a 1 columna en ese rango.
- `ux-movil-compacto`: la compactación de cards apiladas se extiende de Servicios a Casos, Opiniones y Contacto en el subrango 600–768px, con foto contenida y padding reducido.

## Impact

- `assets/css/styles.css` (+ `styles.min.css` regenerado y `?v=` bump en 8 páginas + generador).
- Sin cambios de DOM, copy, schemas ni JS (solo CSS + verificaciones visuales por captura).
- Riesgo principal: mover breakpoints afecta a fichas/casos existentes; cada rango se verifica con captura antes de commitear.
