## Context

Ver `proposal.md` (Why). Referencia: `.process-timeline::before` (línea 2px, absoluta, riel a la izquierda de los puntos). Estado: `.svc-steps li::before` ya es el número con contador (no tocar); `.qa-check li > svg` es el icono. Ambas listas sin `position: relative` ni riel.

## Goals / Non-Goals

**Goals:**
- Riel + aire en ambas listas, espejo de Proceso, sin romper el spy.
- Un solo mecanismo para desktop y móvil.

**Non-Goals:**
- Cambiar números, iconos, colores de activo, markup o JS.

## Decisions

- **Riel en la lista, no en los ítems**: `.svc-steps, .qa-check { position: relative; padding-left }` + `::before` vertical como Proceso (los `li::before` ya están ocupados por números; no se tocan).
- **Aire vía `padding-bottom`/gap en `li`**: separar sin romper el alineamiento del riel; medir contra Proceso móvil (52px entre pasos) y adaptar.
- **Respetar `.active`**: el riel es decorativo (`aria-hidden` innecesario en `::before`); números e iconos conservan sus estilos de activo.
- **Modo oscuro**: riel con el mismo tono tenue que Proceso (`rgba(255,255,255,.18)` en oscuro).

## Risks / Trade-offs

- [Riesgo] El riel no alinea con números/iconos por padding dispar → Mitigación: medir columna exacta en implementación; ajustar `left` del riel.
- [Riesgo] Listas con distinto ritmo entre fichas → Mitigación: misma clase en las 3 fichas; verificar las 3.
- Caché de GitHub Pages (10 min): Ctrl+F5 tras el push.
