## Context

Ver `proposal.md`. Estado: overlays de casos con 1 línea; `.service-photo` (200px, full-bleed con márgenes negativos) sin overlay; barra `::before` 4px degradada con `scaleX` (líneas ~594–606).

## Goals / Non-Goals

**Goals:**
- Textos ampliados, overlays en servicios reutilizando la mecánica, barra fuera.

**Non-Goals:**
- No se tocan enlaces, precios, resto de cards ni otras secciones.

## Decisions

- **Decisión 1: textos propuestos (aprueba el dueño al aplicar).**
  AZ: "Web corporativa rápida con SEO técnico que Google entiende. Hecha en colaboración, con carga veloz y Schema." / Chávez: "Tienda virtual completa que vende 24/7 sin marketplaces. Hecha desde cero, con pedidos por WhatsApp." / Servicios (1 línea c/u): Presencia "Tu primera web profesional visible en Google." / Tienda "Tu tienda vendiendo sola las 24 horas." / IA "Atiende y vende mientras duermes."
- **Decisión 2: reutilizar `.case-overlay` como `.foto-overlay` genérico o extender selector.**
  La mecánica (bajada + velo + foco/táctil) se comparte; `.service-photo` necesita `position: relative` (hoy es block con overflow hidden) para anclar el absoluto.
- **Decisión 3: borrar ambas reglas `::before`.**
  Sin reemplazo: elevación + sombra ya comunican el hover.

## Risks / Trade-offs

- [Riesgo] Overlay de 200px (140px móvil) con texto: 1 línea en servicios para no apretar; 2 líneas en casos (210px).

## Migration Plan

- Editar overlays de casos, 3 fotos de servicios y CSS (overlay + borrar barra). Verificar ambos temas, móvil y táctil. `openspec validate overlay-servicios`.

## Open Questions

- Textos finales los confirma el dueño al aplicar.
