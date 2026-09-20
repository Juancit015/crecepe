## Purpose

Que las comillas de las tarjetas de Opiniones se vean siempre, también al hover en modo oscuro donde hoy desaparecen en blanco sobre blanco.

## Requirements

### Requirement: Comillas visibles al hover en modo oscuro
El sistema SHALL mostrar al hover en modo oscuro la pastilla de comillas con fondo blanco y comillas azul marino.

#### Scenario: Hover en modo oscuro
- **WHEN** el visitante pone el cursor sobre una tarjeta de Opiniones en modo oscuro
- **THEN** la pastilla se vuelve blanca con las comillas en azul marino visibles

#### Scenario: Reposo intacto en ambos temas
- **WHEN** el visitante no pone el cursor sobre la tarjeta, en claro u oscuro
- **THEN** la pastilla y las comillas conservan su apariencia actual

#### Scenario: Hover en modo claro intacto
- **WHEN** el visitante pone el cursor sobre una tarjeta en modo claro
- **THEN** la pastilla se vuelve azul marino con comillas blancas como hasta ahora
