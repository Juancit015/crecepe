## Purpose

Dar al texto del hero una entrada animada desde abajo al cargar la página, escalonada por elemento, sin mover layout ni copy.

## Requirements

### Requirement: Entrada escalonada al cargar
El sistema SHALL animar badge, título, descripción, acciones y trust del hero subiendo desde abajo con fade al cargar, en ese orden y una sola vez.

#### Scenario: Carga inicial
- **WHEN** el visitante abre la página
- **THEN** cada elemento del hero sube desde abajo con fade, uno tras otro, terminando todos en su lugar

### Requirement: Sin movimiento reducido ni preload
El sistema SHALL mostrar el texto del hero fijo y visible con `prefers-reduced-motion` o mientras `.preload` esté activo.

#### Scenario: Movimiento reducido
- **WHEN** el visitante tiene movimiento reducido
- **THEN** el hero aparece directo, sin subidas ni fades
