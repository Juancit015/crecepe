## Why

El drawer móvil y la card de contacto tienen detalles que rompen el acabado: el hover del drawer en claro se ve azul oscuro sobre fondo marino (poco contraste), el velo con blur no cubre la navbar con el logo, el título "Diagnóstico gratuito" no es blanco sobre el fondo oscuro y el botón de correo no diferencia temas. Ajustarlos cierra la identidad cyan/marino en ambos modos.

## What Changes

- Drawer móvil: hover de enlaces en cyan en modo claro (hoy azul oscuro); en oscuro ya es cyan.
- Velo del drawer sin blur, solo oscurecido más intenso, y cubriendo también la navbar con el logo (hoy el logo queda fuera del efecto).
- Card "Diagnóstico gratuito": título en blanco.
- Botón "Prefiero escribir un correo": azul oscuro sólido con texto blanco en modo claro; transparente con borde y texto cyan en modo oscuro.
- Sin cambios de copy, layout, ni comportamiento del menú.

## Capabilities

### New Capabilities

- `contacto-card`: título blanco de la card de diagnóstico y botón de correo por tema (azul sólido en claro, fantasma cyan en oscuro).

### Modified Capabilities

- `nav-hover`: el hover del drawer en claro pasa a cyan (antes marino).

## Impact

- Solo `assets/css/styles.css` (reglas del drawer, velo, card y botón). Sin JS ni HTML salvo que el z-index del velo lo exija (ver tareas).
- Riesgo principal: subir el z-index del velo por encima de la navbar exige que el panel del drawer quede por encima del velo; verificado en tareas.
