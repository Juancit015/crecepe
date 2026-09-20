## ADDED Requirements

### Requirement: Botones del hero estilo glass en modo claro
El sistema SHALL mostrar ambos botones del hero en modo claro con fondo translúcido oscuro, borde grisáceo de 2px, texto blanco, blur y transición spring; al hover el fondo se vuelve marino manteniendo el texto blanco, con elevación.

#### Scenario: Par de botones en modo claro
- **WHEN** el visitante ve el hero en modo claro sin cursor sobre los botones
- **THEN** Agendar y Ver servicios muestran texto blanco con contorno grisáceo sobre la foto

#### Scenario: Hover en modo claro
- **WHEN** el visitante pone el cursor sobre cualquier botón del hero en modo claro
- **THEN** el fondo se vuelve azul marino con texto blanco y el botón se eleva

### Requirement: Botón Agendar cian en modo oscuro
El sistema SHALL mostrar el botón Agendar en modo oscuro con fondo y borde cian translúcidos y texto cian; al hover el fondo se vuelve cian sólido con texto blanco.

#### Scenario: Agendar en modo oscuro
- **WHEN** el visitante ve el hero en modo oscuro sin cursor sobre Agendar
- **THEN** el botón muestra texto y contorno cian sobre la foto

#### Scenario: Hover de Agendar en modo oscuro
- **WHEN** el visitante pone el cursor sobre Agendar en modo oscuro
- **THEN** el fondo se vuelve cian sólido con texto blanco

### Requirement: Botón Ver servicios glass claro en modo oscuro
El sistema SHALL mostrar el botón Ver servicios en modo oscuro con fondo y borde blanquecinos translúcidos y texto blanco; al hover el fondo se vuelve blanco con texto marino.

#### Scenario: Ver servicios en modo oscuro
- **WHEN** el visitante ve el hero en modo oscuro sin cursor sobre Ver servicios
- **THEN** el botón muestra texto y contorno blanquecinos sobre la foto

#### Scenario: Hover de Ver servicios en modo oscuro
- **WHEN** el visitante pone el cursor sobre Ver servicios en modo oscuro
- **THEN** el fondo se vuelve blanco con texto azul marino

## REMOVED Requirements

### Requirement: Botón Ver servicios con borde marino y hover marino
**Reason**: Superado por el sistema glass completo de ambos botones (réplica AZ Consulting).
**Migration**: Ver los requisitos ADDED de botones del hero en este mismo spec.
