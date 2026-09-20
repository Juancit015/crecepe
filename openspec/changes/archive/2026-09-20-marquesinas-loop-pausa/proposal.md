## Why

El ping-pong ida y vuelta no convence: la segunda barra quedó sin velocidad ni rumbo definidos, ambas se sienten rápidas en su punto máximo y el ir-volver se ve como que "se paran". El usuario pide loop continuo en una sola dirección, un poco más lento, con pausa al pasar el mouse.

## What Changes

- Ambas barras pasan de ping-pong (`alternate`) a loop infinito en una sola dirección (de derecha a izquierda), sin detenerse nunca.
- Velocidad explícita por barra y un poco más lenta que el máximo actual: especialidades ~40s por ciclo, garantías ~30s por ciclo.
- Al pasar el mouse sobre una barra, esa barra se pausa; al retirarlo, continúa desde donde quedó.
- Se agrega el ítem "Soluciones Digitales" a la barra de especialidades (texto que ya existe en la sección Servicios, sin copy nuevo).
- `prefers-reduced-motion` sigue dejando ambas barras estáticas y legibles.

## Capabilities

### New Capabilities
- (none)

### Modified Capabilities
- `marquesinas`: cambia el modelo de movimiento de ping-pong a loop continuo unidireccional con velocidad definida por barra, pausa en hover e ítem extra en especialidades.

## Impact

- `index.html`: solo se agrega el span "Soluciones Digitales" (en ambos grupos de la pista).
- `assets/css/styles.css`: keyframes de loop, duraciones, `animation-play-state` en hover.
- Sin JavaScript. Orden de archivo: archivar `marquesinas-confianza-servicios` primero para que su spec base exista antes que este delta la modifique.
