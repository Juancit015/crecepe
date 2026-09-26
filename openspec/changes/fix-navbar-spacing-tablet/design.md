## Context

Ver `proposal.md` (Why). Regla actual en `assets/css/styles.css:3151-3157` (banda 769–1100): `.nav-links { gap: clamp(8px, 1vw, 14px); }` + CTA con padding lateral 12px. Base: gap 28px (l.218), enlaces 0.95rem (l.224), CTA padding 22px (l.252), logo 40px (l.211). Drawer solo ≤768 (l.2309): la banda siempre muestra nav horizontal completa.

## Goals / Non-Goals

**Goals:**

- Aire real a 960px (~19px entre items) sin overflow ni wrap.
- Desktop y drawer pixel-igual.

**Non-Goals:**

- Quitar/ocultar enlaces, cambiar el breakpoint del drawer, tocar textos o el CTA.

## Decisions

- **Gap `clamp(14px, 2vw, 22px)` + compensaciones, Ño solo gap.** Subir el gap sin compensar desborda a 960px (logo ~150 + 7 enlaces ~490 + CTA ~150 + toggle ~40 ya van justos); por eso se reducen fuente (0.95→0.88rem), CTA (12→10px laterales) y logo (40→34px) dentro de la banda. Alternativa descartada: ocultar un enlace — cambia navegación, fuera de alcance.
- **Todo dentro de la query 769–1100 existente.** Ño se crean breakpoints; fuera de la banda Ño cambia nada por construcción.
- **CTA legible.** El padding 10px lateral con fuente heredada mantiene el botón usable (Ño es CTA móvil: el min-height 44px del base se conserva).

## Risks / Trade-offs

- [Riesgo] A 769px el mínimo 14px + reducciones aún desborda → Mitigación: captura a 800px incluida en tasks; si desborda, bajar el mínimo a 12px o la fuente a 0.85rem.
- [Riesgo] Logo a 34px pierde presencia → Mitigación: solo 6px menos y solo en la banda; captura lo confirma.
- [Riesgo] `?v=` stale → Mitigación: tarea de cierre lo exige con verificación.

## Migration Plan

Ño aplica (sitio estático). Orden: gap + compensaciones → captures 960/800 claro → minificado + `?v=` → commit + push. Rollback: `git revert`.

## Open Questions

Ninguna: valores calculados del presupuesto de ancho, técnica definida, criterios por captura.
