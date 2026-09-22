## Context

Ver `proposal.md` (Why). El toggle móvil es `var(--accent-dark)`
(`styles.css:2584`); sobre el navy de la destacada no se lee. La
destacada es oscura en ambos temas, así que una sola regla sin
`body.dark-mode` basta. Precedente directo: `.process-step
.pricing-toggle` (blanco → cyan).

## Goals / Non-Goals

**Goals:**

- Toggle legible en la destacada móvil, claro y oscuro, con hover
  cyan.

**Non-Goals:**

- Cambiar otros toggles o el comportamiento del acordeón.

## Decisions

- **Regla scopeada `.pricing-card--featured .pricing-toggle`**
  (0,2,0) junto a la de proceso, en vez de tocar la base. Racional:
  especificidad suficiente sin `!important`, cero riesgo colateral.
- **Sin variante dark**: el fondo de la destacada es oscuro en
  ambos temas, blanco+cyan sirven igual. Racional: menos reglas.

## Risks / Trade-offs

- (none)
