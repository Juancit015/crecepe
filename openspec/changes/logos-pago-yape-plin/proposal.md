## Why

El footer y las secciones clave mencionan Yape/Plin/transferencia solo como texto. Los logos oficiales dan reconocimiento instantáneo y suben confianza (más contacto, menos rebote), y el schema aún no declara los medios aceptados ni tiene el `priceRange` correcto (dice "S/ 500 - S/ 900", los precios viejos). Se gana en conversión y en señal estructurada a la vez.

## What Changes

- Los 3 PNG de `/home/juan/Descargas/logos/` se convierten a AVIF con transparencia a tamaño real de uso (~120px ancho) en `assets/img/` (meta: total < 25 KB; Yape hoy pesa 164 KB solo).
- Badges con logo (`<img>` + `alt` + `width`/`height` fijos, cero CLS) en 3 ubicaciones: footer (reemplaza `.pay-badge` de texto), sección Planes (junto a precios) y banda de condiciones. La línea textual "Yape, Plin o transferencia" se conserva para GEO.
- Schema: `"paymentAccepted": ["Yape", "Plin", "Transferencia bancaria"]` en el `ProfessionalService` y corrección de `priceRange` a `"S/ 149 - S/ 2,990"` en los 4 bloques ×8 páginas vía generador.
- Contraste verificado en modo oscuro (pastilla clara si algún logo se pierde) y en móvil 360px.
- Bump `?v` de assets en las 8 páginas + `tools/build_pages.py`, regenerar `styles.min.css`, registrar en `CHANGELOG.md`.

## Capabilities

### New Capabilities
- `medios-pago`: el sitio muestra los medios de pago aceptados (Yape, Plin, transferencia) con logo oficial + alt en footer, Planes y banda de condiciones.

### Modified Capabilities
- `seo-contenido`: el JSON-LD declara `paymentAccepted` y el `priceRange` real.

## Impact

- `assets/img/` (3 AVIF nuevos), `index.html` + páginas generadas, `assets/css/styles.css` (estilos de badges) + min, `tools/build_pages.py`, `?v`, `CHANGELOG.md`.
- Sin JS. Logos de marcas de terceros usados sin modificar, solo en contexto "Aceptamos".
