## Purpose

Que todas las fotos de cards cuenten más con overlays descriptivos suaves, sin barras ajenas al hover.

## Requirements

### Requirement: Overlays ampliados y barra fuera
El sistema SHALL mostrar descripciones de 2 líneas en overlays de casos, overlays descriptivos en fotos de servicios y ninguna barra superior al hover.

#### Scenario: Descripción ampliada en casos
- **WHEN** el visitante abre el cartel de un caso
- **THEN** lee 2 líneas de descripción (logro + mecanismo)

#### Scenario: Overlay en servicios
- **WHEN** el cursor entra a la foto de un servicio
- **THEN** baja el cartel descriptivo y la foto se oscurece leve, con enlaces intactos debajo

#### Scenario: Sin barra superior
- **WHEN** el visitante pasa el cursor sobre cualquier card de servicio
- **THEN** no aparece ninguna barra arriba; solo elevación y sombra
