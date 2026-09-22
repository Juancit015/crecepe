## Why

Tras desactivar el parallax en táctil, el zoom persiste en móvil: los recortes verticales (`*-fondo-movil.avif`) nunca llegaron a aplicarse porque sus reglas pierden por orden de cascada contra las declaraciones base, y la sección Contacto ni siquiera tiene recorte. La evidencia (3 capturas) muestra Diferenciador, Proceso y Contacto con encuadre panorámico recortado.

## What Changes

- Los recortes verticales de GEO, Opiniones y Proceso se aplican de verdad en táctil (mismo `!important` que ya vence los `fixed`).
- Nuevo recorte vertical para el fondo de Contacto, con encuadre revisado.
- Desktop intacto (panoramas) y sin cambios de velos, markup o JS.
- Este change absorbe el comportamiento táctil del change aún no archivado `parallax-movil-sin-zoom`: archivarlo antes o junto con este, este último.

## Capabilities

### New Capabilities

- (ninguna)

### Modified Capabilities

- `parallax-fondos`: swap de recortes verticales efectivo en táctil (GEO, Opiniones, Proceso) + recorte de Contacto; el reveal sigue siendo solo-desktop.

## Impact

- `assets/css/styles.css` (+ `styles.min.css` regenerado): `!important` en los swaps y regla de Contacto.
- 1 imagen nueva: `contacto-fondo-movil.avif`.
- Sin impacto en SEO, schema, JS ni contenido.
