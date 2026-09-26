## Purpose

Que las cards de una columna respiren con aire lateral en tablet retrato y ventanas medias, sin cambiar nada en teléfono ni desktop.

## Requirements

### Requirement: Cards de una columna centradas con tope

En viewports ≤992px los grids de una columna (`cases-grid` desde 769px; `opiniones-grid`, `geo-grid`, `services-grid`, `contact-grid`, `pricing-grid` y `cases-grid` en ≤768px) y la lista de FAQ (`faq-list`, `contact-grid` con tope desde 769px) MUST centrarse con un ancho máximo (~600px, 560px en el subrango 601–768px donde 600px queda de borde a borde): las cards respiran con aire lateral en tablet retrato y ventanas medias, y ocupan el 100% en teléfono, donde el tope no aplica. `cases-grid` colapsa a 1 columna en 769–992px en vez de mantener 2 cards estiradas.

#### Scenario: iPad mini retrato con aire

- **WHEN** el visitante abre Opiniones, Diferenciador, Servicios o Contacto a 768px (capturas 17-38-00/14/20)
- **THEN** las cards se ven centradas con margen lateral, sin estirarse de borde a borde

#### Scenario: Planes, Casos y FAQ con aire

- **WHEN** el visitante abre Planes, Casos o FAQ a 768px
- **THEN** cards y filas se ven centradas con margen lateral, igual que el resto

#### Scenario: Teléfono intacto

- **WHEN** el visitante abre las mismas secciones a 360px
- **THEN** todo se ve igual que antes (el tope no aplica bajo 600px de grid)

#### Scenario: Casos apilados en ventana media

- **WHEN** el visitante abre Casos entre 769 y 992px
- **THEN** ve 1 columna centrada con tope (~600px) en vez de 2 cards estiradas de borde a borde

#### Scenario: Contacto y FAQ con aire en ventana media

- **WHEN** el visitante abre Contacto o FAQ entre 769 y 992px
- **THEN** la tarjeta y las filas se ven centradas con margen lateral, Ño a ancho completo
