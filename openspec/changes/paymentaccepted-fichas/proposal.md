## Why

El spec `seo-contenido` exige `paymentAccepted` en las 8 páginas pero solo existe en `index.html`; las 7 subpáginas Ño lo tienen. El change `sync-pre-arranque` lo dejó como cabo suelto documentado. Decisión de Juan (2026-09-26): el dato vive en home + 3 fichas de servicio, Ño en casos ni legales.

## What Changes

- Se agrega `"paymentAccepted": ["Yape", "Plin", "Transferencia bancaria"]` al `provider` de los schemas `Service` en las 3 fichas (`presencia-digital.html`, `tienda-online-bagisto.html`, `automatizacion-ia.html`).
- Casos y legales quedan intactos (Ño llevan datos de entidad del negocio).
- El spec `seo-contenido` se actualiza: el requisito pasa de "en las 8 páginas" a "home + 3 fichas".
- `tools/build_pages.py` se actualiza (`service_schema`) para que futuras regeneraciones conserven el campo.

## Capabilities

### New Capabilities

(Ninguna.)

### Modified Capabilities

- `seo-contenido`: el requisito de medios aceptados cambia de alcance (8 páginas → home + 3 fichas) y las fichas declaran `paymentAccepted` en su `provider`.

## Impact

- `servicios/*.html` (3 schemas `Service`, solo JSON-LD, sin cambios visibles).
- `tools/build_pages.py` (función `service_schema`).
- Spec principal `seo-contenido` vía archive.
- Sin cambios visuales, de copy ni de layout.
