## Purpose

Dar a las 3 cards de Planes entradas direccionales que marquen jerarquía en desktop y ritmo alternado en móvil, sobre el reveal existente.

## Requirements

### Requirement: Entrada jerárquica en desktop
El sistema SHALL animar en desktop la card central subiendo desde abajo y las laterales saliendo desde la central hacia su posición, con leve escalonado entre ellas.

#### Scenario: Cards entran al hacer scroll
- **WHEN** la sección Planes entra al viewport en desktop
- **THEN** la central sube desde abajo y las laterales llegan desde el centro a sus lados, terminando todas en su lugar

### Requirement: Entrada alternada en móvil
El sistema SHALL animar en móvil cada card entrando desde lados alternos (derecha, izquierda, derecha) al aparecer.

#### Scenario: Alternancia al bajar
- **WHEN** el visitante baja por Planes en móvil
- **THEN** la 1° entra desde la derecha, la 2° desde la izquierda y la 3° desde la derecha

### Requirement: Movimiento reducido sin direcciones
El sistema SHALL mostrar las cards directamente visibles sin animación direccional con `prefers-reduced-motion`.

#### Scenario: Sin movimiento
- **WHEN** el visitante tiene movimiento reducido
- **THEN** las 3 cards aparecen fijas, sin desplazamientos
