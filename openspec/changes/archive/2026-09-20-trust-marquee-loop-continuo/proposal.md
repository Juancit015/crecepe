## Why

Medición en vivo: la pista de la barra de garantías mide 1830px y el viewport 1366px; a mitad del loop el borde derecho queda en ~933px y deja ~433px sin contenido durante ~14s, hasta que el reinicio mete el texto de golpe. El loop perfecto que exige el spec `marquesinas` no se cumple.

## What Changes

- La pista lleva 4 grupos (2 mitades idénticas de 2 sets) en vez de 2: ~3660px, cubre viewport + medio loop de sobra y el `-50%` sigue exacto.
- Todos los ítems con su punto visible (fuera la asimetría que metía un salto de 9px por ciclo).
- `flex-shrink: 0` en los spans para anchos a prueba de todo.
- Sin cambios de copy, velocidad (~30s), pausa en hover, temas ni movimiento reducido.

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `marquesinas`: suma el requisito de cobertura de pista (solo ADDED, ningún requisito existente cambia).

## Impact

- Solo `index.html` (2 grupos extra) y `assets/css/styles.css` (puntos + shrink). Sin JS.
- Rollback: revertir el commit.
