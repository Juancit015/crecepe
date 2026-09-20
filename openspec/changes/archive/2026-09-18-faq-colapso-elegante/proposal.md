## Why

El revelado progresivo del FAQ funciona pero con dos defectos visibles:
1. Al pulsar "Ver menos preguntas" la página salta a la sección Contacto ("¿Listo para hacer crecer tu negocio?") en vez de quedarse en el FAQ. Causa: el colapso elimina de golpe la altura de 5 preguntas mientras el viewport está abajo; el navegador recorta el scroll y el visitante aterriza más abajo.
2. Mostrar/ocultar usa `display: none` (`faq-hidden`), sin transición: aparición y cierre bruscos.

## What Changes

En la página principal (`index.html`, `assets/css/styles.css`, `assets/js/main.js`):
- Envolver las 5 `.faq-extra` en un contenedor `.faq-extra-wrap` animado con `grid-template-rows` (`0fr` ↔ `1fr`), con `prefers-reduced-motion` respetado por el bloque global existente.
- Al contraer, compensar el scroll para que el botón "Ver todas las preguntas" quede a la vista en su posición del medio (sin salto a Contacto); al revelar, comportamiento actual (botón viaja al final).
- Sin JS todo queda visible como hasta ahora (el colapso lo sigue aplicando el JS).

## Capabilities

### New Capabilities

- `faq-colapso`: colapso/expansión animado del FAQ extra con scroll compensado al contraer.

### Modified Capabilities

- Ninguna (ninguna capacidad existente regula animación ni scroll del FAQ).

## Impact

- Afectado: bloque FAQ del `index.html` (wrapper), CSS (reglas del wrapper, se retira `faq-hidden`) y handler `faqToggleAll` en `main.js`.
- Schema FAQPage y `llms.txt` intactos (mismas 11 preguntas en el HTML).
