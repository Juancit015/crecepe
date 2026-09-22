## Why

En móvil las fotos de servicios llevan la barra-caption recién
añadida y el usuario la quiere fuera: tapa la foto y el thumb ya va
acompañado de título + lista. Además la foto queda arriba de la fila
y se ve descolgada; centrada verticalmente respira mejor. Y los
atajos ("Ver plan…", "Ver qué incluye") deben ser blancos con hover
cyan para legibilidad en ambos temas.

## What Changes

- En `max-width:768px` se retira la barra-caption de
  `.service-photo .service-overlay` (vuelve a `display:none` como
  antes); la caption de casos se conserva.
- `.service-photo` se centra verticalmente en su fila del grid
  (`align-self:center`).
- En móvil `.service-link` y `.pricing-toggle` (sección planes)
  pasan a blancos con hover cyan, en claro y oscuro. La destacada
  ya lo tiene (change anterior); se extiende a hermanas y links.
- Desktop intacto.

## Capabilities

### New Capabilities

- (none)

### Modified Capabilities

- `overlay-servicios`: sin caption en móvil (solo desktop hover +
  focus); descripciones de 2 líneas se conservan para desktop.
- `precios-estilo-casos`: toggles "Ver qué incluye" blancos con
  hover cyan en móvil, ambos temas (generaliza lo de la destacada).

## Impact

- `assets/css/styles.css` + minificado (3 ajustes en bloques
  móviles existentes).
- Sin cambios de HTML, copy, JS, SEO ni desktop.
