## Why

En móvil (≤768px) las cards de Servicios son filas compactas con foto a la izquierda y contenido a la derecha, un layout denso que no luce las fotos. Juan quiere foto arriba y contenido debajo: card vertical apilada, más aire y foto protagonista.

## What Changes

- En ≤768px: `.service-card` vuelve a apilado vertical (foto arriba a ancho completo con altura contenida, contenido debajo), manteniendo el resto del sistema (overlay oculto, lista recortada a 3 items, textos compactos).
- Desktop y tablet (>768px) intactos.
- Bump `?v` de assets en las 8 páginas + `tools/build_pages.py` (Ño regenerar páginas), regenerar `styles.min.css`, registrar en `CHANGELOG.md`.

## Capabilities

### New Capabilities
- `servicios-foto-arriba`: cards de Servicios apiladas (foto arriba) en móvil.

### Modified Capabilities
(none)

## Impact

- `assets/css/styles.css` (bloque compacto ≤768px) + `styles.min.css`, `?v` en 8 páginas y `tools/build_pages.py`, `CHANGELOG.md`.
- Sin HTML (reordenamiento solo CSS con grid), sin JS, sin SEO (mismo DOM, mismas imágenes y alts).
