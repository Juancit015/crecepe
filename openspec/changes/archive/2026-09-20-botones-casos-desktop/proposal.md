## Why

En desktop a pantalla completa, pasar el cursor sobre "Ver caso Novedades Chávez" hace que "Ver tienda en vivo" salte a la línea de abajo (efecto columna). El hover no debe mover a los vecinos.

## What Changes

- Eliminar el crecimiento de `gap` en el hover de `.case-link` (8px → 13px), que ensancha el botón y provoca el salto de línea del segundo botón.
- Mantener el efecto hover con `transform` (elevación) sin cambiar el ancho del botón.
- Asegurar fila horizontal estable en `.case-actions` en desktop; el wrap solo queda para pantallas angostas.

## Capabilities

### New Capabilities
- `botones-casos`: los botones de "Casos reales" mantienen su fila en desktop sin saltos al hover.

### Modified Capabilities
<!-- Ninguna: no se altera ningún requisito de specs existentes. -->

## Impact

- `assets/css/styles.css` (reglas `.case-link:hover`, posible ajuste de `.case-actions`).
- Sin cambios de HTML ni de enlaces; mismo comportamiento en ambos temas.
