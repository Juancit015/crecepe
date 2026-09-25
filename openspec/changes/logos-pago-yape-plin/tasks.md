## 1. Assets de logos

- [x] 1.1 Convertir los 3 PNG a AVIF con transparencia a ~120px en `assets/img/` (`pago-yape.avif`, `pago-plin.avif`, `pago-transferencia.avif`) y verificar peso total < 25 KB + nitidez
- [x] 1.2 Agregar estilos de badges con logo en `assets/css/styles.css` (altura fija, alineación, pastilla clara solo si el contraste en oscuro lo exige), regenerar `styles.min.css`

## 2. Ubicaciones y schema

- [x] 2.1 Reemplazar `.pay-badge` del footer por `<img>` con alt + dimensiones, agregar logos en Planes y banda de condiciones conservando la línea textual, y verificar 360px claro/oscuro sin CLS
- [x] 2.2 Agregar `paymentAccepted` al `ProfessionalService` y corregir `priceRange` a `"S/ 149 - S/ 2,990"` en los 4 bloques ×8 páginas vía `tools/build_pages.py`, y validar los 8 JSON-LD con `python3 json.loads`

## 3. Lanzamiento y documentación

- [ ] 3.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py`, registrar en `CHANGELOG.md` y commitear
- [ ] 3.2 Sync de deltas a `medios-pago` (nuevo) y `seo-contenido`, archivar el change y reportar
