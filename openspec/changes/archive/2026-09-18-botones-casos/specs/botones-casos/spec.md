## Purpose

Que los dos enlaces de cada caso sean botones fáciles de pulsar en móvil sin confundirlos.

## ADDED Requirements

### Requirement: Enlaces de casos como botones
El sistema SHALL mostrar "Ver caso completo" y "Ver sitio/tienda en vivo" como 2 botones píldora separados con área táctil mínima de 44px.

#### Scenario: Botones separados en móvil
- **WHEN** el visitante ve una card de caso en móvil
- **THEN** los 2 enlaces son botones separados con espacio entre ellos, fáciles de atinar con el pulgar

#### Scenario: Destinos e iconos intactos
- **WHEN** el visitante pulsa cada botón
- **THEN** va al mismo destino de antes (subpágina del caso o sitio en vivo) con su icono correspondiente

#### Scenario: Jerarquía visual
- **WHEN** el visitante ve la card en cualquier tema
- **THEN** "Ver caso completo" destaca como primario y el enlace en vivo como secundario con borde
