## Why

En modo claro el botón de tema siempre se ve azul oscuro, incluso sobre la foto del hero donde debería ir blanco como el resto de la navbar. El spec `toggle-tema` ya exige color a juego y ño se cumple.

## What Changes

- En modo claro: icono blanco sin scroll (navbar transparente sobre foto) y azul oscuro con scroll (navbar con fondo blanco).
- En modo oscuro y dentro del drawer: sin cambios (ya se ven bien).
- Aplica a las 8 páginas; solo CSS.

## Capabilities

### New Capabilities
<!-- Ninguna: se corrige contra un requisito existente. -->

### Modified Capabilities
- `toggle-tema`: el escenario "Color a juego" pasa a exigirse explícito arriba/con-scroll en todas las páginas.

## Impact

- `assets/css/styles.css` (color del `.theme-toggle` según scroll en modo claro).
- Sin cambios de HTML, JS, drawer ni desktop/oscuro.
