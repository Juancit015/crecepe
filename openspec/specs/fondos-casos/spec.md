## Purpose

Que cada página de caso muestre su foto con texto blanco legible, igual que las de servicios.

## Requirements

### Requirement: Foto de fondo por página de caso
El sistema SHALL mostrar en cada `.page-hero` de casos su foto con velo oscuro y texto blanco, en ambos temas.

#### Scenario: AZ Consulting con su foto
- **WHEN** el visitante abre el caso AZ Consulting en cualquier tema
- **THEN** el héroe muestra `casos-az-consulting-fondo.avif` con texto blanco legible

#### Scenario: Novedades Chávez con su foto
- **WHEN** el visitante abre el caso Novedades Chávez en cualquier tema
- **THEN** el héroe muestra `casos-novedades-chavez-fondo.avif` con texto blanco legible
