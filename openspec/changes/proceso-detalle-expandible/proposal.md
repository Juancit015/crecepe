## Why

Proceso dice el qué pero no el cuánto, el qué recibes ni el qué pones tú: el visitante no sabe duraciones, entregables ni su parte. Sumar ese detalle por paso (redactado desde la entrevista con el dueño, pendiente de su corrección final) sube conversión sin alargar la página, usando el patrón acordeón ya probado en Planes.

## What Changes

- Cada uno de los 6 pasos suma detalle expandible "Ver detalle" con Duración / Qué recibes / Qué pones tú, colapsado por defecto en móvil y visible en desktop (mismo criterio que Planes).
- Contenido redactado por el agente desde entrevista + sitio; el dueño lo corrige en apply antes de publicar.
- Sin cambios de layout, orden, animaciones ni spec de resaltado.

## Capabilities

### New Capabilities

- `proceso-detalle`: detalle expandible por paso del timeline (duración, entregable, aporte del cliente).

### Modified Capabilities

- Ninguna.

## Impact

- `index.html` (detalle por paso) y `assets/css/styles.css` + `assets/js/main.js` (acordeón reutilizado de Planes/FAQ).
- Riesgo: contenido redactado sin validación final → mitigado exigiendo corrección del dueño en tareas antes de publicar.
