## Why

En móvil hay tres fricciones: las cards de Servicios dejan un hueco vacío bajo la foto (la columna de texto creció con los 3 bullets y la foto quedó de 118px arriba), el drawer se siente angosto, y al tocar una sección en la hamburguesa el título queda medio tapado por la navbar fija, a diferencia de PC.

## What Changes

- La foto de las cards de Servicios en móvil se estira a la altura completa de la card (sin hueco vacío debajo).
- El drawer pasa de 60% a 69% de ancho (tope 340px a 390px).
- Al navegar desde la hamburguesa, la sección destino deja su título totalmente visible bajo la navbar en móvil.
- Sin cambios en desktop ni en el resto del comportamiento móvil.

## Capabilities

### New Capabilities

- (ninguna)

### Modified Capabilities

- `ux-movil-compacto`: la foto de la fila de Servicios ocupa toda la altura de la card en móvil.
- `drawer-velo`: ancho del panel 60% → 69% (tope 340px → 390px), más requisito nuevo de aterrizaje de anclas con título visible.

## Impact

- `assets/css/styles.css` (media queries móviles: foto, ancho del drawer, `scroll-margin-top`).
- Sin cambios de markup, JS, SEO ni schema.
