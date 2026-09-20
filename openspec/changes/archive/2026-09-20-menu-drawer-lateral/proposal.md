## Why

La lámina bajo la navbar ño convence; la referencia nueva (drawer lateral como webperu) se siente más amigable: panel lateral con links iconizados a la izquierda. Se adopta ese patrón con la identidad CrecePE.

## What Changes

- El menú móvil pasa de lámina bajo la navbar a drawer lateral derecho (~80% ancho, altura completa) con fondo de marca.
- Links alineados a la izquierda, cada uno con su icono, separados por divisores; X para cerrar arriba del drawer.
- Se conservan: CTA "Diagnóstico gratis", fila del tema, velo con blur, bloqueo de scroll y cierres actuales.

## Capabilities

### New Capabilities
<!-- Ninguna: se ajusta el comportamiento de un spec existente. -->

### Modified Capabilities
- `nav-adaptativa`: el menú móvil es un drawer lateral derecho con links iconizados, manteniendo tema, velo y bloqueo de scroll.

## Impact

- `index.html` (+7 páginas con navbar: iconos por link y botón X dentro del panel).
- `assets/css/styles.css` (drawer lateral, divisores, iconos) y ajustes menores en `assets/js/main.js` si el X interno lo requiere.
- Sin cambios de links, destinos, desktop ni temas (el drawer usa fondo de marca en ambos).
