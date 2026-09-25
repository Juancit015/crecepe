## Why

Con el drawer abierto, el banner de cookies queda brillante e interactivo por encima del velo (mismo `z-index: 999` pero posterior en el DOM): es el único elemento "detrás" que no se atenúa ni se vuelve inerte. Debe comportarse como el resto de la página.

## What Changes

- Con el drawer abierto (`body:has(.nav-links.open)`), el banner se atenúa (`filter: brightness(0.4)`, aproximando el velo `rgba(6,13,31,.6)`) y deja de ser interactivo (`pointer-events: none`), con la misma transición de 0.3s.
- Al cerrar, vuelve solo a su estado normal. Sin JS, sin cambios de apilado.
- Bump `?v` de assets en las 8 páginas + `tools/build_pages.py`, regenerar `styles.min.css`, registrar en `CHANGELOG.md`.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `drawer-velo`: con el drawer abierto el banner también se atenúa y es inerte, como el resto del fondo.

## Impact

- `assets/css/styles.css` (1 regla) + `styles.min.css`, `?v` en 8 páginas y `tools/build_pages.py`, `CHANGELOG.md`.
- Sin JS, sin HTML, sin SEO. `:has` ya se usa en el proyecto (logo atenuado).
