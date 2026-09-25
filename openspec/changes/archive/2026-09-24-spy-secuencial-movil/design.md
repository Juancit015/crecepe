## Context

Ver `proposal.md` (Why). Estado: `processSpy` (`.process-step`, main.js ~448) y `opinionSpy` (`.opinion-card, .svc-steps li, .qa-check li`, ~501) usan `rootMargin: -45% 0px -45% 0px` + `threshold: 0` y activan por cada entrada intersectante: en un lote de N, gana la última procesada. Solo corren sin hover y con motion permitido (ya guardado).

## Goals / Non-Goals

**Goals:**
- Ganador determinista por cercanía al centro; un solo activo a la vez.
- Mismo costo que hoy (geometría solo al llegar un lote, no por frame).

**Non-Goals:**
- Cambiar franja, umbrales, estilos, desktop, reduced-motion ni timings.

## Decisions

- **Reescribir `onEntries` en ambos spies**: por lote, (1) quitar `.active` a todos, (2) filtrar intersectantes, (3) activar el de menor `|rect.top - centroViewport|`, (4) si ninguno intersecta, dejar todo apagado. `getBoundingClientRect` solo sobre los elementos del lote: sin reflows en scroll.
- **Mismo arreglo en `processSpy` aunque el reporte es de fichas**: es el mismo defecto copiado; dejarlo sería deuda a propósito. Cinco líneas espejo, mismo archivo.
- **Sin rAF/throttle extra**: el observer ya coalescea por frame; no se agrega listener de scroll.

## Risks / Trade-offs

- [Riesgo] Dos elementos equidistantes al centro → Mitigación: desempate por orden de documento (el posterior gana bajando, natural).
- [Riesgo] Cambio de comportamiento en opiniones del home (mismo observer) → Mitigación: la regla "más cercano al centro" también es lo correcto ahí; verificar visualmente.
- Caché de GitHub Pages (10 min): Ctrl+F5 tras el push.
