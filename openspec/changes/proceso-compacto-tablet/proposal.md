## Why

A 768px (iPad portrait) la sección Proceso se ve desuniforme frente al resto: el timeline respira con 52px entre pasos (herencia de `proceso-aire-movil`, pensada para teléfonos) y el botón "Ver detalle" estira su flecha al extremo derecho (`space-between` a ancho completo), mientras Servicios, Planes, Casos y Opiniones ya van compactos en esa resolución.

## What Changes

- Variante compacta de Proceso en 481–768px: pasos 1–6 con aire reducido (gaps, paddings y puntos ajustados), al nivel de compactación de las demás secciones.
- Botón "Ver detalle" compacto en 481–768px: flecha pegada a la etiqueta (sin `space-between` a ancho completo), manteniendo área táctil de 44px.
- Teléfonos (≤480px) intactos con su aire actual; desktop (>768px) intacto.

## Capabilities

### New Capabilities

(none — se reutilizan capacidades existentes)

### Modified Capabilities

- `proceso-aire-movil`: el aire amplio (52px/puntos 32px) queda reservado a teléfonos ≤480px; en 481–768px rige variante compacta uniforme con el resto de secciones.
- `proceso-detalle`: el control "Ver detalle" en 481–768px muestra la flecha junto a la etiqueta en vez de separada al extremo.

## Impact

- `assets/css/styles.css` + `styles.min.css` (reglas `#proceso` en media 481–768px, al final del archivo para ganar la cascada).
- Sin cambios en HTML, JS, JSON-LD, precios ni generador.
