## MODIFIED Requirements

### Requirement: Card siempre entera, sin scroll interno

En desktop (>992px) la card del aside MUST verse siempre completa, sin recortes ni scroll interno. Si la altura del viewport no alcanza para el sticky (<600px: card medida 493px + `top: 88px` + aire), el aside MUST pasar a estático en flujo normal, mostrando la card entera de arriba a abajo. En viewports ≥600px el sticky funciona como siempre.

#### Scenario: Laptop 13" con card completa

- **WHEN** el visitante abre presencia a 1366×753 (viewport ~640px, card medida 493px)
- **THEN** el aside sigue fijo al hacer scroll y la card se ve entera, sin scroll interno ni partes ocultas

#### Scenario: Sticky intacto en viewport alto

- **WHEN** el visitante abre una ficha con altura ≥600px
- **THEN** el aside sigue fijo al hacer scroll, igual que antes
