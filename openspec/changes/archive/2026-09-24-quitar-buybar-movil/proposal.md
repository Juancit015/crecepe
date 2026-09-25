## Why

La mini-barra post-card suma complejidad (markup ×3, observers, reglas de flotantes) por un beneficio dudoso en fichas que ya tienen la card bien ubicada. Por filosofía "simple y si funciona no se toca": fuera la barra, queda solo la card fija. Menos código, menos bordes, cero choques posibles.

## What Changes

- Se elimina la `.buybar` en móvil: markup en las 3 fichas, su CSS (incluida la regla de ocultamiento del dial y el `reduce`) y el observer `buybarPostCard` en `main.js`.
- Queda solo la card completa estática en flujo (slot tras Prueba). La transición del dial vuelve a su estado anterior.
- Sin cambios en desktop, copy, JSON-LD/SEO/GA.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ficha-compra`: se retira la mini-barra post-card; la compra móvil vive solo en la card fija.

## Impact

- 3 fichas (markup), `assets/css/styles.css`, `assets/js/main.js`. Solo restar código.
- Sin impacto fuera de las fichas.
