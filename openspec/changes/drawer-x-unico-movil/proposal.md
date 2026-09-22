## Why

En móvil, al abrir la hamburguesa aparecen **dos botones X**: el de la
izquierda (`.drawer-close`, dentro del drawer) y el de la derecha
(`.nav-toggle` que muta de hamburguesa a X). Dos controles idénticos
para la misma acción confunden y rompen la simetría visual del header.
Debe quedar solo el de la izquierda.

## What Changes

- Con el drawer abierto en móvil, `.nav-toggle` deja de mostrar la X
  (queda oculto visualmente, conservando su espacio en el layout para
  no mover el header).
- La única X visible es `.drawer-close` a la izquierda del drawer.
- Al cerrar el drawer, la hamburguesa reaparece en su estado normal.
- Sin cambios en desktop, en `prefers-reduced-motion` ni en los
  mecanismos de cierre existentes (velo, Escape, link, resize).

## Capabilities

### New Capabilities

- (none)

### Modified Capabilities

- `drawer-velo`: el estado "drawer abierto en móvil" ahora requiere una
  única X visible (la interna del drawer, a la izquierda); el botón
  hamburguesa no debe mutar a X mientras el drawer esté abierto.

## Impact

- `assets/css/styles.css` (reglas `@media (max-width: 768px)` del
  drawer/toggle) + `assets/css/styles.min.css` regenerado.
- `assets/js/main.js` (señal de estado abierto para el CSS, p. ej.
  clase en `body`).
- `index.html` y las 7 subpáginas no cambian de marcado (el nav está
  duplicado pero el fix es solo CSS/JS compartidos).
- Sin impacto SEO (cero cambios de contenido) ni en PageSpeed
  (2 reglas CSS + 1 toggle de clase).
