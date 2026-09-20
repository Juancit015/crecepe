## Why

La card Tienda lleva borde azul, sombra diferencial, badge "Más pedido" y va primera en móvil: el diseño dice "este es el plan bueno" y relega Presencia a "plan básico". Pero son 3 caminos por necesidad, no 3 niveles por presupuesto. Se igualan las 3 cards y se guía por caso de uso.

## What Changes

`index.html` (sección Planes) + `assets/css/styles.css`:
- Quitar `popular` a Tienda (borde, sombra y badge pasan a neutros como las demás); quitar el `order: -1` móvil que la pone primera.
- Badge de cada card como etiqueta de uso: Presencia "Ideal si quieres que te encuentren", Tienda "Ideal si quieres vender online", Automatización "Ideal si quieres ahorrar horas". (Badge "Automatiza" se reemplaza; textos finales los aprueba el dueño.)
- Título de sección: "¿Qué necesita tu negocio hoy?" con subtítulo de precios intacto.
- De paso: corregir errata "Tienda Tu tienda virtual" (línea 596, resto de `lenguaje-cliente`).

## Capabilities

### New Capabilities

- `planes-iguales`: 3 planes con igual jerarquía visual y etiquetas por necesidad.

### Modified Capabilities

- Ninguna.

## Impact

- Afectado: sección `#planes` del index + reglas `.popular`. Precios, enlaces, features y schema intactos.
