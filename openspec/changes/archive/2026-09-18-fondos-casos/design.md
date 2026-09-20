## Context

Ver `proposal.md`. Patrón probado en servicios: `class="page-hero has-bg"` + `style` inline (velo + `url('../assets/img/...') center/cover`). Las reglas blancas `.has-bg` no distinguen servicios de casos.

## Goals / Non-Goals

**Goals:**
- Foto + velo + `has-bg` en las 2 páginas, texto blanco activo.

**Non-Goals:**
- Sin CSS nuevo, sin cambios de textos ni velos.

## Decisions

- **Decisión 1: replicar el inline de servicios tal cual.**
  Mismo velo y sintaxis, cambiando solo el archivo de foto. Alternativa (reglas CSS por página) descartada: el inline ya es el patrón vigente y evita churn.

## Risks / Trade-offs

- [Riesgo] Ninguno relevante: réplica exacta de un patrón verificado.

## Migration Plan

- Editar 1 línea por HTML. Recorrido de ambas en los 2 temas. `openspec validate fondos-casos`.

## Open Questions

- Ninguna.
