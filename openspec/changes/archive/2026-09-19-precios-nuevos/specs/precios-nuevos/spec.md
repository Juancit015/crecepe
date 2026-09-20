## Purpose

Que todos los precios del sitio digan lo mismo: 500, 700 y 900, en humanos y máquinas.

## ADDED Requirements

### Requirement: Precios nuevos consistentes
El sistema SHALL mostrar S/ 500 (Presencia), S/ 700 (Tienda) y S/ 900 (Automatización) en cada punto donde había precio, visible o estructurado.

#### Scenario: Cards y asides
- **WHEN** el visitante ve precios en cards, asides o relacionados
- **THEN** lee 500, 700 o 900 según el plan

#### Scenario: Textos y metadatos
- **WHEN** el visitante lee FAQs, titles o comparte un link
- **THEN** los precios citados son los nuevos

#### Scenario: Máquinas sincronizadas
- **WHEN** un buscador lee el schema o una IA lee `llms.txt`
- **THEN** encuentra 500/700/900 (incluidos `price`, `priceRange` y prefills de WhatsApp)
