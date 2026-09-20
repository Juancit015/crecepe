## Why

Las etiquetas superiores ("Ideal si...") repiten lo que la descripción ya dice y cargan la card. El azul de Tienda se extraña como señal interactiva, pero fijo crea jerarquía. La solución: el "Ideal si..." baja a la descripción en negrita y el azul aparece solo al hover, igual para las 3.

## What Changes

`index.html` (3 cards de Planes) + `assets/css/styles.css`:
- Quitar los 3 `.pricing-badge` superiores; anteponer `<strong>Ideal si...</strong>` a cada `.pricing-desc` (textos actuales de badges, con punto).
- Base igual para las 3 (ya neutra tras `planes-iguales`); hover: borde azul `2px solid var(--accent)` + sombra y elevación para la card bajo el cursor.
- Supuesto registrado: el hover no cambia layout (el borde compensa con `box-sizing` o reserva de espacio para evitar salto de 1px).

## Capabilities

### New Capabilities

- `planes-hover`: etiquetas de uso integradas en la descripción y destaque azul solo al hover.

### Modified Capabilities

- Ninguna (extiende `planes-iguales`, ya archivada; no la reabre).

## Impact

- Afectado: 3 cards en index + reglas `.pricing-card`/`.pricing-badge`. Precios, CTAs y schema intactos.
- `.pricing-badge` quedaría sin usos: retirar sus reglas o conservarlas si se reutilizan (verificar con `rg`).
