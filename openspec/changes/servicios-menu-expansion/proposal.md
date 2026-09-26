## Why

En móvil/tablet la sección Servicios es un catálogo de cards con bordes, fondos y mini-elementos que genera ruido visual y bloques repetidos (opción 5 de ChatGPT, aprobada por Juan). Se cambia la estructura a menú + expansión: menos ruido, menos scroll inicial, misma información.

## What Changes

- En ≤992px (móvil + tablet): las cards de Servicios se reemplazan por lista menú (`01 Presencia Digital +`, etc.); al expandir muestra descripción, checks, link a la ficha y (opcional) foto. Desktop intacto (cards con foto + overlay).
- SEO blindado: nombres como h3 reales, texto completo en DOM desde la carga (toggle por clase, patrón del acordeón de Planes), links `<a>` a las 3 fichas, sin fetch al expandir.
- Reutiliza el patrón JS/CSS del acordeón (`pricing-toggle`/`is-open` o equivalente propio).
- Bump `?v` de assets en las 8 páginas + `tools/build_pages.py` (Ño regenerar páginas), regenerar `styles.min.css`, registrar en `CHANGELOG.md`.

## Capabilities

### New Capabilities
- `servicios-menu`: sección Servicios como menú expandible en móvil y tablet.

### Modified Capabilities
(none)

## Impact

- `index.html` (bloque Servicios móvil/tablet) + `assets/css/styles.css` + `styles.min.css`, `assets/js/main.js` (toggle), `?v`, `CHANGELOG.md`.
- Desktop sin cambios. SEO: ver guardias en specs.
