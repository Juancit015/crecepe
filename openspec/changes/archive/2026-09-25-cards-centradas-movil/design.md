## Context

Media 768: esos 4 grids pasan a 1 columna sin tope (styles.css ~2402). iPad mini retrato = 768px → card de ~728px. En teléfono (360px) el 100% mide ~320px: proporcionado. Ver proposal.md - Why.

## Goals / Non-Goals

- Goals: aire lateral en 500–768px sin tocar teléfono ni desktop.
- Non-Goals: no cambiar columnas ni ritmo; pricing-grid fuera de scope (sin queja evidencial).

## Decisions

- **`max-width: 600px + margin: 0 auto` en los 4 grids dentro del media 768 (elegido):** una sola regla, cero HTML. A 768px deja ~64px por lado; bajo 600px no aplica. Alternativa descartada — padding lateral mayor al `.container`: afectaría a todas las secciones incluyendo las sanas. Ño.
- **Valor exacto 600–640px a fijar probando** con las capturas (768 iPad, 500 ventana, 360 teléfono).

## Risks / Trade-offs

- Cards con foto (servicios) se angostan en tablet: aceptable, ganan proporción.
