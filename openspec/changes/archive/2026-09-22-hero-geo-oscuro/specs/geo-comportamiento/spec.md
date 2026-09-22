## ADDED Requirements

### Requirement: Hero y GEO legibles en oscuro
El sistema SHALL mostrar el mouse de scroll del hero en blanco, las cards SEO/GEO en navy con texto claro en modo oscuro, y las píldoras de motores en estilo glass con texto blanco en modo oscuro.

#### Scenario: Mouse blanco
- **WHEN** el visitante ve el hero en cualquier tema
- **THEN** el mouse de scroll es blanco con su ruedita animada

#### Scenario: Cards navy en oscuro
- **WHEN** el visitante activa modo oscuro y ve el diferenciador
- **THEN** ambas cards son azul oscuro con títulos blancos y cuerpo claro

#### Scenario: Píldoras glass en oscuro
- **WHEN** el visitante activa modo oscuro y ve las píldoras
- **THEN** cada píldora es translúcida oscura con texto blanco legible
