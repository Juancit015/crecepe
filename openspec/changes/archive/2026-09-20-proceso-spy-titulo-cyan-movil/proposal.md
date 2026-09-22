## Why

En móvil el scroll-spy solo enciende el punto del paso centrado y el título queda blanco; el usuario quiere que el título también se tiña cyan al pasar, para que el paso activo se lea como un todo. Es el complemento natural de la regla por dispositivo ya implementada.

## What Changes

- En móvil (sin hover): el paso que cruza la franja central muestra punto con anillo **y** título cyan; al salir de la franja ambos se apagan.
- En desktop: sin cambios (solo hover resalta punto + título, spy apagado).
- `prefers-reduced-motion`: sin cambios (todo apagado).
- Depende de archivar y sincronizar primero `proceso-resaltado-por-dispositivo`, que crea el spec principal `proceso-resaltado` que aquí se modifica.

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `proceso-resaltado`: el requisito "Móvil resalta solo por scroll" suma el título cyan al paso centrado.

## Impact

- Afecta solo `assets/css/styles.css` (regla `.process-step.active .process-step-body h4`); el JS del spy ya añade y suelta `.active`, sin cambios.
- Sin cambios de copy, layout, desktop ni movimiento reducido.
