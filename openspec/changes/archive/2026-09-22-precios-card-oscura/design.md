## Context

Ver `proposal.md` (Why). Estado actual (change anterior
`precios-estilo-casos`): Tienda lleva `.pricing-card--featured` con
borde azul + elevación; los 3 CTA dicen `Consultar plan` con icono
WhatsApp SVG y `aria-label` por plan. Supuesto registrado: "azul
oscuro como AZ Consulting" = navy `--primary` del sitio (hero,
footer), no un color nuevo.

## Goals / Non-Goals

**Goals:**

- Card Tienda en navy con contraste AA en título, precio, features
  y CTA, en modo claro y oscuro.
- CTAs con nombre de plan + icono, mismos links y prefills.

**Non-Goals:**

- Cambiar tiers, precios, features, toggles o layout del grid.
- Nuevo color fuera de los tokens existentes.

## Decisions

- **Reutilizar `--primary` para el fondo** en vez de un navy nuevo.
  Racional: ya es el azul oscuro de la marca (hero/footer); cero
  tokens nuevos, contraste con blanco probado del sitio.
- **Texto en claro por cascada** (`.pricing-card--featured` redefine
  `h3`, `.pricing-desc`, `.amount`, `li`, `.pricing-price` borders)
  en vez de clases utilitarias por elemento. Racional: un solo
  bloque, fácil de revertir.
- **CTA de la destacada en fondo claro** (blanco/acento-claro) para
  contraste sobre navy; en modo oscuro la card se aclara menos que el
  fondo para seguir distinguiéndose.
- **Texto por plan + icono** (no solo icono). Racional: el usuario lo
  pidió por claridad comparando cards; el `aria-label` se simplifica
  al coincidir con el texto visible.

## Risks / Trade-offs

- [Navy + modo oscuro pueden mimetizarse] → Mitigación: en oscuro la
  card usa navy elevado con borde sutil claro para separarse del
  fondo.
- [Más texto en botones angostos de móvil] → Mitigación: "Consultar
  Automatización" cabe a 360px (verificar visualmente); si rompe,
  se permite salto a 2 líneas centrado.
