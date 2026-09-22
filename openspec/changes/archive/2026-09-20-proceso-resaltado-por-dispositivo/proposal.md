## Why

El timeline de Proceso tiene hoy dos fuentes de resaltado conviviendo (hover y scroll-spy), y en desktop pueden encenderse dos pasos a la vez y verse como bug. Cada dispositivo debe tener una sola fuente de resaltado: hover en desktop, brillo por scroll en móvil, que es el que le gusta al usuario.

## What Changes

- En desktop (dispositivos con hover): solo el hover resalta el paso (punto + título); el scroll-spy queda desactivado.
- En móvil (sin hover): cada número brilla solo al pasar por la franja central durante el scroll, como hoy; el hover no aplica.
- `prefers-reduced-motion` sigue desactivando todo resaltado animado en ambos casos.
- Sin cambios de copy, layout, espaciados ni spec de parallax.

## Capabilities

### New Capabilities

- `proceso-resaltado`: regla de resaltado del timeline de Proceso por dispositivo (hover en desktop, spy por scroll en móvil, movimiento reducido).

### Modified Capabilities

- Ninguna: `parallax-fondos` y demás specs no cambian; solo se suma la regla por dispositivo.

## Impact

- Afecta `assets/css/styles.css` (media query por hover) y `assets/js/main.js` (activar el spy solo sin hover).
- Riesgo bajo: el spy ya existe y funciona; solo se condiciona por dispositivo. Rollback: revertir el commit.
