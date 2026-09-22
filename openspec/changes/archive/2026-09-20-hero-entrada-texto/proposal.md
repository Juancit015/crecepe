## Why

El hero aparece de golpe al cargar: su texto principal merece una entrada con vida (subiendo desde abajo y por partes) que marque el tono premium del sitio desde el primer segundo, sin tocar copy ni layout.

## What Changes

- Al cargar, badge, título, descripción, acciones y trust del hero suben desde abajo con fade, escalonados en ese orden.
- Solo CSS con keyframes de una sola pasada; la card CEO conserva su lugar (entra última o queda fija, a definir en apply con el usuario si hace falta).
- `prefers-reduced-motion` y `.preload` respetados: sin movimiento en esos casos. Sin cambios de copy, layout ni JS.

## Capabilities

### New Capabilities

- `hero-entrada`: animación de entrada del texto del hero al cargar.

### Modified Capabilities

- Ninguna.

## Impact

- Solo `assets/css/styles.css` (~20 líneas). Sin HTML ni JS.
- Riesgo mínimo: si la animación falla, el texto queda visible como hoy (los keyframes parten del estado final).
