## Purpose

Dar aire al timeline de Proceso en móvil con más espaciado vertical, puntos más chicos y línea más fina, sin cambiar desktop ni el contenido.

## Requirements

### Requirement: Respiración solo en móvil
El sistema SHALL mostrar el timeline con pasos más separados, puntos más chicos y línea más fina únicamente en viewports de 768px o menos.

#### Scenario: Aire en móvil 360px
- **WHEN** el visitante recorre Proceso en móvil
- **THEN** hay 52px entre pasos, puntos de 32px y línea de 1px tenue

#### Scenario: Desktop intacto
- **WHEN** el visitante recorre Proceso en desktop
- **THEN** el espaciado, puntos y línea son los actuales (34px, 38px, 2px)
