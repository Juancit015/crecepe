## Why

Al abrir la hamburguesa el fondo queda nítido y distrae; además el cierre al tocar fuera y el bloqueo del scroll de fondo deben quedar garantizados con el nuevo panel lámina.

## What Changes

- Velo de fondo con blur + oscurecido sutil al abrir el menú móvil; tocarlo cierra el menú.
- Bloqueo del scroll de la página mientras el menú está abierto (se restaura al cerrar).
- Solo móvil; desktop intacto.

## Capabilities

### New Capabilities
<!-- Ninguna: se ajusta el comportamiento de un spec existente. -->

### Modified Capabilities
- `nav-adaptativa`: el menú móvil abierto muestra velo con blur, cierra al tocar fuera y bloquea el scroll de fondo.

## Impact

- `index.html` (elemento del velo), `assets/css/styles.css` (estilos del velo) y `assets/js/main.js` (mostrar/ocultar + bloqueo de scroll).
- Sin cambios de links, panel, colores ni desktop.
