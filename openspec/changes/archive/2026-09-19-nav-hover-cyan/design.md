## Context

Ver `proposal.md`. Estado: `.nav-links a:hover { color: var(--accent-dark); }` (línea 206, global para ambos temas y estados). En oscuro el fondo siempre es oscuro (foto, marino scrolled, panel móvil), así que el marino se pierde en los 3 casos.

## Goals / Non-Goals

**Goals:**
- Hover cian en oscuro en los 3 contextos; claro intacto.

**Non-Goals:**
- No se tocan reposo, subrayado animado, logo ni CTA.

## Decisions

- **Decisión 1: una regla oscura global.**
  `body.dark-mode .nav-links a:hover { color: var(--accent-light); }` con especificidad (0,3,1) sobre la base (0,2,0). Cubre los 3 contextos sin calificadores de scroll. Alternativa (3 reglas por contexto) descartada: mismo valor en los 3.

## Risks / Trade-offs

- [Riesgo] Ninguno relevante: un color, un tema.

## Migration Plan

- Solo CSS. Hover en oscuro arriba, con scroll y menú móvil. `openspec validate nav-hover-cyan`.

## Open Questions

- Ninguna.
