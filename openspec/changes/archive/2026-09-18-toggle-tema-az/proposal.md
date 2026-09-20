## Why

El botón de tema está en medio de la navbar (entre hamburguesa y enlaces) como píldora circular con borde, posición incómoda y estilo que no combina con la nav adaptativa. En AZ Consulting va al final de la fila como icono simple sin círculo, heredando el color del texto.

## What Changes

- `index.html` + subpáginas: mover `.theme-toggle` al final de `.navbar-inner` (tras `.nav-links`), regenerando con `tools/build_pages.py` que reutiliza la navbar del index.
- `assets/css/styles.css`: quitar borde circular y fondo propio (icono plano con `currentColor`, hereda el blanco/azul de la nav adaptativa); conservar hover y z-index.
- Supuesto registrado: tamaño de icono 19px y posición final de fila, como AZ.

## Capabilities

### New Capabilities

- `toggle-tema`: botón de tema al final de la navbar como icono plano sin círculo, a juego con el texto.

### Modified Capabilities

- Ninguna.

## Impact

- Afectado: navbar del index, subpáginas regeneradas y reglas `.theme-toggle`.
- El icono hereda el color adaptativo (blanco arriba, azul con scroll), así que acompaña gratis a `nav-adaptativa`.
