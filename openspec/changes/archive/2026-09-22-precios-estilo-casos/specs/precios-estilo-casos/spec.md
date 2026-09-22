## Purpose

Unificar las cards de precios con el lenguaje visual de las cards de casos para coherencia y decisión rápida de plan.

## ADDED Requirements

### Requirement: Etiqueta de tier por plan
El sistema SHALL mostrar una etiqueta de tier en cada pricing-card: `Starter` en Presencia, `Más popular` en Tienda y `Enterprise` en Automatización.

#### Scenario: Etiquetas visibles
- **WHEN** el visitante ve la sección de planes
- **THEN** lee Starter, Más popular y Enterprise sobre su card correspondiente

### Requirement: Card destacada del plan popular
El sistema SHALL destacar visualmente la card de Tienda (plan Más popular) sobre las otras dos, en móvil y desktop.

#### Scenario: Popular sobresale
- **WHEN** el visitante ve la sección de planes
- **THEN** la card de Tienda se distingue a simple vista (borde, elevación o escala)

### Requirement: CTA Consultar plan con icono WhatsApp
El sistema SHALL mostrar en cada card un único CTA con texto `Consultar plan` e icono de WhatsApp que abre el `wa.me` con prefill del plan correspondiente.

#### Scenario: CTA por plan
- **WHEN** el visitante toca Consultar plan en una card
- **THEN** se abre WhatsApp con el mensaje pre-llenado de ese plan (Presencia S/ 500, Tienda S/ 700, Automatización S/ 900)

### Requirement: Lenguaje case-card sin foto
El sistema SHALL presentar las pricing-cards con la estructura visual del cuerpo de `.case-card` (etiqueta superior, título, descripción, precio, features, acciones) sin cabecera de foto.

#### Scenario: Coherencia visual
- **WHEN** el visitante compara las secciones de planes y casos
- **THEN** percibe el mismo lenguaje de cards (etiqueta, jerarquía, acciones)
