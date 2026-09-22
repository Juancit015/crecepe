## Why

En móvil la página es demasiado vertical: Planes muestra 7 beneficios por card, Servicios 3 cards grandes y Casos mucho texto antes del CTA. La copia de experimento "FASE 1 — UX Móvil" ya resolvió esto (acordeón en Planes, filas compactas en Servicios, Casos podados) y el usuario la aprobó como perfecta. Se porta sin la barra CTA fija.

## What Changes

- Planes: botón "Ver qué incluye" que expande la lista (acordeón), cards compactas y descripciones a 2 líneas, solo en móvil; desktop intacto con listas siempre visibles. Copy del principal intacto.
- Servicios: cards compactas tipo fila (foto 92px, sin overlay/icono/lista) solo en móvil.
- Casos: 2° link solo desktop, sin overlay/rol/stack en móvil, descripción a 3 líneas, links full-width.
- Opiniones: compactadas en móvil.
- Excluido a pedido: barra CTA fija inferior (ni dial oculto ni padding de body).

## Capabilities

### New Capabilities

- `ux-movil-compacto`: compactación móvil de Servicios, Planes (con acordeón), Casos y Opiniones.

### Modified Capabilities

- Ninguna.

## Impact

- `index.html` (3 botones + ids en listas + 2 clases en links de casos), `assets/css/styles.css` (bloque móvil), `assets/js/main.js` (lógica acordeón).
- Riesgo bajo: réplica de código ya probado en la copia; se excluyen a propósito parallax-kill, hero podado y CTA fija.
