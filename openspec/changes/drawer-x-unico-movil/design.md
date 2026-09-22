## Context

Ver `proposal.md` (Why). Estado actual: con el drawer abierto, dos X
coexisten — `.nav-toggle.open` muta a X vía `transform` en sus spans
(`styles.css:282-284`) y `.drawer-close` se muestra dentro del drawer
(`styles.css:2089-2101`). El toggle está a la derecha del header y el
drawer entra desde la derecha; la X pedida queda a la izquierda del
panel. El marcado del nav está duplicado en las 8 páginas pero el fix
vive solo en CSS/JS compartidos. Restricción: en CSS no se puede
seleccionar al hermano anterior (el toggle precede al drawer en el
DOM), así que el estado "abierto" debe exponerse vía clase global.

## Goals / Non-Goals

**Goals:**

- Una sola X visible con drawer abierto, a la izquierda, en claro y
  oscuro, sin mover el layout del header.
- Cero cambios de marcado HTML (las 8 páginas heredan el fix).

**Non-Goals:**

- Rediseñar el drawer o su animación de entrada.
- Cambiar los mecanismos de cierre existentes.

## Decisions

- **Clase `menu-open` en `body` (JS) + regla CSS que oculta el toggle.**
  Alternativas descartadas: quitar la clase `.open` del toggle (rompería
  `aria-expanded` y el estado que usa `closeMenu`); selector CSS de
  hermano (imposible hacia atrás en el DOM); `display:none` (colapsaría
  el header y movería el logo/toggle de tema — se usa `visibility`
  para conservar el espacio).
- **Ocultar el toggle completo en vez de congelar la hamburguesa.**
  Congelar las 3 líneas dejaría un botón sin función visible junto a la
  X real; ocultarlo es más limpio y el drawer ya ofrece cierre (X, velo,
  Escape, links).

## Risks / Trade-offs

- [Lector de pantalla podría enfocar un botón oculto con
  `visibility:hidden`] → Mitigación: `visibility:hidden` ya lo saca del
  orden de tabulación; `aria-expanded` se sigue actualizando en JS.
- [Parpadeo del toggle al abrir/cerrar] → Mitigación: sin transiciones
  en la regla de ocultado; el drawer cubre la zona de todos modos.
