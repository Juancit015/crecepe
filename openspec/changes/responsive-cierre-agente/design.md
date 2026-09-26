## Context

Ver `proposal.md` (Why). Trabajo del agente sin commitear (11 archivos, `?v=` mixto 42/53) + change `responsive-intermedio` activo con bandas 769–992 y 601–768 ya pusheadas (`52ec630`). Los bloques del agente vienen después en el CSS y ganan empates: hay que verificar convergencias (1 col en 769–992) y decidir conflictos (poda móvil eliminada).

## Goals / Non-Goals

**Goals:**

- Integrar el trabajo del agente con revisión, Ño a ciegas.
- Un solo `?v=` y specs que describan lo que el código hace.
- Cerrar los dos changes con archives en orden (`responsive-intermedio` primero).

**Non-Goals:**

- Nuevas bandas, rediseños ni ajustes finos de px (eso es otro change).
- Validación en viewports <500px (límite declarado del agente; queda como deuda documentada).
- Reescribir el CSS del agente.

## Decisions

- **Contenido completo gana sobre poda.** El agente eliminó recortes en móvil y el sitio ya venía mostrando todo en varios puntos; mantener podas en el spec sería mentir. Alternativa descartada: revertir su CSS a la poda — destruye información visible sin beneficio medido.
- **`?v=53` unificado (CSS+JS).** El JS Ño cambió pero un solo valor evita confusión futura; es barato.
- **Archive en orden.** Primero `responsive-intermedio` (sus deltas ajustados a lo que quedó tras el agente), luego este. Si un delta choca, manda lo que está publicado y verificado.
- **Deuda explícita:** viewports 320–412px sin validación real en navegador; detector mecánico con curvas/transiciones viejas. Se anotan en CHANGELOG, Ño se fingen resueltas.

## Risks / Trade-offs

- [Riesgo] El CSS del agente trae regresiones invisibles ( specificity, orden) → Mitigación: `git diff --check` + revisión de choques con mis bandas + captures de Juan antes del commit final.
- [Riesgo] Doble archive con deltas superpuestos → Mitigación: orden fijo y verificación de specs tras cada sync.
- [Riesgo] `.agents/` sin commitear genera ruido → Mitigación: se deja fuera del commit (untracked, Ño es del sitio).

## Migration Plan

Ño aplica (sitio estático). Orden: revisión diff → `?v=` → CHANGELOG → commit + push → archive `responsive-intermedio` → archive este change. Rollback: `git revert`.

## Open Questions

Ninguna.
