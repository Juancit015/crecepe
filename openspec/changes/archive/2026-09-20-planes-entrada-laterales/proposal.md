## Why

Las 3 cards de Planes entran todas igual (fade + subida leve del reveal genérico) y se pierde la oportunidad de guiar el ojo: la del centro es la protagonista en desktop y en móvil las cards entran en bloque. Direcciones de entrada distintas por card dan jerarquía y ritmo sin cambiar contenido ni layout.

## What Changes

- Desktop: la card central sube desde abajo y las laterales salen desde la central hacia su lugar (izquierda desde la derecha y viceversa), con leve escalonado.
- Móvil: entrada alternada por lado (derecha, izquierda, derecha) al aparecer cada card.
- Reutiliza el observer de reveal existente (clase `.visible`); sin JS nuevo.
- `prefers-reduced-motion` intacto (todo aparece directo, como hoy). Sin cambios de copy ni layout.

## Capabilities

### New Capabilities

- `planes-entrada`: direcciones de entrada de las cards de Planes en desktop y móvil.

### Modified Capabilities

- Ninguna.

## Impact

- Solo `assets/css/styles.css` (transforms por `nth-child` + delays). Sin HTML ni JS.
- Riesgo mínimo: si un selector falla, cae al reveal genérico actual.
