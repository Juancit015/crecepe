## MODIFIED Requirements

### Requirement: Hover cian en modo oscuro
El sistema SHALL mostrar los enlaces de la navbar en cian al hover en modo oscuro, arriba y con scroll, y los enlaces del drawer móvil en cian al hover en modo claro.

#### Scenario: Hover arriba en oscuro
- **WHEN** el visitante pasa el cursor sobre un enlace sin scroll en modo oscuro
- **THEN** el enlace se ve cian sobre la foto

#### Scenario: Hover con scroll en oscuro
- **WHEN** el visitante pasa el cursor con scroll en modo oscuro
- **THEN** el enlace se ve cian sobre el fondo marino

#### Scenario: Claro intacto
- **WHEN** el visitante pasa el cursor en modo claro en la navbar de escritorio
- **THEN** el hover sigue marino como hasta ahora

#### Scenario: Hover cyan en drawer en claro
- **WHEN** el visitante abre el drawer móvil en modo claro y pasa el cursor sobre un enlace
- **THEN** el enlace se ve cyan sobre el fondo marino del panel
