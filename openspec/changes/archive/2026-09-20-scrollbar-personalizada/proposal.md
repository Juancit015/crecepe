## Why

El scroll del sitio usa la barra nativa del navegador, que desentona con la identidad azul de CrecePE. Una scrollbar delgada y redondeada como la de referencia, azul en modo claro y blanca en modo oscuro, cierra el acabado visual sin tocar layout ni contenido.

## What Changes

- Scrollbar global delgada (~10px) con thumb redondeado, estilo a la referencia.
- Modo claro: thumb azul de la marca; modo oscuro: thumb blanco.
- Track sutil que no compite con el contenido, en ambos temas.
- Soporte Chrome/Edge/Safari (`::-webkit-scrollbar`) y Firefox (`scrollbar-width` + `scrollbar-color`).
- Sin cambios de layout, copy, ni comportamiento de scroll.

## Capabilities

### New Capabilities

- `scrollbar-personalizada`: apariencia de la barra de scroll global en ambos temas (grosor, thumb, track, hover, compatibilidad).

### Modified Capabilities

- Ninguna: no existe spec de scrollbar y ningún requisito actual cambia.

## Impact

- Solo `assets/css/styles.css` (unas 20 líneas). Sin JS, sin dependencias.
- Riesgo mínimo: Firefox limita el estilo a colores y grosor (sin border-radius); degradación aceptada y registrada en el spec.
