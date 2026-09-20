## ADDED Requirements

### Requirement: Barra de especialidades en movimiento continuo
El sistema SHALL mostrar bajo el hero una barra con las especialidades desplazándose y volviendo de forma continua, con más ítems que los 5 actuales, legible en ambos temas.

#### Scenario: Movimiento ida y vuelta
- **WHEN** el visitante mira la barra bajo el hero
- **THEN** los textos se desplazan lateralmente y vuelven sin saltos ni recortes

#### Scenario: Más contenido sin copy nuevo
- **WHEN** el visitante lee los ítems de la barra
- **THEN** ve los 5 actuales más ítems extra compuestos solo con servicios ya publicados (sin textos inventados)

#### Scenario: Movimiento reducido
- **WHEN** el visitante tiene activado `prefers-reduced-motion`
- **THEN** la barra queda estática mostrando todos los textos legibles

### Requirement: Barra de garantías bajo Opiniones en movimiento continuo
El sistema SHALL mostrar debajo de la sección Opiniones una barra con las 4 garantías desplazándose y volviendo de forma continua, en ambos temas.

#### Scenario: Ubicación bajo Opiniones
- **WHEN** el visitante termina de leer los testimonios
- **THEN** encuentra la barra de garantías entre Opiniones y la siguiente sección

#### Scenario: Movimiento ida y vuelta
- **WHEN** el visitante mira la barra de garantías
- **THEN** los 4 textos se desplazan lateralmente y vuelven sin saltos ni recortes

#### Scenario: Textos intactos
- **WHEN** el visitante lee cada garantía
- **THEN** cada texto es literalmente uno de los 4 ya publicados (no hay promesas nuevas)

#### Scenario: Movimiento reducido
- **WHEN** el visitante tiene activado `prefers-reduced-motion`
- **THEN** la barra queda estática con las 4 garantías legibles
