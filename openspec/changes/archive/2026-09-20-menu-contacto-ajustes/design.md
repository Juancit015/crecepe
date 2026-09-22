## Context

Ver `proposal.md` y los specs. Estado actual: drawer marino con links blancos y hover azul oscuro en claro (línea ~239 y override móvil ~1999); velo `.nav-backdrop` con `blur(6px)` y `z-index: 999` bajo la navbar (`z-index: 1000`), por eso el logo escapa al oscurecido; `contact-card h3` sin color (hereda texto oscuro); botón correo fantasma blanco en ambos temas.

## Goals / Non-Goals

**Goals:** cyan y oscurecido coherentes en drawer y contacto, sin tocar copy, layout ni JS del menú.
**Non-Goals:** rediseñar el drawer, cambiar el botón de WhatsApp, tocar otras cards o botones.

## Decisions

- **Velo sin blur, más oscuro (`rgba(6,13,31,0.6)`) y por encima de la navbar.** Alternativa descartada: oscurecer solo el contenido (el logo seguiría escapando, que es justo lo reportado).
- **Panel del drawer por encima del velo.** Requiere verificar el z-index/posicionamiento actual del panel (fijo dentro de la navbar sin blur por el fix previo, líneas ~1917-1929): el velo sube a 1001 y el panel debe quedar en 1002+. Si el panel no tiene z-index propio, añadirlo — único posible toque estructural, acotado en tareas.
- **Botón correo con dos estilos por tema** (sólido marino en claro, fantasma cyan en oscuro) en vez de invertir el actual: el sólido en claro da jerarquía junto al verde de WhatsApp; el fantasma cyan en oscuro mantiene aire.

## Risks / Trade-offs

- [Risk] Subir el velo sobre la navbar puede tapar el drawer si el panel no queda por encima → Mitigación: tarea de verificación con el menú abierto en ambos temas antes de cerrar.
- [Risk] El `backdrop-filter: none` + fondo más oscuro cambia la textura del velo → Mitigación: es lo pedido (efecto oscuro puro); el drawer marino ya da contraste.
