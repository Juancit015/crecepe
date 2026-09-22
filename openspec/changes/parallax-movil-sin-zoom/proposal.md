## Why

En móvil, los fondos con parallax (Diferenciador, Opiniones y previsiblemente Proceso y page-heros) pegan un "zoom" de golpe al hacer scroll y se reacomodan al soltar: es el bug clásico de `background-attachment: fixed` en navegadores táctiles, que viola lo prometido por el spec actual ("sin tirones perceptibles" en móvil).

## What Changes

- En dispositivos táctiles, los fondos con parallax hacen scroll normal con el contenido (sin imagen fija, sin zoom).
- Desktop intacto: el reveal con imagen fija sigue igual.
- Sin cambios de imágenes, velos, temas, markup ni JS (salvo que el diseño requiera retirar el respaldo iOS si queda obsoleto).

## Capabilities

### New Capabilities

- (ninguna)

### Modified Capabilities

- `parallax-fondos`: el reveal con imagen fija pasa a ser solo-desktop; en táctil los fondos hacen scroll normal sin zoom ni tirones.

## Impact

- `assets/css/styles.css` (media query táctil para `.parallax-fondo` y fondos inline con `fixed`).
- Posible ajuste menor en `assets/js/main.js` si el respaldo iOS interfiere (a definir en design).
- Sin impacto en SEO, schema ni contenido.
