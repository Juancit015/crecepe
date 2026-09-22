## Context

Ver `proposal.md` (Why). Estado actual: el toggle "Ver detalle" usa el color de texto base (azul oscuro) también en móvil, donde el fondo del timeline es marino; y la media query móvil de `ux-movil-compacto` oculta por completo `.service-list` dentro de las cards de Servicios. Todo el cambio cabe en `assets/css/styles.css`, sin JS.

## Goals / Non-Goals

**Goals:**
- Toggle legible en móvil con el acento cyan ya usado por punto + título.
- Cards de Servicios en móvil con sus 3 primeros bullets visibles, sin acordeón ni JS.

**Non-Goals:**
- Cambios en desktop, animaciones reveal, FAQs, Casos, Opiniones o Planes.
- Nuevos componentes, clases de markup o textos nuevos (los bullets ya existen).

## Decisions

- **Cyan vía variable de acento existente** (no un hex nuevo): se reutiliza el mismo color cyan del resaltado móvil del timeline, solo dentro de la media query móvil del toggle. Alternativa descartada: blanco — el dueño eligió cyan y mantiene un solo acento móvil.
- **Bullets solo con CSS**: en la media query móvil se revierte el `display: none` de la lista y se ocultan los `li` desde el cuarto (`nth-child(n+4)`), en vez de tocar el markup de las 3 cards. Alternativa descartada: clases nuevas en el HTML — innecesarias y triplican el diff.
- **Sin cambios de contraste global**: el cyan ya pasó el uso sobre marino en punto + título; el toggle hereda la misma pareja fondo/texto.

## Risks / Trade-offs

- [Riesgo] Los 3 primeros bullets podrían no ser los más vendedores en alguna card → Mitigación: el orden actual ya prioriza (velocidad, Google/IA, WhatsApp); si el dueño quiere reordenar, es cambio de texto menor fuera de este change.
- [Riesgo] Más altura vertical en Servicios móvil → Mitigación: son 3 líneas cortas por card; se mantiene el resto del compacto (sin overlay, icono ni foto grande).
