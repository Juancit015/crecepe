## Purpose

Que al abrir el drawer el fondo se oscurezca sin tapar ni bloquear el panel, con el drawer al 60% de ancho y el logo atenuado.

## ADDED Requirements

### Requirement: Panel siempre interactivo
El sistema SHALL mantener el panel del drawer por encima del velo y clicable en todo momento con el menú abierto.

#### Scenario: Abrir y usar el drawer
- **WHEN** el visitante abre el drawer móvil
- **THEN** el panel se ve nítido y todos sus links y botones responden

#### Scenario: Cerrar desde el velo
- **WHEN** el visitante toca fuera del panel con el menú abierto
- **THEN** el menú se cierra

### Requirement: Fondo oscurecido con logo atenuado
El sistema SHALL mostrar el velo oscuro sin blur cubriendo página y navbar, con logo y hamburguesa atenuados pero la hamburguesa aún funcional.

#### Scenario: Apertura con todo dim
- **WHEN** el visitante abre el drawer
- **THEN** página y navbar se oscurecen, el logo se atenúa y la hamburguesa sigue cerrando el menú

### Requirement: Drawer al 60 por ciento
El sistema SHALL mostrar el panel con ancho 60% del viewport (con tope 340px).

#### Scenario: Ancho en móvil 360px
- **WHEN** el visitante abre el drawer en un teléfono de 360px
- **THEN** el panel mide ~216px de ancho
