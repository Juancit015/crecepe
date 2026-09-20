## Context

Ver `proposal.md` para el porqué. Estado actual:
- `index.html` líneas ~836–941: 11 `.faq-item`, botón `.faq-more#faqToggleAll` ("Ver todas las preguntas") ubicado tras la 6.ª pregunta.
- `assets/js/main.js` líneas ~217–239: el handler abre/cierra todas las `.faq-answer` y alterna la etiqueta a "Ocultar todas las preguntas".
- El acordeón individual (líneas ~193–215) abre una respuesta por vez con `maxHeight` y `aria-expanded`.

## Goals / Non-Goals

**Goals:**
- 6 visibles + 5 revelables con toggle de etiqueta; acordeón individual sin cambios; degradado sin-JS con todo visible.

**Non-Goals:**
- No se tocan schema FAQPage, `llms.txt`, estilos del botón ni FAQ de subpáginas.

## Decisions

- **Decisión 1: marcado con clase, ocultamiento solo vía JS.**
  Las 5 `.faq-item` tras el botón llevan clase `faq-extra`; al cargar, el JS les agrega `faq-hidden` (regla `.faq-item.faq-extra.faq-hidden { display: none; }`) y el botón la alterna. El CSS base NO las oculta y NO se usa atributo `hidden`: sin JS todo queda visible. (Ajuste durante implementación: el `hidden` previsto rompía el degradado sin-JS, se eliminó.) Alternativa (ocultar en CSS) descartada: sin JS el visitante perdería 5 preguntas.
- **Decisión 2: reescribir el handler `faqToggleAll` en vez de convivir con el anterior.**
  El handler actual manipula respuestas (`maxHeight`); el nuevo solo alterna visibilidad de `.faq-extra` y la etiqueta (`Ver todas las preguntas` ↔ `Ver menos preguntas`) con `aria-expanded`. Reescribir evita estados mixtos (respuestas abiertas + preguntas ocultas). El acordeón individual no se toca.
- **Decisión 3: el botón no toca respuestas.**
  Al revelar u ocultar, las respuestas abiertas conservan su estado; al ocultar, las respuestas abiertas de las 5 extras se cierran para no reaparecer abiertas. Supuesto registrado: es el comportamiento acordado con el usuario (toggle Ver menos).
- **Decisión 4: reubicar el wrapper `.faq-more-wrap` vía JS.**
  Al revelar, `appendChild` al `.faq-list` (el botón queda al final); al ocultar, `insertBefore` de la primera `.faq-extra` (vuelve al medio). Sin mover el nodo no hay forma de cambiar su posición. Alternativa (duplicar el botón arriba y abajo) descartada: dos botones duplican estado y `aria-expanded`.

## Risks / Trade-offs

- [Riesgo] `tools/build_pages.py` reutiliza bloques del index: verificar que el marcado `faq-extra`/`hidden` sobrevive a la regeneración o regenerar tras el cambio.

## Migration Plan

- Editar `index.html` (5 items), CSS (regla de oculto/transición) y `main.js` (handler). Recarga dura, probar toggle + acordeón + vista sin JS. `openspec validate faq-revelado-progresivo`.

## Open Questions

- Ninguna que bloquee specs o tareas.
