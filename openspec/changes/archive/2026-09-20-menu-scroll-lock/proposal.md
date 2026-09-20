## Why

Con el menú móvil abierto el fondo igual hace scroll (el bloqueo solo toca `body` y en escritorio se ve raro al redimensionar). Además la hamburguesa vuelve al lado derecho, como estaba antes del estilo AZ.

## What Changes

- Bloqueo de scroll en `html` + `body` al abrir el menú, con restauración garantizada al cerrar (link, velo, Escape, resize).
- Al cruzar el breakpoint a desktop con el menú abierto, cierre total: panel, velo, bloqueo y estado de la hamburguesa.
- Hamburguesa a la derecha del logo en móvil (revierte la izquierda AZ); desktop intacto.

## Capabilities

### New Capabilities
<!-- Ninguna: se ajusta el comportamiento de un spec existente. -->

### Modified Capabilities
- `nav-adaptativa`: scroll de fondo imposible con el menú abierto en cualquier viewport, y hamburguesa a la derecha en móvil.

## Impact

- `assets/js/main.js` (bloqueo `html`+`body`, endurecer cierre en resize).
- `assets/css/styles.css` (orden móvil: logo izquierda, hamburguesa derecha).
- Sin cambios de HTML, links, panel ni desktop.
