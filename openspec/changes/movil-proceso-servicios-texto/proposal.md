## Why

En móvil, el botón "Ver detalle" de la sección Proceso se ve azul oscuro sobre fondo marino (ilegible) y las 3 cards de Servicios muestran solo foto + título + 2 líneas, lo que el dueño percibe como "poco texto" frente al resto del sitio.

## What Changes

- El botón "Ver detalle" del Proceso en móvil pasa a color cyan (acento móvil del timeline), manteniendo su color actual en desktop.
- Las cards de Servicios en móvil muestran los 3 primeros bullets de su lista, fijos y sin acordeón.
- Sin cambios en desktop, FAQs, animaciones reveal ni resto de compactos móviles.

## Capabilities

### New Capabilities

- (ninguna)

### Modified Capabilities

- `proceso-resaltado`: el acento cyan móvil se extiende al botón "Ver detalle" (antes solo punto + título).
- `ux-movil-compacto`: las cards de Servicios en móvil dejan de ocultar la lista y muestran sus 3 primeros bullets.

## Impact

- `assets/css/styles.css` (media query móvil: color del toggle + visibilidad de bullets).
- `index.html` (sin cambios de markup salvo clases si el diseño lo requiere).
- Sin impacto en SEO, schema, JS ni otras secciones.
