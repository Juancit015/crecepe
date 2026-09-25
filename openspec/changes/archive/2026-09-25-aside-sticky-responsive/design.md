## Context

`.svc-aside` hoy: `position: sticky; top: 110px`, sin altura máxima ni overflow (styles.css ~2547). Contenido: badge + h3 + precio + semanas + mini-lista ×3 + CTA + nota ≈ 620px. Navbar real ≈ 72px (60px con scroll). Ver proposal.md - Why.

## Goals / Non-Goals

- Goals: card completa siempre en desktop; scroll interno solo cuando falte altura.
- Non-Goals: no cambiar el diseño de la card; no tocar el comportamiento móvil (estática en flujo); no JS.

## Decisions

- **`max-height: calc(100vh - top - 24px)` + `overflow-y: auto` (elegido):** remedio estándar del sticky-alto; el scroll aparece solo cuando hace falta. Alternativa descartada — quitar el sticky bajo 1200px: cambia el diseño desktop por un caso borde. Ño.
- **Bajar `top` de 110px a ~88-92px:** 110 es herencia sin fundamento; la navbar mide ~72px. Cada píxel cuenta a 640px de viewport. Valor exacto a medir contra la navbar con y sin scroll en la implementación.
- **`overscroll-behavior: contain`:** evita que la rueda "atrapada" sobre la card bloquee la página; sin JS.
- **`scrollbar-width: thin`:** coherente con `scrollbar-personalizada`, sin scrollbars gruesas dentro de la card.

## Risks / Trade-offs

- En viewports <600px de alto con la card completa, el scroll interno será el modo normal: aceptable y preferible al corte.
- `border-radius` + `overflow` recorta el hover `translateY(-8px)`: efecto visual intacto, sin riesgo funcional.
