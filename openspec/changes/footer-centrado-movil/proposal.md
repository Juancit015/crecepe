## Why

En móvil y tablet el footer muestra sus bloques en 2 columnas (≤992px) o apilados a la izquierda (≤768px): parte del contenido queda "a la derecha" o desalineado. Juan quiere todo el contenido listado y centrado en ambos rangos.

## What Changes

- En ≤992px (tablet + móvil): `.footer-grid` pasa a 1 columna con todo centrado (logo, textos, links, badges de pago): `grid-template-columns: 1fr; justify-items: center; text-align: center`.
- Bloques heterogéneos alineados: `.footer-pay` centrado, logo centrado, `footer-bottom` ya centrado (verificar).
- Desktop intacto (3 columnas a la izquierda).
- Bump `?v` de assets en las 8 páginas + `tools/build_pages.py` (Ño regenerar páginas: el footer de subpáginas viene del index vía generador, pero se edita el CSS global, no el HTML), regenerar `styles.min.css`, registrar en `CHANGELOG.md`.

## Capabilities

### New Capabilities
- `footer-centrado`: footer listado y centrado en móvil y tablet.

### Modified Capabilities
(none)

## Impact

- `assets/css/styles.css` (media 992) + `styles.min.css`, `?v` en 8 páginas y `tools/build_pages.py`, `CHANGELOG.md`.
- Sin HTML (el footer se comparte vía generador), sin JS, sin SEO. Verificación a 768/500/360px + desktop sin cambios, claro/oscuro (footer siempre oscuro).
