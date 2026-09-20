## Context

- `.case-actions` es flex con `flex-wrap: wrap` y `gap: 10px`; dos `.case-link` por card (`assets/css/styles.css:1045`, `index.html:753`).
- `.case-link` tiene `gap: 8px` entre texto e icono y la transición incluye `gap 0.3s`; el hover lo sube a `13px` (`styles.css:1053-1068`).
- En desktop los dos botones caben justos: al crecer el `gap` del primero en hover, el ancho total supera la fila y el segundo hace wrap abajo (efecto columna).

## Goals / Non-Goals

**Goals:**
- Hover sin salto de línea en desktop: el ancho de los botones no cambia al hover.
- Conservar un efecto visible (elevación `translateY(-2px)`).
- No tocar HTML ni enlaces; solo CSS.

**Non-Goals:**
- Rediseñar botones ni cambiar colores, tamaños o textos.
- Tocar móvil: el wrap en pantallas angostas se queda como está.

## Decisions

- **Quitar `gap: 13px` del hover** (dejar `gap: 8px` fijo): el `gap` animado es la causa directa del ensanchamiento. Alternativa (mover el icono con `margin-left`) se descarta por innecesaria: la elevación ya da feedback suficiente.
- **Sacar `gap` de la lista de `transition`**: evita futuras animaciones de ancho en ese selector.
- **Opcional de refuerzo**: si tras quitar el `gap` aún roza el wrap en algún ancho, agregar `flex-wrap: nowrap` a `.case-actions` solo en desktop (media query). Primero probar sin esto; aplicarlo solo si el hover verificado aún salta.

## Risks / Trade-offs

- Riesgo bajo: el hover pierde el micro-movimiento del icono; se conserva la elevación, suficiente y consistente con otros botones del sitio.
- Si se usa el `nowrap` de refuerzo en desktop, en ventanas muy angostas de escritorio los botones podrían desbordar: mitigado al limitarlo a `@media (min-width: 1024px)` o similar, dejando el wrap en móvil.
