## Why

Al abrir el drawer, el velo lo oscurece a él también y la página queda totalmente oscura e inoperable. Causa: el panel vive dentro de la navbar (`fixed` + `z-index: 1000`, un contexto de apilado), así que ningún z-index lo pone sobre el velo. Además el drawer ocupa 82vw y se siente muy ancho; debe quedar en 60%.

## What Changes

- Velo de vuelta debajo de la navbar (`z-index: 999`), sin blur y oscuro como ya le gusta al usuario.
- Panel de vuelta a su `z-index` original (el 1002 nunca pudo funcionar dentro del contexto de la navbar).
- Logo y hamburguesa se atenúan con `opacity` cuando el drawer abre (son hojas sin descendientes fijos: seguro, y la hamburguesa sigue cerrando el menú).
- Ancho del drawer: `min(60vw, 340px)`.
- Sin cambios de copy, JS, temas ni comportamiento de cierre.

## Capabilities

### New Capabilities

- `drawer-velo`: velo oscuro sin blur bajo la navbar, logo/hamburguesa atenuados al abrir, panel siempre interactivo y ancho 60%.

### Modified Capabilities

- Ninguna.

## Impact

- Solo `assets/css/styles.css`. Sin HTML ni JS.
- Riesgo: el que ya mordió (stacking contexts) — mitigado verificando que `opacity` solo va en hojas (logo, toggle) y el panel queda intacto.
