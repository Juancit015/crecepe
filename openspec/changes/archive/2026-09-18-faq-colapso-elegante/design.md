## Context

Ver `proposal.md` para el porqué. Estado actual:
- 5 `.faq-item.faq-extra` hermanos dentro de `.faq-list`; el JS alterna `faq-hidden` (`.faq-item.faq-extra.faq-hidden { display: none; }`, línea ~1087 de `styles.css`), que no admite transición.
- El botón `.faq-more-wrap` viaja (medio ↔ final) en el handler de `main.js`.
- `html { scroll-behavior: smooth }` (línea 32) y bloque global `prefers-reduced-motion` (líneas 1567–1575) ya existen.

## Goals / Non-Goals

**Goals:**
- Expansión/colapso suaves de las extras y scroll compensado al contraer, sin salto a Contacto.

**Non-Goals:**
- No se tocan acordeón individual, etiqueta del botón, schema FAQPage ni `llms.txt`.

## Decisions

- **Decisión 1: wrapper `.faq-extra-wrap` con `grid-template-rows` animado.**
  Las 5 extras se envuelven en `.faq-extra-wrap { display: grid; grid-template-rows: 1fr; transition: grid-template-rows 0.45s ease; }` con hijo interior `overflow: hidden`; colapsado usa `0fr`. Es la técnica estándar para animar altura `auto` sin JS de medición. Se retira la regla `faq-hidden`/`display:none`. Alternativa (animar cada item con `max-height`) descartada: exige alturas fijas frágiles y 5 transiciones desincronizadas.
- **Decisión 2: compensar scroll al contraer llevando el botón a la vista.**
  Tras ocultar, `moreWrap.scrollIntoView({ block: 'nearest' })` (suave por el `scroll-behavior` global) para que el visitante permanezca en el FAQ. Alternativa (`window.scrollBy` con delta medido) descartada: más cálculo y mismo resultado; `nearest` no mueve nada si ya está visible.
- **Decisión 3: el JS sigue siendo dueño del estado colapsado.**
  El wrapper nace expandido en HTML y el JS lo colapsa al cargar (como hoy con `faq-hidden`): sin JS todo visible. Supuesto registrado: la animación de expansión inicial no aplica (nace ya colapsado con JS).

## Risks / Trade-offs

- [Riesgo] `.reveal` (IntersectionObserver) en las extras dentro del wrapper: al estar colapsado no intersectan; al revelar, el observer las marca visibles. Verificar que la animación de reveal no pelee con la del wrapper.

## Migration Plan

- Editar `index.html` (envolver 5 items), CSS (reglas wrapper, retirar `faq-hidden`) y `main.js` (toggle de clase del wrapper + `scrollIntoView` al contraer). Probar revelar/contraer, reduced-motion y sin JS. `openspec validate faq-colapso-elegante`.

## Open Questions

- Ninguna que bloquee specs o tareas.
