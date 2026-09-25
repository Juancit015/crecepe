## Context

Ver `proposal.md` (Why). Estado: rige `seguidora-tras-prueba` (aside compacto sticky en slot 5/6 tras Prueba). Referencias: Airbnb (panel sticky desktop → barra fina abajo en móvil), vocab.design (barra condensada con lo mínimo: precio + 1 botón), GoodUI/Myer (el sticky aparece TRAS pasar el botón real).

## Goals / Non-Goals

**Goals:**
- Card full quieta + barra condensada post-card, sin choques con flotantes.
- Lógica por visibilidad real (observer), no por heurísticas de scroll-Y.

**Non-Goals:**
- Cambios de desktop, copy, schemas; revivir `buybar-*` por scroll-Y (se retiró con motivo).

## Decisions

- **Aside a card completa estática**: quitar sticky/`order` viajero del media 992px; mostrar badge/mini/nota (métricas paridad vigentes). El slot tras Prueba se mantiene si el observer lo necesita como ancla; si estorba, vuelve al punto QA-FAQ (decidir en implementación).
- **Barra como markup ×3 fichas** (no clonada por JS): `<div class="buybar">` con precio + CTA por plan, explícito y auditable. CSS: `fixed`, ≤64px, thumb zone, `transform` para show/hide (componible).
- **Observer sobre la card real** (`IntersectionObserver` en `.svc-aside`): barra visible ⇔ card fuera del viewport; segundo observer en `.page-related`/footer para retirarla al final. Sin contadores de scroll-Y.
- **Flotantes por clase**: `body.buybar-on .to-top` (y WA si existe en ese viewport) desplazan su `bottom` la altura de la barra. Se calcula, no se adivina.
- **`prefers-reduced-motion`**: show/hide sin transición.

## Risks / Trade-offs

- [Riesgo] Doble CTA visible (card + barra en transición) → Mitigación: la barra solo aparece con card 100% fuera (threshold 0 + rootMargin).
- [Riesgo] Observer sin soporte (residual 2026) → Mitigación: sin JS la card full sigue comprando; la barra queda oculta por defecto.
- Caché de GitHub Pages (10 min): Ctrl+F5 tras el push.
