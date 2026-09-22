## Why

Los overlays de casos y servicios no se ven nunca: en móvil el modo
compacto los tiene con `display:none` (decisión vieja que el usuario
revierte), y en PC el hover tampoco les aparece. Además los overlays
de servicios dicen muy poco (una línea) y el usuario quiere más texto
al pasar el cursor.

## What Changes

- En móvil (`max-width:768px`) el texto del overlay deja de estar
  oculto: sale del overlay y se muestra como barra-caption debajo de
  la foto (el thumb de 92px no admite párrafo encima), en casos y
  servicios, claro y oscuro.
- En PC el hover de ambos overlays debe funcionar; se audita por qué
  no baja el cartel (caché, stacking u overflow) y se corrige con el
  cambio mínimo (p. ej. transición por opacidad si el translate
  falla).
- Textos de overlay de servicios ampliados: de 1 línea a 2 líneas
  (beneficio + detalle de entrega), manteniendo copy aprobado y
  `alt` de fotos intactos.
- El layout compacto móvil (fila con thumb) no cambia salvo la
  caption añadida.

## Capabilities

### New Capabilities

- (none)

### Modified Capabilities

- `overlay-casos`: el cartel es siempre visible en móvil como
  caption bajo la foto; hover en PC garantizado.
- `overlay-servicios`: ídem + descripciones ampliadas a 2 líneas.

## Impact

- `index.html` (3 textos de overlay de servicios ampliados; casos
  conservan su texto).
- `assets/css/styles.css` + minificado (caption móvil, fix del
  hover PC, retira `display:none` de overlays en 2663/2713).
- Sin cambios de layout desktop, SEO/schema, JS ni precios.
