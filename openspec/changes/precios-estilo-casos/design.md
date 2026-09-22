## Context

Ver `proposal.md` (Why). Estado actual: `.pricing-card` tiene estilo
propio; `.case-card` define el lenguaje de referencia (etiqueta
`.case-role`, cuerpo `.case-body`, acciones `.case-actions` /
`.case-link`). Los CTA ya son links `wa.me` con prefill por plan
(`index.html:598-646`); solo falta unificar texto e icono. Los toggles
`Ver qué incluye` y su JS se reutilizan sin cambios.

## Goals / Non-Goals

**Goals:**

- Pricing-cards con etiqueta de tier, card popular destacada y CTA
  único con icono WhatsApp, en claro/oscuro y móvil/desktop.
- Reutilizar clases y tokens existentes (`case-role`, `case-link`,
  `pricing-toggle`) en vez de crear un sistema paralelo.

**Non-Goals:**

- Cambiar precios, features, copy o schema/SEO.
- Cabecera con foto en las pricing-cards (descartado por el usuario).
- Tocar las cards de casos.

## Decisions

- **Extender clases de casos en el marcado de precios** (p. ej.
  `case-role` para la etiqueta tier) + 2-3 reglas nuevas
  (`pricing-tier--popular`, variante `.pricing-card--featured`,
  `.pricing-cta` con icono inline SVG de WhatsApp) en vez de
  duplicar el CSS de `.case-card`. Racional: menos CSS, coherencia
  garantizada; si cambia el lenguaje de casos, precios lo heredan.
- **Icono WhatsApp como SVG inline** (glyph oficial simplificado,
  `currentColor`), no emoji ni imagen externa. Racional: nítido en
  retina, respeta modo oscuro, cero requests.
- **El destacado es borde + elevación, no escala.** Racional: la
  escala rompe el grid en móvil y mueve a las hermanas; borde cyan +
  sombra marca sin reflow.

## Risks / Trade-offs

- [La etiqueta tier puede confundirse con un cambio de precio/nombre
  del plan] → Mitigación: los `h3` (Presencia Digital, Tienda
  Virtual + IA, Automatización con IA) y precios quedan intactos; la
  etiqueta es solo un `span` superior.
- [El CTA único pierde la palabra del plan] → Mitigación: el prefill
  de WhatsApp sigue siendo por plan; el `aria-label` conserva el
  nombre ("Consultar plan Presencia por WhatsApp").
