## Context

Ver `proposal.md` (Why). Referencia a espejar: `.pricing-card` (padding 38/30), `.pricing-card h3` (1.35rem), `.pricing-price` (bordes top/bottom, label uppercase, amount 2rem), `.pricing-features` (ritmo de ítems) y el CTA de Planes. Actual del aside móvil: padding 30/26 heredado, precio 2.2rem sin banda, mini-lista compacta propia y CTA a todo ancho.

## Goals / Non-Goals

**Goals:**
- Card móvil con las mismas proporciones que la destacada de Planes.
- Todo confinado al media 992px; desktop intacto.

**Non-Goals:**
- Reutilizar clases `pricing-*` en el markup de fichas (acoplaría componentes); solo se espejan métricas. Sin cambios de copy ni desktop.

## Decisions

- **Espejar métricas, no clases**: ajustar `.svc-aside`, `.svc-price`, `.svc-mini` y `.svc-wa` en el media 992px a los valores de `pricing-*` (medir cada delta en implementación: padding, bordes de banda, espaciado de lista, ancho del CTA). Si algún delta no cierra visualmente, se documenta y se acerca lo más posible.
- **CTA con el mismo comportamiento que en Planes**: verificar si el CTA de Planes es ancho completo o natural y replicarlo (hoy el de la ficha se estira al contenedor y se ve distinto).
- **Sin tocar desktop**: el aside desktop ya espeja la destacada desde `ficha-compra-planes`.

## Hallazgo 1.1 (deltas medidos, Planes → aside móvil)

- Card padding 38/30 → 30/26 · h3 1.35rem/mb8 → 1.25rem · amount 2rem → 2.2rem
- Banda precio (pad 16/0, bordes `rgba(255,255,255,.18)` en navy, mb22): no existe en aside
- Features: flex/gap10/pad 7/0/0.92rem/mb26 → mini propia compacta
- CTA Planes es full-width con radius 14 (no pill): espejar exacto

## Risks / Trade-offs

- [Riesgo] Alguna métrica de Planes depende de su contexto (ancho de columna del grid de precios) → Mitigación: adaptar proporcionalmente, no copiar ciego; verificar en ~360px y ~768px.
- Caché de GitHub Pages (10 min): Ctrl+F5 tras el push.
