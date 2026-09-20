## Why

La navbar móvil muestra 3 elementos (logo + tema + hamburguesa) y el menú solo trae links. Al estilo AZ Consulting, todo lo existente debe vivir dentro de la hamburguesa para una barra limpia de 2 elementos, sin agregar redes sociales.

## What Changes

- Mover el toggle de tema dentro del panel del menú móvil, junto a los 7 links y el CTA (sin iconos sociales nuevos).
- Hamburguesa a la izquierda del logo en móvil, como AZ (solo móvil; desktop intacto).
- El panel agrupa links + CTA + tema; la animación a X y los colores por tema/scroll se conservan.

## Capabilities

### New Capabilities
<!-- Ninguna: se ajusta el comportamiento de un spec existente. -->

### Modified Capabilities
- `nav-adaptativa`: el menú móvil agrupa links, CTA y tema dentro del panel estilo AZ, sin redes.

## Impact

- `index.html` (reordenar navbar: toggle primero, tema dentro de `#navLinks`).
- `assets/css/styles.css` + JS del menú (posición izquierda, fila del tema en el panel).
- Sin cambios de links, destinos, colores ni desktop.
