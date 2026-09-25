## Purpose

Que los medios de pago aceptados se reconozcan al instante con su logo oficial, sin perder la señal textual para SEO/GEO.

## Requirements

### Requirement: Badges de pago con logo oficial

El sitio MUST mostrar los medios aceptados (Yape, Plin, transferencia bancaria) con su logo oficial en el footer, la sección Planes y la banda de condiciones. Cada logo MUST llevar `alt` descriptivo y dimensiones fijas (cero CLS), servirse local en AVIF optimizado (los 3 juntos < 25 KB) y verse nítido en tema claro y oscuro. La mención textual "Yape, Plin o transferencia" MUST conservarse en el footer para GEO.

#### Scenario: Footer con logos

- **WHEN** el visitante llega al footer en móvil o desktop, en claro u oscuro
- **THEN** ve los 3 logos nítidos con su nombre en texto cercano, sin saltos de layout

#### Scenario: Logos junto a precios y condiciones

- **WHEN** el visitante lee Planes o la banda de condiciones
- **THEN** los logos acompañan la información de pago sin romper el ritmo visual
