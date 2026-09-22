## MODIFIED Requirements

### Requirement: Fondo oscurecido con logo atenuado
El sistema SHALL mostrar el velo oscuro sin blur cubriendo la página, con solo el logo atenuado y sin fondo forzado en la navbar.

#### Scenario: Apertura con todo dim
- **WHEN** el visitante abre el drawer
- **THEN** la página se oscurece, solo el logo se atenúa y la única X visible es la interna del drawer a la izquierda

## ADDED Requirements

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
