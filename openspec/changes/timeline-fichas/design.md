## Context

Ver `proposal.md` (Why). Referencia: `.process-timeline::before` (línea 2px, absoluta, riel a la izquierda de los puntos). Estado: `.svc-steps li::before` ya es el número con contador (no tocar); `.qa-check li > svg` es el icono. Ambas listas sin `position: relative` ni riel.

## Goals / Non-Goals

**Goals:**
- Riel + aire en ambas listas, espejo de Proceso, sin romper el spy.
- Un solo mecanismo para desktop y móvil.

**Non-Goals:**
- Cambiar números, iconos, colores de activo, markup o JS.

## Decisions

- **Segmentos por ítem, no riel continuo (revisión 2026-09-24)**: el riel `::before` en la lista traspasaba insignias/iconos y se descentraba (en QA el `margin: -8px` del `li` invalida el cálculo desde el UL). Cada `li:not(:last-child)::after` dibuja su conector solo en el hueco, centrado medido (pasos 13px = mitad del badge 26px; QA 11px = mitad del icono 22px desde el borde del UL). El segmento viaja con el `li` en hover/active: siempre alineado.
- **Aire vía `padding-bottom`/gap en `li`**: separar sin romper el alineamiento; medir contra Proceso móvil (52px entre pasos) y adaptar.
- **Respetar `.active`**: los conectores son decorativos; números e iconos conservan sus estilos de activo.
- **Modo oscuro**: conectores con el mismo tono tenue que Proceso (`rgba(255,255,255,.18)` en oscuro).

## Risks / Trade-offs

- [Riesgo] El riel no alinea con números/iconos por padding dispar → Mitigación: medir columna exacta en implementación; ajustar `left` del riel.
- [Riesgo] Listas con distinto ritmo entre fichas → Mitigación: misma clase en las 3 fichas; verificar las 3.
- Caché de GitHub Pages (10 min): Ctrl+F5 tras el push.
