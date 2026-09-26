## Why

Las fotos de las cards de Servicios (`.service-photo`) son más bajas que las de Casos (`.case-preview`) en todos los breakpoints (p. ej. 200 vs 210 en desktop, 140 vs 156 en tablet, 180 vs 156 en móvil), lo que hace ver a Servicios menos protagonista. Igualar alturas unifica el ritmo visual entre secciones.

## What Changes

- **Alturas de `.service-photo` = alturas de `.case-preview`** en cada breakpoint: base 200→210; 993–1100 128→210 (160→210 en alto); tablet 481–768 140→156 y 769–1024 140→210 (partiendo la regla actual); móvil ≤480 180→156; desktop-bajo 160→180.
- Las alturas de Casos Ño cambian: son la referencia. Mismo `object-fit: cover`, mismos velos/overlays.
- Verificación por captura en móvil (~375px), tablet (~768px) y desktop.

## Capabilities

### New Capabilities

(Ninguna.)

### Modified Capabilities

- `servicios-foto-arriba`: la altura de la foto de las cards de Servicios MUST igualar la de Casos en cada breakpoint.

## Impact

- Solo `assets/css/styles.css` (+ minificado y `?v=`). Sin cambios de DOM, imágenes, copy, badges, checklist ni botones.
