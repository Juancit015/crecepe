## Context

Ver `proposal.md`. Textos actuales: título "No basta con estar en Google. Tu negocio debe ser la respuesta de la IA" (ya a medio camino), subtítulo con "SEO/GEO + sistemas de IA", card GEO "Para que ChatGPT, Gemini y Perplexity entiendan tu negocio...". Los textos exactos los aprueba el dueño al aplicar.

## Goals / Non-Goals

**Goals:**
- Criterios + propuestas de texto con estructura antes/después, píldoras intactas.

**Non-Goals:**
- No se tocan estilos, layout, píldoras, FAQ, schema ni `llms.txt`.

## Decisions

- **Decisión 1: estructura antes → después → tu lugar.**
  Título con el cambio ("Tus clientes ya no buscan en listas: preguntan y la IA responde"); subtítulo con el beneficio ("tu negocio debe ser esa respuesta en cada proyecto"); cards: SEO = "salir en la lista de Google", GEO = "ser la respuesta que da la IA". "IA" genérica siempre.
- **Decisión 2: marcas solo en píldoras.**
  Ningún nombre propio fuera de `.geo-engines`; ahí funcionan como prueba social ("ahí te van a preguntar"), no como explicación.
- **Decisión 3: SEO/GEO como siglas de cierre, no de apertura.**
  Pueden aparecer una vez como nombre del servicio ("a eso le llamamos GEO"), nunca como argumento de venta.

## Risks / Trade-offs

- [Riesgo] Quitar "ChatGPT" del copy visible reduce coincidencia con búsquedas que lo nombran; se compensa manteniéndolo en píldoras (texto indexable), FAQ y `llms.txt`.

## Migration Plan

- El dueño aprueba textos → se editan título, subtítulo y 2 intros de card → verificar. `openspec validate geo-comportamiento`.

## Open Questions

- Textos finales los confirma el dueño al aplicar.
