## Purpose

Que el título, la descripción y la ruta de las páginas de servicios se lean en blanco nítido sobre sus fotos azuladas.

## Requirements

### Requirement: Texto del héroe de servicios en blanco
El sistema SHALL mostrar migas, título y descripción del `.page-hero` en blanco con sombra, en modo claro y oscuro.

#### Scenario: Héroe legible en modo claro
- **WHEN** el visitante abre cualquier página de servicios en modo claro
- **THEN** migas, título y descripción se ven en blanco con sombra sobre la foto

#### Scenario: Héroe legible en modo oscuro
- **WHEN** el visitante abre cualquier página de servicios en modo oscuro
- **THEN** migas, título y descripción se ven en blanco con sombra sobre la foto

#### Scenario: Resaltado del título visible
- **WHEN** el visitante ve el título en cualquier tema
- **THEN** la palabra resaltada (`span`) va en cian claro distinguible del resto
