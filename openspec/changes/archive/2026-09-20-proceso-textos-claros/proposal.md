## Why

Con la foto oscura nueva en Proceso, su encabezado en modo claro quedó ilegible (título marino y subtítulo gris sobre foto). En oscuro se ve bien; solo hay que vestir el header claro para foto.

## What Changes

- En modo claro: insignia, título y subtítulo de Proceso en cian + blanco con sombra sutil, a juego con secciones sobre foto (GEO/Opiniones).
- En modo oscuro: sin cambios (ya se lee bien).
- Solo CSS, solo el header de `#proceso`.

## Capabilities

### New Capabilities
<!-- Ninguna: se extiende cobertura de un spec existente. -->

### Modified Capabilities
- `textos-sobre-foto`: el encabezado de Proceso en modo claro también va claro sobre su foto.

## Impact

- `assets/css/styles.css` (reglas acotadas a `#proceso` en modo claro).
- Sin cambios de HTML, foto, cards ni modo oscuro.
