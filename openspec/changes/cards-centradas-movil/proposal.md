## Why

En iPad mini retrato (768px) y ventanas ~500px, los grids de una columna ocupan todo el ancho: cards de ~700px con líneas estiradas que se sienten vacías (capturas 17-38-00 Diferenciador, 17-38-14 Opiniones, 17-38-20 Contacto, más Servicios a ~500px). En teléfono real (360px) no pasa; el problema es el rango 500–768px sin tope de ancho.

## What Changes

- En el media ≤768px, los grids de una columna (`opiniones-grid`, `geo-grid`, `services-grid`, `contact-grid`) se centran con `max-width: ~600px + margin auto`: respiran en tablet retrato y quedan intactos en teléfono (100% < 600px, no aplica).
- Desktop y tablet apaisada intactos (la regla vive solo en el media 768).
- Bump `?v` de assets en las 8 páginas + `tools/build_pages.py` (Ño regenerar páginas), regenerar `styles.min.css`, registrar en `CHANGELOG.md`.

## Capabilities

### New Capabilities
- `cards-centradas`: cards de una columna centradas con ancho máximo en móvil y tablet retrato.

### Modified Capabilities
(none)

## Impact

- `assets/css/styles.css` (1 regla en media 768) + `styles.min.css`, `?v` en 8 páginas y `tools/build_pages.py`, `CHANGELOG.md`.
- Sin HTML, sin JS, sin SEO. Verificación a 768px (capturas evidenciales), 500px y 360px sin cambios.
