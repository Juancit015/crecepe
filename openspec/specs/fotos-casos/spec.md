## Purpose

Que las cards de casos muestren foto real con su URL encima, en vez de placeholders.

## Requirements

### Requirement: Fotos en previews de casos
El sistema SHALL mostrar foto de portada en cada `.case-preview` con la píldora de URL encima, en ambos temas.

#### Scenario: AZ con foto de equipo
- **WHEN** el visitante ve la card AZ Consulting
- **THEN** el preview muestra foto de equipo en oficina con `azconsultingperu.com` encima

#### Scenario: Chávez con foto de tienda
- **WHEN** el visitante ve la card Novedades Chávez
- **THEN** el preview muestra foto empacando pedidos online con su URL encima
