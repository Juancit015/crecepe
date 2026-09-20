## Why

La franja estática de garantías sobre Contacto y la barra estática de especialidades bajo el hero no retienen la mirada: el usuario pidió convertirlas en barras de movimiento continuo que muestren los textos en desplazamiento ida y vuelta, con más contenido en ambas.

## What Changes

- La barra de especialidades bajo el hero (`.specialties-bar`) pasa de estática a marquesina continua con más ítems de texto.
- Las 4 garantías ("Respuesta en menos de 24 h", "50% al inicio y 50% contra entrega", "Sin costos ocultos", "Soporte post-lanzamiento 30 días") salen de la franja estática sobre `#contacto` y pasan a una marquesina continua ubicada debajo de la sección Opiniones.
- Ambas barras se desplazan y vuelven (ping-pong, sin saltos ni recortes de texto).
- Sin copy nuevo: solo se reutilizan y repiten textos que ya existen hoy.
- Con `prefers-reduced-motion`, ambas barras quedan estáticas y legibles.

## Capabilities

### New Capabilities
- `marquesinas`: sistema de barras de desplazamiento continuo (barra de especialidades del hero + barra de garantías bajo Opiniones), contenido, movimiento ping-pong y respeto a `prefers-reduced-motion`.

### Modified Capabilities
- `contacto-marcas`: la "Franja de garantías sobre contacto" deja de ser una franja estática sobre `#contacto` y pasa a ser la marquesina continua bajo Opiniones (cambia ubicación y comportamiento, no el contenido).

## Impact

- `index.html`: barra de especialidades (más ítems), eliminación del `.trust-strip` estático sobre `#contacto`, nueva barra de garantías bajo `#opiniones`.
- `assets/css/styles.css`: keyframes ping-pong, fondos legibles en ambos temas, responsive.
- Sin JavaScript (solo CSS). Orden de archivo: archivar `confianza-contacto` primero para que su delta entre al spec base antes que este change lo modifique.
