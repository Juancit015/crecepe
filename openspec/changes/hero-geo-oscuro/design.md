## Context

Ver `proposal.md` (Why). `.mouse`/`.wheel` usan `var(--accent)`;
`.geo-card` y `.geo-engines span` tienen fondo `#fff` fijo sin
variante dark. La sección geo ya es oscura (foto + overlay), así que
el navy/blanco integra sin choques.

## Goals / Non-Goals

**Goals:**

- Blanco legible en hero y geo-oscuro con tokens existentes.

**Non-Goals:**

- Cambiar modo claro, layout o copy.

## Decisions

- **Mouse blanco global (no solo dark)**: el hero lleva foto con
  velo; el azul se pierde también en claro. Racional: 1 regla.
- **Cards en `#0F1D3A`** (el navy de oscuro, no `--primary`):
  Racional: es el fondo de card estándar en dark; `--primary`
  `#0A1F44` quedaría más hundido que el resto.
- **Píldoras glass** (`rgba(255,255,255,0.08)` + borde
  `rgba(255,255,255,0.18)`, texto `#fff`): Racional: elección del
  usuario; deja ver la foto de fondo y no compite con la card GEO
  destacada.

## Risks / Trade-offs

- [Mouse blanco sobre hero muy claro] → Mitigación: el hero lleva
  velo fotográfico; si el usuario lo ve lavado, se añade sombra.
