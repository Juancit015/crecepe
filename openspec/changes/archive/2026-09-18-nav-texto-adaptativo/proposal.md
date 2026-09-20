## Why

Al inicio (sin scroll) la navbar es transparente sobre la foto del hero y su texto azul oscuro no se nota. La propuesta: texto blanco sobre nav transparente y texto azul cuando aparece el fondo blanco con scroll, en todas las páginas con navbar.

## What Changes

Solo `assets/css/styles.css` (la clase `.scrolled` ya la pone el JS a los 40px):
- En modo claro sin scroll: marca, enlaces y hamburguesa en blanco con sombra sutil.
- Con scroll (fondo blanco): se conserva el azul actual.
- En modo oscuro: blanco siempre (el fondo scrolled ya es marino oscuro).
- Logo imagen en blanco cuando el texto es blanco (filtro `invert`, como el footer); azul con fondo blanco.
- Menú móvil abierto: respeta el fondo de su panel (blanco en claro, marino en oscuro), no el estado de scroll.
- Supuesto registrado: la transición de color usa la transición existente de la navbar.

## Capabilities

### New Capabilities

- `nav-adaptativa`: texto de la navbar blanco sobre fondo transparente y azul sobre fondo blanco con scroll, en todas las páginas.

### Modified Capabilities

- Ninguna.

## Impact

- Afectado: reglas `.navbar`/`.nav-links`/`.logo` en `styles.css`. Sin JS ni HTML (la navbar se reutiliza vía `build_pages.py`).
- El botón de tema (sol/luna) hereda el color del texto: verificar que siga visible en ambos estados.
