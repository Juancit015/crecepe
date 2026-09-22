## Purpose

Unificar las cards de precios con el lenguaje visual de las cards de casos para coherencia y decisión rápida de plan.

## ADDED Requirements

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

### Requirement: Lenguaje case-card sin foto
El sistema SHALL presentar las pricing-cards con la estructura visual del cuerpo de `.case-card` (etiqueta superior, título, descripción, precio, features, acciones) sin cabecera de foto, en modo claro y en modo oscuro.

#### Scenario: Coherencia visual
- **WHEN** el visitante compara las secciones de planes y casos
- **THEN** percibe el mismo lenguaje de cards (etiqueta, jerarquía, acciones)

### Requirement: Paleta oscura de pricing-cards
El sistema SHALL aplicar en `body.dark-mode` una paleta fija para `#planes`: hermanas en `#0F1D3A`, Tienda en `#16294F`, títulos y precios en blanco, cuerpo en `#DCE6FA`, y cyan (`--accent-light`) solo en badge popular, checks y CTAs.

#### Scenario: Jerarquía nocturna
- **WHEN** el visitante activa modo oscuro y ve los planes
- **THEN** las 3 cards son oscuras, la del medio destaca un escalón y todo el texto es legible

#### Scenario: CTAs distinguibles en oscuro
- **WHEN** el visitante ve los botones en modo oscuro
- **THEN** cada CTA se distingue de su card: hermanas en cyan tenue con hover azul, Tienda en azul con hover cyan sólido
