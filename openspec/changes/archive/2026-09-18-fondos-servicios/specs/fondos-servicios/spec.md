## Purpose

Que cada página de servicios muestre su foto de fondo con texto blanco legible en ambos temas.

## ADDED Requirements

### Requirement: Foto de fondo por página de servicio
El sistema SHALL mostrar en cada `.page-hero` de servicios su foto con velo oscuro medio, en modo claro y oscuro.

#### Scenario: Presencia con su foto
- **WHEN** el visitante abre Presencia Digital en cualquier tema
- **THEN** el héroe muestra `servicios-presencia-fondo.avif` con texto blanco legible

#### Scenario: Tienda con su foto
- **WHEN** el visitante abre Tienda Online en cualquier tema
- **THEN** el héroe muestra `servicios-tienda-fondo.avif` con texto blanco legible

#### Scenario: IA con su foto
- **WHEN** el visitante abre Automatización en cualquier tema
- **THEN** el héroe muestra `servicios-ia-fondo.avif` con texto blanco legible
