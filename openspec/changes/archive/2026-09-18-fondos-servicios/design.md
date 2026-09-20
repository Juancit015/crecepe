## Context

Ver `proposal.md`. Estado: `.page-hero` con degradado plano (líneas ~1703–1707); fotos claras de día en `assets/img/` (~116–200 KB); reglas blancas dormidas tras `.has-bg` (líneas ~1739–1743).

## Goals / Non-Goals

**Goals:**
- Foto + velo + `has-bg` por página; texto blanco activo en ambos temas.

**Non-Goals:**
- No se tocan textos, velos de otras secciones ni casos/legales.

## Decisions

- **Decisión 1: solo `has-bg` en el HTML.**
  `class="page-hero has-bg"`. `has-bg` despierta el texto blanco; la foto + velo oscuro ya venían en `style` inline por página (hallazgo al implementar), así que no hicieron falta modificadores ni reglas de fondo. Alternativa (mover fondos al CSS) descartada: el inline ya funciona en ambos temas y se evita churn.
- **Decisión 2: velo inline existente como contraste.**
  El velo `rgba(10,25,48,...)` inline rige en ambos temas y las fotos son claras de día: el blanco despierto contrasta. Si alguna zona pierde legibilidad, se ajusta ese velo inline.

## Risks / Trade-offs

- [Riesgo] Si una foto sale muy clara en alguna zona del texto, subir el velo solo de ese modificador.

## Migration Plan

- Editar 3 HTML (clases) y CSS (3 reglas + `background-size/position`). Recorrido de las 3 en ambos temas. `openspec validate fondos-servicios`.

## Open Questions

- Ninguna.
