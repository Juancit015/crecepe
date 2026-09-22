## Context

Ver `proposal.md` (Why). Estado: overlays con `translateY(-101%)` que
se revela en hover/focus y en `@media (hover:none)`; pero el bloque
compacto `max-width:768px` los apaga con `display:none`
(`styles.css:2663` casos, `2713` servicios). En móvil la foto es thumb
de 92-118px: el párrafo no cabe encima (decisión del usuario:
caption debajo). En PC el hover debería funcionar — hipótesis: caché
vieja en el file:// del usuario o stacking; se verifica en vivo.

## Goals / Non-Goals

**Goals:**

- Texto de overlay legible sin interacción en móvil (caption),
  hover funcional en PC, 2 líneas en servicios.
- Reutilizar el `<p>` existente del overlay como fuente del caption
  (sin duplicar copy en el HTML).

**Non-Goals:**

- Cambiar el layout compacto móvil ni el diseño desktop.
- Nuevas imágenes o cambios de copy fuera de los 3 overlays de
  servicios.

## Decisions

- **Caption con el mismo `<p>` reposicionado en móvil** (en vez de
  duplicar texto): en `max-width:768px` el overlay pasa a
  `position:static`, sin fondo oscuro ni translate, texto en
  `--text-light` bajo la foto. Racional: una sola fuente de verdad,
  cero riesgo de divergencia, sin JS.
- **Auditar hover PC antes de reescribir**: primero recarga limpia
  (`?v=3` ya fuerza CSS nuevo); si el translate sigue sin bajar,
  cambiar a transición de opacidad. Racional: no reescribir lo que
  quizá solo era caché.
- **2 líneas = beneficio + detalle de entrega**, en el tono de los
  `service-overlay` actuales (p. ej. Presencia: "Tu primera web
  profesional visible en Google. Entrega en 2-3 semanas.").
  Racional: el usuario pidió "un poco más", no párrafos.

## Desviación registrada en implementación

- La caption NO pudo ser `position:static bajo la foto`: ambos
  contenedores (`.case-preview`, `.service-photo`) usan
  `overflow:hidden` con alto fijo en móvil y recortarían el texto.
  Se implementó como **barra-caption absoluta al pie de la foto**
  (gradiente inferior, 2-3 líneas con clamp), que cumple lo mismo:
  siempre visible, mismo `<p>`, sin cambiar el layout.

## Risks / Trade-offs

- [La caption alarga las cards móviles] → Mitigación: 2 líneas
  máximo con clamp; el compacto ya limita descripciones a 3 líneas.
- [El hover PC podría seguir fallando por stacking del reveal] →
  Mitigación: la tarea incluye prueba con hover real; fallback a
  opacidad.
