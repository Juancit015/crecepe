## Purpose

Que el hero prometa lo que el cliente quiere (tiempo y dinero) y presente la visibilidad como el medio.

## ADDED Requirements

### Requirement: Hero enfocado en beneficios
El sistema SHALL mostrar en el hero un titular y subtítulo orientados a ahorrar tiempo y ganar dinero, con SEO/GEO/IA como mecanismo.

#### Scenario: Titular de resultado
- **WHEN** el visitante lee el H1
- **THEN** entiende que ganará tiempo y ventas, no solo visibilidad

#### Scenario: Mecanismo conservado
- **WHEN** el visitante lee el subtítulo
- **THEN** ve el beneficio primero y SEO/GEO/IA después, como el cómo

#### Scenario: Consistencia SEO
- **WHEN** un buscador o IA lee la página
- **THEN** la meta description y `llms.txt` reflejan el mismo mensaje de beneficios
