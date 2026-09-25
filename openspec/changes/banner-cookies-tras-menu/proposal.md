## Why

En móvil, el banner de cookies (`.consent-banner`, `z-index: 1001`, inyectado al final del `body`) empata en z-index con la hamburguesa y, por orden de pintado, queda por encima del drawer abierto (1000) y de la X de cierre: el banner tapa el menú. Hay que bajarlo en el apilado para que el menú siempre gane.

## What Changes

- `.consent-banner` pasa de `z-index: 1001` a `z-index: 999`: queda debajo del drawer (1000) y de la hamburguesa/X (1001), y sigue por encima del dial, el to-top y el velo (999 pero anteriores en el DOM, el banner se inyecta al final del `body`).
- Sin cambios visuales en desktop ni en el comportamiento del consentimiento (GA solo tras aceptar, Ley 29733).
- Bump `?v` de assets en las 8 páginas + `tools/build_pages.py`, regenerar `styles.min.css`, registrar en `CHANGELOG.md`.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `drawer-velo`: el drawer abierto y su X quedan por encima del banner de cookies; el banner nunca tapa el menú móvil.

## Impact

- `assets/css/styles.css` (1 línea) + `styles.min.css`, `?v` en 8 páginas y `tools/build_pages.py`, `CHANGELOG.md`.
- Sin JS, sin HTML, sin SEO.
