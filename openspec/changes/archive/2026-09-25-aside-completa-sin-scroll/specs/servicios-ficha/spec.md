## MODIFIED Requirements

### Requirement: Card siempre entera, sin scroll interno (supersede de "Aside sticky nunca cortado")

En desktop (>992px) la card del aside MUST verse siempre completa, sin recortes ni scroll interno. Si la altura del viewport no alcanza para el sticky (≤800px), el aside MUST pasar a estático en flujo normal, mostrando la card entera de arriba a abajo. En viewports altos el sticky funciona como siempre (`top: 88px`).

#### Scenario: Laptop 13" con card completa

- **WHEN** el visitante abre presencia a 1366×753
- **THEN** la card se ve entera en flujo, sin scroll interno ni partes ocultas

#### Scenario: Sticky intacto en viewport alto

- **WHEN** el visitante abre una ficha con altura >800px
- **THEN** el aside sigue fijo al hacer scroll, igual que antes
