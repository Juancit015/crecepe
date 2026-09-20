## Context

Ver `proposal.md` para el porqué. Estado actual (`assets/css/styles.css`):
- `.opinion-quote`: pastilla `rgba(11,47,212,0.08)` + `color: var(--primary)`.
- Hover global: `.opinion-card:hover .opinion-quote { background: var(--primary); color: #fff; }` (0,3,0). En claro `--primary` es marino (bien); en oscuro es blanco (pastilla y comillas blancas, mal).
- La transición `background/color 0.35s` ya existe en `.opinion-quote`.

## Goals / Non-Goals

**Goals:**
- Comillas marinas sobre pastilla blanca al hover solo en oscuro, con la animación existente.

**Non-Goals:**
- No se tocan reposo, modo claro, elevación de la tarjeta, ni HTML.

## Decisions

- **Decisión 1: override acotado a oscuro con marino fijo.**
  `body.dark-mode .opinion-card:hover .opinion-quote { background: #fff; color: #0A1F44; }`: especificidad (0,4,1) supera a la regla global (0,3,0); marino fijo porque la variable en oscuro es blanca (la causa del bug). Alternativa (pastilla marina + comillas blancas espejando el claro) descartada: el usuario pidió explícitamente comillas marinas sobre fondo blanco.
- **Decisión 2: sin transición nueva.**
  La existente ya cubre el cambio; no se duplica.

## Risks / Trade-offs

- [Riesgo] Ninguno relevante: una regla, un estado, un tema.

## Migration Plan

- Cambio solo-CSS. Recarga dura en oscuro, hover sobre las tres tarjetas. `python3 tools/build_pages.py` no necesario.

## Open Questions

- Ninguna que bloquee specs o tareas.
