## MODIFIED Requirements

### Requirement: Etiqueta de tier por plan
El sistema SHALL mostrar una etiqueta de tier en cada pricing-card: `Starter` en Presencia, `⭐ Más Popular` con fondo cyan en Tienda y `Enterprise` en Automatización.

#### Scenario: Etiquetas visibles
- **WHEN** el visitante ve la sección de planes
- **THEN** lee Starter, ⭐ Más Popular (cyan) y Enterprise sobre su card correspondiente

### Requirement: Card destacada del plan popular
El sistema SHALL destacar visualmente la card de Tienda (plan Más popular) sobre las otras dos, en móvil y desktop.

#### Scenario: Popular sobresale
- **WHEN** el visitante ve la sección de planes
- **THEN** la card de Tienda se distingue a simple vista con fondo azul oscuro y texto en claro

### Requirement: CTA Consultar plan con icono WhatsApp
El sistema SHALL mostrar en cada card un único CTA con texto por plan (`Consultar Presencia`, `Consultar Tienda`, `Consultar Automatización`) e icono de WhatsApp que abre el `wa.me` con prefill del plan correspondiente.

#### Scenario: CTA por plan
- **WHEN** el visitante toca el CTA en una card
- **THEN** lee el nombre de su plan en el botón y se abre WhatsApp con el mensaje pre-llenado de ese plan (Presencia S/ 500, Tienda S/ 700, Automatización S/ 900)
