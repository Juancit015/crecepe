## Why

La sección FAQ muestra las 11 preguntas de una vez y ocupa mucho espacio vertical. El botón "Ver todas las preguntas" hoy expande/contrae todas las respuestas, pero no ahorra espacio: la intención original era mostrar primero 6 preguntas y revelar las 5 restantes solo al pulsarlo (despliegue progresivo).

## What Changes

En la página principal (`index.html`, `assets/css/styles.css`, `assets/js/main.js`):
- Las 5 preguntas tras el botón quedan ocultas por defecto y se revelan al pulsar "Ver todas las preguntas"; el botón se traslada al final de la lista y alterna a "Ver menos preguntas" para ocultarlas de nuevo (volviendo a su posición entre la 6.ª y las restantes).
- Cada pregunta conserva su acordeón individual (abrir/cerrar su propia respuesta); el botón ya no abre ni cierra respuestas.
- Sin JS las 11 preguntas quedan visibles (el ocultamiento lo aplica el JS, no el CSS base).

Subpáginas con FAQ propio (`/servicios/`) quedan intactas: no tienen botón ni preguntas extra.

## Capabilities

### New Capabilities

- `faq-progresivo`: despliegue progresivo del FAQ — 6 preguntas visibles y 5 revelables con el botón, que alterna etiqueta.

### Modified Capabilities

- Ninguna (ninguna capacidad existente regula el comportamiento del botón del FAQ).

## Impact

- Afectado: bloque FAQ del `index.html` (marcado de las 5 restantes), 1–2 reglas CSS y el handler `faqToggleAll` en `main.js`.
- El schema FAQPage y `llms.txt` no cambian (las 11 preguntas siguen en el HTML).
- `tools/build_pages.py` no necesario salvo que regenere el FAQ (verificar que el marcado sobreviva a la regeneración).
