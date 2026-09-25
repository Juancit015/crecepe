## Why

El umbral de 800px apaga el sticky en laptops donde sí cabe: medido con Chromium headless, las 3 cards miden 493px exactos y el sticky necesita 493+88+16 ≈ 597px. A 640px de viewport (captura de Juan) el sticky cabe sobrado con 59px de aire. Umbral corregido a 600px, medido y no estimado.

## What Changes

- La media por altura pasa de 800px a 600px (card medida 493px + `top: 88px` + 16px aire).
- Sin otros cambios: `top: 88px`, sin scroll interno, móvil intacto.
- Bump `?v` de assets en las 8 páginas + `tools/build_pages.py` (Ño regenerar páginas), regenerar `styles.min.css`, registrar en `CHANGELOG.md`.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `servicios-ficha`: umbral real medido (600px) en vez de estimado (800px).

## Impact

- `assets/css/styles.css` (1 valor) + `styles.min.css`, `?v` en 8 páginas y `tools/build_pages.py`, `CHANGELOG.md`.
- Verificación con Chromium headless a 1366×753 (sticky activo + card completa) y 1366×550 (estática completa).
