## Context

El change anterior dejó `max-height + overflow-y: auto` en `.svc-aside`: funcional pero esconde contenido tras scroll. Juan lo rechaza: la card debe verse entera siempre. Card ≈ 620px + `top: 88px` + aire 24px ≈ 732px mínimo. Ver proposal.md - Why.

## Goals / Non-Goals

- Goals: card completa en toda altura desktop; sticky donde quepa.
- Non-Goals: no rediseñar ni compactar la card; no tocar móvil.

## Decisions

- **Media por altura → estática (elegido):** `@media (max-height: 800px)` convierte el aside en flujo normal, entero y sin scroll. Simple, declarativo, mismo patrón que el móvil. Alternativa descartada — compactar la card (menos padding/fuente en viewports bajos): deforma el diseño espejo de Planes y hay que mantener 2 variantes. Ño.
- **Umbral 800px:** cubre la card (732px) con margen; sobre 800px el sticky con `top: 88px` cabe sobrado. Sin `max-height` residual: el scroll interno desaparece del código, no solo se evita.
- **Se retira `overscroll/scrollbar-thin` del aside:** quedaban huérfanos sin overflow.

## Risks / Trade-offs

- Entre 732 y 800px la card es estática pudiendo ser sticky: se prioriza "entera siempre" sobre "siempre fija", a pedido explícito.
