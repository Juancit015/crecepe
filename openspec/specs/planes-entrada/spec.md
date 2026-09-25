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

### Requirement: Preview del acordeón sin cortes

En móvil (≤768px) el preview colapsado de `.pricing-features` MUST mostrar un número entero de items (3 completos, ninguno a la mitad) y MUST dejar aire entre el fade y el CTA, para que nunca se lea como contenido roto.

#### Scenario: Preview limpio a 650px

- **WHEN** el visitante ve una card de Planes colapsada a ~650px (captura 16-34-25)
- **THEN** los 3 items se ven enteros, sin texto medio-fade tocando el botón
