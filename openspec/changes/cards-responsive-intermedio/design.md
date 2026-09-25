## Context

Acordeón móvil: `.pricing-card .pricing-features` colapsado = `max-height: 122px` + máscara fade (`#000 55% → transparent`), reglas en el media 768 (styles.css ~2850). Items de ~37px (padding 7px ×2 + línea ~23px): 122px = 3.3 items → el 4º sale cortado. Toggle JS con clase `.is-open` (800px, sin máscara) intacto. Opiniones: `repeat(3, 1fr)` hasta 768. Ver proposal.md - Why.

## Goals / Non-Goals

- Goals: preview que parezca diseño (no error); tablet sin apretujones.
- Non-Goals: no cambiar el concepto preview→expandir; no tocar el JS del toggle; no tocar geo (sano) ni Proceso.

## Decisions

- **Calibrar el colapso a 3 items exactos (elegido):** medir la altura real de 3 `li` y fijar ese `max-height` + `margin-bottom` bajo el fade para separar el CTA. Alternativa descartada — quitar el preview (mostrar todo): alarga las cards móvil y mata el ritmo alternado de `planes-entrada`. Ño.
- **Breakpoint ~900px solo para opiniones (elegido):** el único grid de 3 col en la zona ciega. Rango 880–920 a fijar probando; 2 col si respira a 800px, si no 1 col. Alternativa descartada — `auto-fit/minmax`: impredecible con cards de distinto alto; media explícito, simple y reversible. Ño.
- **No tocar `is-open`/máscara del expandido:** probado sano.

## Risks / Trade-offs

- Si un plan suma un 5º feature corto, el colapso sigue mostrando 3 enteros: robusto por construcción.
- El breakpoint nuevo añade un media más: documentarlo junto a los existentes (992/768).
