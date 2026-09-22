## MODIFIED Requirements

### Requirement: Lenguaje case-card sin foto
El sistema SHALL presentar las pricing-cards con la estructura visual del cuerpo de `.case-card` (etiqueta superior, título, descripción, precio, features, acciones) sin cabecera de foto, en modo claro y en modo oscuro.

#### Scenario: Coherencia visual
- **WHEN** el visitante compara las secciones de planes y casos
- **THEN** percibe el mismo lenguaje de cards (etiqueta, jerarquía, acciones)

## ADDED Requirements

### Requirement: Paleta oscura de pricing-cards
El sistema SHALL aplicar en `body.dark-mode` una paleta fija para `#planes`: hermanas en `#0F1D3A`, Tienda en `#16294F`, títulos y precios en blanco, cuerpo en `#DCE6FA`, y cyan (`--accent-light`) solo en badge popular, checks y CTAs.

#### Scenario: Jerarquía nocturna
- **WHEN** el visitante activa modo oscuro y ve los planes
- **THEN** las 3 cards son oscuras, la del medio destaca un escalón y todo el texto es legible

#### Scenario: CTAs distinguibles en oscuro
- **WHEN** el visitante ve los botones en modo oscuro
- **THEN** cada CTA se distingue de su card: hermanas en cyan tenue con hover azul, Tienda en azul con hover degradado cyan→azul
