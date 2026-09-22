## Context

Ver `proposal.md` y el delta en `specs/ux-movil-compacto/spec.md`. Estado actual: `.pricing-desc` recortada a 2 líneas con line-clamp solo en móvil; el acordeón alterna `.is-open` solo en la lista.

## Goals / Non-Goals

**Goals:** preview con "..." colapsado y descripción completa animada al expandir, reutilizando el botón existente.
**Non-Goals:** cambiar copy, desktop, velocidad o estilo del acordeón de features.

## Decisions

- **Clase `.expanded` en la card, no solo en la lista.** El JS alterna ambas: la lista como hoy y la descripción pasa de recortada a completa. Alternativa descartada: animar `line-clamp` (no es animable).
- **Animación de la descripción con `max-height` + `opacity`**, igual que la lista (transición corta ~0.25s). El recorte colapsado sigue con line-clamp de 2 líneas.

## Risks / Trade-offs

- [Risk] `max-height` fijo puede cortar descripciones futuras más largas → Mitigación: valor generoso (p. ej. 300px) muy por encima del texto actual.
