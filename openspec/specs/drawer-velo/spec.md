## Purpose

Que al abrir el drawer el fondo se oscurezca sin tapar ni bloquear el panel, con el drawer al 60% de ancho y el logo atenuado.

## Requirements

### Requirement: Panel siempre interactivo
El sistema SHALL mantener el panel del drawer por encima del velo y clicable en todo momento con el menú abierto.

#### Scenario: Abrir y usar el drawer
- **WHEN** el visitante abre el drawer móvil
- **THEN** el panel se ve nítido y todos sus links y botones responden

#### Scenario: Cerrar desde el velo
- **WHEN** el visitante toca fuera del panel con el menú abierto
- **THEN** el menú se cierra

### Requirement: Fondo oscurecido con logo atenuado
El sistema SHALL mostrar el velo oscuro sin blur cubriendo la página, con solo el logo atenuado y sin fondo forzado en la navbar.

#### Scenario: Apertura con todo dim
- **WHEN** el visitante abre el drawer
- **THEN** la página se oscurece, solo el logo se atenúa y la única X visible es la interna del drawer a la izquierda

### Requirement: Drawer al 60 por ciento
El sistema SHALL mostrar el panel con ancho 69% del viewport (con tope 390px).

#### Scenario: Ancho en móvil 360px
- **WHEN** el visitante abre el drawer en un teléfono de 360px
- **THEN** el panel mide ~248px de ancho

### Requirement: Ancla con título visible en móvil
El sistema SHALL dejar el título de la sección destino totalmente visible bajo la navbar fija al navegar desde un link del drawer en móvil.

#### Scenario: Salto desde la hamburguesa
- **WHEN** el visitante toca una sección en la hamburguesa en móvil
- **THEN** la página hace scroll a la sección y su título se ve completo, sin quedar tapado a la mitad por la navbar

### Requirement: X única a la izquierda con drawer abierto
El sistema SHALL mostrar una sola X de cierre (la interna del drawer, a la izquierda) mientras el drawer móvil esté abierto; el botón hamburguesa no debe mutar a X en ese estado.

#### Scenario: Apertura muestra una sola X
- **WHEN** el visitante abre la hamburguesa en móvil (claro u oscuro)
- **THEN** solo se ve la X de la izquierda dentro del drawer y el botón hamburguesa no muestra X

#### Scenario: Cierre restaura la hamburguesa
- **WHEN** el visitante cierra el drawer (X izquierda, velo, link, Escape o resize a desktop)
- **THEN** la hamburguesa vuelve a su estado normal de 3 líneas

#### Scenario: Hamburguesa oculta conserva layout
- **WHEN** el drawer está abierto
- **THEN** el header no se desplaza ni reordena (el botón conserva su espacio)

### Requirement: Banner de cookies detrás del drawer

Con el drawer móvil abierto, el banner de cookies MUST quedar por debajo del panel del menú y de su X de cierre: el menú siempre gana el apilado y el banner nunca lo tapa ni bloquea sus links. Con el drawer cerrado, el banner MUST seguir visible por encima del contenido, del dial de contacto y del botón volver-arriba.

#### Scenario: Abrir la hamburguesa con banner visible

- **WHEN** el visitante ve el banner de cookies en móvil y abre la hamburguesa
- **THEN** el drawer y su X se muestran completos por encima del banner, y todos los links del menú responden

#### Scenario: Banner intacto con drawer cerrado

- **WHEN** el visitante cierra el drawer en móvil
- **THEN** el banner de cookies sigue visible y sus botones Aceptar/Rechazar responden

### Requirement: Banner atenuado e inerte con drawer abierto

Con el drawer móvil abierto, el banner de cookies MUST atenuarse como el resto del fondo (efecto equivalente al velo oscuro) y MUST dejar de ser interactivo: ni Aceptar ni Rechazar ni sus enlaces responden mientras el menú esté abierto. Al cerrar el drawer, el banner MUST volver a su estado normal visible e interactivo.

#### Scenario: Abrir la hamburguesa atenúa el banner

- **WHEN** el visitante abre la hamburguesa en móvil con el banner visible
- **THEN** el banner se ve oscurecido como el fondo y sus botones no responden

#### Scenario: Cierre restaura el banner

- **WHEN** el visitante cierra el drawer
- **THEN** el banner vuelve a verse normal y Aceptar/Rechazar responden
