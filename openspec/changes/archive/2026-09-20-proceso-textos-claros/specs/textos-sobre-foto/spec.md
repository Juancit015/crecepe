## ADDED Requirements

### Requirement: Encabezado de Proceso claro sobre foto
El sistema SHALL mostrar insignia, título y subtítulo de Proceso en cian y blanco con sombra sutil en modo claro, manteniendo el modo oscuro intacto.

#### Scenario: Header legible en claro
- **WHEN** el visitante ve "Proceso / Así trabajamos tu proyecto / Un proceso claro…" en modo claro
- **THEN** la insignia va en cian, el título en blanco (resaltado en cian) y el subtítulo en blanco, legibles sobre la foto oscura

#### Scenario: Oscuro intacto
- **WHEN** el visitante ve Proceso en modo oscuro
- **THEN** todo conserva exactamente su apariencia actual
