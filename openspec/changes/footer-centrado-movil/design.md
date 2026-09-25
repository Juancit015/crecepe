## Context

`.footer-grid` hoy: 3 col desktop, 2 col en ≤992, 1 col alineada a la izquierda en ≤768 (styles.css ~1819). Footer siempre oscuro. El footer de subpáginas se genera desde el index: el fix es solo CSS global. Ver proposal.md - Why.

## Goals / Non-Goals

- Goals: una columna centrada en ≤992px.
- Non-Goals: no reordenar bloques; no tocar desktop; no tocar HTML.

## Decisions

- **Unificar a 1 col centrada desde 992 (elegido):** reemplaza el 2-col de tablet y el 1-col izquierdo de móvil con `grid-template-columns: 1fr; justify-items: center; text-align: center` en el bloque del footer. Una sola regla, comportamiento idéntico en tablet y móvil.
- **Centrar hijos flex:** `.footer-pay` (badges) con `justify-content: center`; logo-img es bloque (centrado vía `margin: 0 auto` si hiciera falta); `footer-about p` con `max-width` ya centrado por el text-align heredado.
- **Verificar `footer-bottom`:** ya centrado por diseño; solo confirmar, no duplicar reglas.

## Risks / Trade-offs

- Listas largas (links de servicios) centradas: legible en 1 col, estándar en footers móviles.
