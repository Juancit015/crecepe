## Why

Mismo síntoma que `cards-centradas-movil` en 3 secciones más: a 768px (una columna) las cards de Planes (`pricing-grid`), Casos (`cases-grid`) y las filas de FAQ (`faq-list`, hoy a 800px) se estiran de borde a borde. Se extiende el patrón probado: tope + centrado solo en ≤768px.

## What Changes

- La regla del media 768 suma `pricing-grid`, `cases-grid` y `faq-list` al tope 600px centrado.
- Teléfono (<600px) y desktop intactos por construcción.
- Bump `?v` de assets en las 8 páginas + `tools/build_pages.py` (Ño regenerar páginas), regenerar `styles.min.css`, registrar en `CHANGELOG.md`.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `cards-centradas`: cubre también Planes, Casos y FAQ.

## Impact

- `assets/css/styles.css` (1 selector) + `styles.min.css`, `?v` en 8 páginas y `tools/build_pages.py`, `CHANGELOG.md`.
- Sin HTML, sin JS, sin SEO. Verificación a 768px en las 3 secciones.
