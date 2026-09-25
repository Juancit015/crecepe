## Why

El fix anterior (`aside-sticky-responsive`) metió scroll interno a la card en laptop 13": nada se corta, pero parte del contenido queda oculto tras scroll. Juan quiere la card siempre entera y visible, como las demás: si la altura no alcanza para el sticky, la card pasa a flujo normal (estática) en vez de recortarse con scroll.

## What Changes

- Se retira `max-height`/`overflow-y`/`overscroll` de `.svc-aside` (adiós scroll interno para siempre).
- Nueva media query por altura: con viewport bajo (`max-height: 800px`), el aside deja de ser sticky y se muestra estático y completo en su columna (mismo patrón que móvil, sin tocar anchos).
- Se conserva `top: 88px` para el sticky en viewports altos.
- Bump `?v` de assets en las 8 páginas + `tools/build_pages.py` (Ño regenerar páginas), regenerar `styles.min.css`, registrar en `CHANGELOG.md`.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `servicios-ficha`: reemplaza "scroll interno" por "estática completa si la altura no alcanza" (supersede del requirement anterior).

## Impact

- `assets/css/styles.css` + `styles.min.css`, `?v` en 8 páginas y `tools/build_pages.py`, `CHANGELOG.md`.
- Sin HTML, sin JS, sin SEO. Verificación a 1366×753 (card entera, sin scroll interno) y viewport alto (sticky intacto).
