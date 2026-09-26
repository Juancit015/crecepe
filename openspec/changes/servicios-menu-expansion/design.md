## Context

Sitio ya tiene 2 patrones de acordeón probados: `.pricing-toggle` + `.is-open` (Planes móvil) y FAQ colapsable (max-height + scrollHeight). La sección Servicios hoy son cards con foto, overlay al hover, checks y link. Ver proposal.md - Why.

## Goals / Non-Goals

- Goals: menú compacto en ≤992px con expansión completa y SEO blindado.
- Non-Goals: no tocar desktop; no cambiar textos ni links de destino; no fotos en el menú (salvo decisión en contra al implementar).

## Decisions

- **Reutilizar el patrón `is-open` (elegido):** misma mecánica que Planes (clase + max-height animado), comportamiento conocido y ya validado por Google en este sitio. Alternativa descartada — `<details>/<summary>` nativo: menos control de animación y del icono +/−. Ño.
- **Una sola fila abierta a la vez (acordeón exclusivo):** menos scroll, coherente con el FAQ. Alternativa — múltiples abiertas: más libertad, más caos vertical. Se decide exclusivo.
- **h3 siempre visible + contenido en DOM:** el colapso es visual (max-height/overflow), nunca `display:none` permanente ni inyección JS: crawlers y no-JS ven todo.
- **Fotos fuera del menú (propuesto):** el ruido visual viene de miniaturas y bordes; la foto vive en la ficha destino. Si al probar se siente vacío, se re-evalúa.

## Risks / Trade-offs

- Menos impacto visual inicial que las fotos: se compensa con números grandes y tipografía (identidad editorial de la opción 5).
- `prefers-reduced-motion`: expansión instantánea, mismo patrón que el resto.
