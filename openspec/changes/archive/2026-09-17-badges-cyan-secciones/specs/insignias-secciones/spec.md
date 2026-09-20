## Purpose

Que todos los nombres de sección del sitio luzcan el mismo borde cyan del badge Diferenciador, en modo claro y en modo oscuro.

## ADDED Requirements

### Requirement: Borde cyan en todos los badges de sección
El sistema SHALL mostrar cada `.section-badge` de la página principal con borde cyan de 1px en modo claro y en modo oscuro.

#### Scenario: Badges con borde en modo claro
- **WHEN** el visitante ve cualquier sección (Servicios, Diferenciador, Planes, Proceso, Casos reales, Opiniones, FAQ) en modo claro
- **THEN** su badge muestra el borde cyan igual que el Diferenciador

#### Scenario: Badges con borde en modo oscuro
- **WHEN** el visitante ve cualquier sección en modo oscuro
- **THEN** su badge muestra el borde cyan sobre su fondo actual

#### Scenario: Diferenciador intacto
- **WHEN** el visitante ve la sección SEO + GEO en modo claro
- **THEN** su badge conserva fondo oscuro translúcido, texto blanco y borde cyan como hasta ahora
