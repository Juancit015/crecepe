## Why

En modo oscuro, al hover sobre una tarjeta de Opiniones la pastilla de comillas se vuelve blanca pero las comillas se quedan blancas y desaparecen contra el fondo. Causa: la regla de hover usa `var(--primary)`, que en oscuro es blanco. En claro funciona (fondo marino + comillas blancas) y no se toca.

## What Changes

Solo `assets/css/styles.css`, solo hover en modo oscuro:
- Nueva regla `body.dark-mode .opinion-card:hover .opinion-quote` con fondo blanco y comillas azul marino fijo (`#0A1F44`, no la variable que en oscuro es blanca).
- Reposo en ambos temas y todo el modo claro quedan intactos.

## Capabilities

### New Capabilities

- `opiniones-hover`: comillas visibles al hover de tarjetas de Opiniones en modo oscuro.

### Modified Capabilities

- Ninguna (ninguna capacidad existente regula el hover de Opiniones).

## Impact

- Afectado: una regla nueva en `assets/css/styles.css`. La transición existente ya anima fondo y color.
- Sin impacto en HTML, resto de la sección, otros temas ni generador de páginas.
