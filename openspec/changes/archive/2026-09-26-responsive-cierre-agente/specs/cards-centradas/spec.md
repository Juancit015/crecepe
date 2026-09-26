## MODIFIED Requirements

### Requirement: Cards de una columna centradas con tope

En viewports ≤992px los grids de una columna MUST centrarse con un ancho máximo: ~600px en ≤768px y 769–992px (Casos, Planes, Contacto, FAQ, Servicios), 560px en el subrango 601–768px donde 600px queda de borde a borde; en teléfono (<600px) el tope no aplica y todo ocupa el 100%. Las bandas 769–1100 del agente (2 col con huérfana centrada, 3 col compactas en 993–1100) conviven sin contradecirlo: donde hay 1 columna, hay tope.

#### Scenario: iPad mini retrato con aire

- **WHEN** el visitante abre Opiniones, Diferenciador, Servicios o Contacto a 768px (capturas 17-38-00/14/20)
- **THEN** las cards se ven centradas con margen lateral, sin estirarse de borde a borde

#### Scenario: Planes, Casos y FAQ con aire

- **WHEN** el visitante abre Planes, Casos o FAQ a 768px
- **THEN** cards y filas se ven centradas con margen lateral, igual que el resto

#### Scenario: Teléfono intacto

- **WHEN** el visitante abre las mismas secciones a 360px
- **THEN** todo se ve igual que antes (el tope no aplica bajo 600px de grid)

#### Scenario: Casos y Planes apilados en ventana media

- **WHEN** el visitante abre Casos o Planes entre 769 y 992px
- **THEN** ve 1 columna centrada con tope (~600px) en vez de cards estiradas o huérfana a media card

#### Scenario: Contacto y FAQ con aire en ventana media

- **WHEN** el visitante abre Contacto o FAQ entre 769 y 992px
- **THEN** la tarjeta y las filas se ven centradas con margen lateral, Ño a ancho completo

#### Scenario: Tope vigente tras bandas del agente

- **WHEN** se inspeccionan los grids de 1 columna entre 601 y 992px
- **THEN** cada uno tiene tope centrado (560 o 600px según subrango) y ninguno estira de borde a borde
