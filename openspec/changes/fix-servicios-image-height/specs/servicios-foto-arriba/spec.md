## ADDED Requirements

### Requirement: Altura de foto igual a Casos por breakpoint
La altura de `.service-photo` MUST igualar la de `.case-preview` en cada breakpoint: 210px en desktop base, 210px en 769–1100, 156px en 481–768, 156px en móvil ≤480 y 180px en desktop de poca altura. Queda prohibido dejar alturas menores que achican las fotos de Servicios frente a las de Casos.

#### Scenario: Desktop igualado
- **WHEN** el visitante ve Servicios y Casos en desktop
- **THEN** ambas fotos miden 210px de alto

#### Scenario: Tablet y móvil igualados
- **WHEN** el visitante ve ambas secciones a ~768px y ~375px
- **THEN** las fotos de Servicios miden lo mismo que las de Casos (156px en ambos anchos)

#### Scenario: Nada más cambia
- **WHEN** el visitante recorre las cards de Servicios
- **THEN** textos, badges, checklist, botones, overlays y recorte `cover` se ven igual que antes
