## MODIFIED Requirements

### Requirement: Secciones compactas en móvil
El sistema SHALL mostrar Servicios en filas con sus 3 primeros bullets visibles, Casos podados (2° link solo desktop) y Opiniones compactas, solo en móvil.

#### Scenario: Servicios fila
- **WHEN** el visitante ve Servicios en móvil
- **THEN** cada card es una fila con foto 92px, título, descripción a 2 líneas, los 3 primeros bullets de su lista y link, sin overlay ni icono

#### Scenario: Casos podados
- **WHEN** el visitante ve Casos en móvil
- **THEN** ve foto, título, descripción a 3 líneas y un solo botón full-width, sin overlay, rol ni stack

#### Scenario: Opiniones compactas
- **WHEN** el visitante ve Opiniones en móvil
- **THEN** las cards tienen menos padding y texto reducido
