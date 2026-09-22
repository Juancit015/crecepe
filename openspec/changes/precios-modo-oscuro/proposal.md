## Why

En modo claro las cards (precios y casos AZ) combinan perfecto; en
modo oscuro los colores se eligieron al paso (parches por card) y se
mezclan entre sí: botones que se pierden, badges opacos, jerarquía
rota. Hace falta una paleta oscura definida para `#planes` que
replique la armonía del modo claro.

## What Changes

- Paleta oscura cerrada para las 3 pricing-cards: fondo, título,
  precio, features, badge tier, CTA normal y CTA hover — con valores
  fijos, no parches.
- Hermanas en navy apagado (`#0F1D3A`, el `--white` de oscuro),
  Tienda un escalón arriba (`#16294F`) como en AZ oscuro, acentos
  cyan solo donde hay acción (badge popular, checks, CTA).
- Texto: blanco para títulos/precios, `#DCE6FA` para cuerpo.
- Solo `#planes` en `body.dark-mode`; el modo claro no se toca.

## Capabilities

### New Capabilities

- (none)

### Modified Capabilities

- `precios-estilo-casos`: agrega los requisitos de color en modo
  oscuro para las pricing-cards (fondos, texto, badges y CTAs).

## Impact

- `assets/css/styles.css` (bloque `body.dark-mode` de precios,
  reemplaza reglas sueltas actuales) + `assets/css/styles.min.css`.
- `index.html` solo si falta algún hook (no se prevén cambios de
  marcado).
- Sin cambios de copy, precios, links, SEO ni JS.
