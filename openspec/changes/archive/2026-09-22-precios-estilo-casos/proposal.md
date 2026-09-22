## Why

Las cards de precios (`#planes` en el index) usan un estilo propio
desconectado del lenguaje visual de las cards de casos
(`.case-card`: etiqueta superior, cuerpo estructurado, links de
acción). Unificarlas refuerza coherencia y jerarquía, y las etiquetas
de tier (Starter / Más popular / Enterprise) ayudan a elegir plan de
un vistazo.

## What Changes

- Las 3 `.pricing-card` adoptan el estilo del cuerpo de `.case-card`:
  etiqueta superior de tier, título, descripción, precio, features
  colapsables y links de acción (sin foto de cabecera, por decisión
  del usuario).
- Etiquetas: Presencia = `Starter`, Tienda = `Más popular` (card
  destacada), Automatización = `Enterprise`.
- El CTA pasa a texto único `Consultar plan` con icono de WhatsApp,
  conservando el link `wa.me` con prefill por plan ya existente.
- Precios, features, toggles `Ver qué incluye` y comportamiento
  responsive/colapso no cambian.

## Capabilities

### New Capabilities

- `precios-estilo-casos`: presentación visual de las cards de precios
  con el lenguaje de las case-cards (etiqueta de tier, CTA WhatsApp
  unificado, card destacada).

### Modified Capabilities

- (none)

## Impact

- `index.html` (marcado de las 3 cards en `#planes`).
- `assets/css/styles.css` + `assets/css/styles.min.css` (estilos de
  etiqueta tier, CTA con icono, variante destacada).
- Sin cambios de precios, copy, SEO/schema ni JS (toggles existentes
  se reutilizan).
