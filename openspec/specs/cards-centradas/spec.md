## Purpose

Que las cards de una columna respiren con aire lateral en tablet retrato y ventanas medias, sin cambiar nada en teléfono ni desktop.

## Requirements

### Requirement: Cards de una columna centradas con tope

En viewports ≤768px los grids de una columna (`opiniones-grid`, `geo-grid`, `services-grid`, `contact-grid`) MUST centrarse con un ancho máximo (~600px): las cards respiran con aire lateral en tablet retrato y ocupan el 100% en teléfono, donde el tope no aplica.

#### Scenario: iPad mini retrato con aire

- **WHEN** el visitante abre Opiniones, Diferenciador, Servicios o Contacto a 768px (capturas 17-38-00/14/20)
- **THEN** las cards se ven centradas con margen lateral, sin estirarse de borde a borde

#### Scenario: Teléfono intacto

- **WHEN** el visitante abre las mismas secciones a 360px
- **THEN** todo se ve igual que antes (el tope no aplica bajo 600px de grid)
