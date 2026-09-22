## Context

Ver `proposal.md` (Why con la medición) y `specs/marquesinas/spec.md`. La pista trust mide 1830px (G1 924 + G2 906) contra viewport 1366px: se requieren 2281px mínimo. El loop usa `translateX(-50%)`, que exige mitades idénticas y pista ≥ viewport + media pista.

## Goals / Non-Goals

**Goals:** cobertura total todo el loop + reinicio invisible, manteniendo -50%, 30s, hover-pause y reduced-motion.
**Non-Goals:** cambiar copy, velocidad, temas o tocar la barra de especialidades (cubre bien).

## Decisions

- **4 grupos estáticos (2 mitades de 2 sets) en HTML.** ~3660px ≥ 1366 + 1830. Alternativa descartada: clonar por JS (parpadeo si el JS tarda, más código para lo mismo).
- **Todos los puntos visibles.** La regla que escondía el último punto rompía la simetría (salto 9px/ciclo). Ritmo de separadores queda uniforme en toda la pista incluida la costura.
- **`flex-shrink: 0` en spans.** Blindaje para que ningún item se comprima y las mitades sigan idénticas.

## Risks / Trade-offs

- [Risk] Más nodos DOM (8 spans extra) → Mitigación: insignificante, texto plano.
- [Risk] En viewports ultra-anchos (>1800px) 3660px podría quedar justo → Mitigación: cubre hasta viewport 1830px; más allá se acepta degradación (fuera del público objetivo móvil/desktop normal).
