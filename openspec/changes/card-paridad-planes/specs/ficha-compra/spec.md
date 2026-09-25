## MODIFIED Requirements

### Requirement: Card móvil indistinguible de Planes

En viewports ≤992px la card del aside MUST replicar las proporciones de `.pricing-card--featured` del home: mismo padding, banda de precio con bordes, lista con el ritmo de `pricing-features` y CTA con igual ancho y radio. Un visitante que compare ambas MUST sentir el mismo diseño.

#### Scenario: Paridad con Planes en móvil

- **WHEN** el visitante ve la card incrustada en una ficha en móvil y luego la destacada en Planes
- **THEN** reconoce idénticas proporciones (padding, banda de precio, lista, CTA)
