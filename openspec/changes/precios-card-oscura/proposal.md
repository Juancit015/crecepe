## Why

La card del medio (Tienda, plan popular) quedó con borde azul que se
siente ajeno al sitio. Vestirla de azul oscuro —el navy del hero y los
CTA— la destaca con identidad propia en vez de con un recuadro. Además
los CTA vuelven a nombrar su plan (Consultar Presencia / Tienda /
Automatización) porque el texto único "Consultar plan" pierde
claridad al comparar cards.

## What Changes

- La card Tienda pierde el borde azul y pasa a fondo azul oscuro
  (`--primary` navy del sitio) con texto, precio y features en
  claro; la etiqueta `Más popular` se adapta para contraste.
- Los 3 CTA conservan el icono de WhatsApp pero recuperan texto por
  plan: `Consultar Presencia`, `Consultar Tienda`,
  `Consultar Automatización` (links `wa.me` con prefill sin cambios).
- Tiers, precios, features y toggles no cambian.

## Capabilities

### New Capabilities

- (none)

### Modified Capabilities

- `precios-estilo-casos`: el destacado del plan popular pasa de
  borde+elevación a card azul oscuro; el CTA vuelve a texto por plan
  (manteniendo icono WhatsApp y prefill).

## Impact

- `index.html` (textos de los 3 CTA).
- `assets/css/styles.css` + `assets/css/styles.min.css` (variante
  oscura de `.pricing-card--featured` + ajustes claro/oscuro).
- SEO: **sin riesgo**. Los CTA apuntan a `wa.me` (externo, no
  reparten ni reciben autoridad); no se tocan headings, URLs,
  canonicals, schema ni copy indexable. El cambio de texto visible
  en 3 botones no es señal de ranking.
