## Context

Ver `proposal.md` y `specs/planes-entrada/spec.md`. Base: `.reveal` (opacity 0 + translateY 28px) → `.visible` (normal) vía el observer existente en `main.js`; las 3 `.pricing-card` ya llevan `.reveal`. Las cards son hijas 1-3 de `.pricing-grid`.

## Goals / Non-Goals

**Goals:** direcciones por card con escalonado leve, reutilizando el observer (sin JS).
**Non-Goals:** cambiar timing global del reveal, copy, layout u otras secciones.

## Decisions

- **Sobrescribir solo el `transform` inicial por `nth-child`.** El estado `.visible` ya resetea a normal; el observer no se toca. Alternativa descartada: keyframes propios (duplicarían el sistema reveal).
- **Escalonado con `transition-delay` (0s / 0.12s / 0.24s).** Ritmo sin coreografía pesada; la central (2ª) primera para marcar jerarquía... en desktop la central sale de abajo con delay 0 y las laterales con 0.12/0.24.
- **Media query móvil invierte las direcciones** (translateX ±60px alternado). En móvil el reveal base también aplica translateY: la regla móvil lo reemplaza por completo con su propio transform.
- **`prefers-reduced-motion` ya cubierto** por la guarda global existente (transiciones a 0.01ms + reveal visible).

## Risks / Trade-offs

- [Risk] Si cambia el orden de cards, los nth-child mienten → Mitigación: comentario en CSS indicando el mapeo 1-izq/2-centro/3-der.
