## Purpose

Que el hover de la navegación se vea siempre en modo oscuro, en cian sobre fondos oscuros.

## Requirements

### Requirement: Hover cian en modo oscuro
El sistema SHALL mostrar los enlaces de la navbar en cian al hover en modo oscuro, arriba y con scroll.

#### Scenario: Hover arriba en oscuro
- **WHEN** el visitante pasa el cursor sobre un enlace sin scroll en modo oscuro
- **THEN** el enlace se ve cian sobre la foto

#### Scenario: Hover con scroll en oscuro
- **WHEN** el visitante pasa el cursor con scroll en modo oscuro
- **THEN** el enlace se ve cian sobre el fondo marino

#### Scenario: Claro intacto
- **WHEN** el visitante pasa el cursor en modo claro
- **THEN** el hover sigue marino como hasta ahora
