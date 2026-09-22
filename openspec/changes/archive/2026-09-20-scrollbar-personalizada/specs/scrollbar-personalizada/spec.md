## Purpose

Dar al sitio una barra de scroll global delgada y redondeada con los colores de la marca: azul en modo claro y blanca en modo oscuro, con degradación aceptable en Firefox.

## ADDED Requirements

### Requirement: Thumb de marca por tema
El sistema SHALL mostrar el thumb de la scrollbar global azul en modo claro y blanco en modo oscuro, delgado y con bordes redondeados donde el navegador lo permita.

#### Scenario: Scroll en modo claro
- **WHEN** el visitante hace scroll en modo claro en Chrome, Edge o Safari
- **THEN** el thumb se ve azul, delgado (~10px) y redondeado

#### Scenario: Scroll en modo oscuro
- **WHEN** el visitante hace scroll en modo oscuro en Chrome, Edge o Safari
- **THEN** el thumb se ve blanco, delgado (~10px) y redondeado

#### Scenario: Firefox con estilo limitado
- **WHEN** el visitante hace scroll en Firefox en cualquier tema
- **THEN** el thumb usa el color del tema (azul o blanco) en grosor fino, aunque sin bordes redondeados

### Requirement: Track sutil y hover
El sistema SHALL mostrar un track discreto que no compita con el contenido y un thumb ligeramente más intenso al hover, en ambos temas.

#### Scenario: Track e hover
- **WHEN** el visitante mira o pasa el mouse sobre la scrollbar en cualquier tema
- **THEN** el track se ve sutil y el thumb se intensifica al hover sin cambiar de color base
