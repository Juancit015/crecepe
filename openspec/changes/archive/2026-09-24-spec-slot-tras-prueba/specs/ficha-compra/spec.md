## MODIFIED Requirements

### Requirement: Card de precio tras Prueba en móvil

En viewports ≤992px el aside MUST mostrarse como card completa fija dentro del flujo, ubicada tras la sección "Prueba real" (slot `order` tras el 4º `h2`), con badge, nombre del plan, precio con plazo, mini-lista, CTA y nota, sin sticky viajero ni posicionamiento fijo. MUST verse como una card de Planes incrustada en su sección. La zona inferior del viewport MUST quedar siempre libre y no existe ningún elemento flotante de compra.

#### Scenario: Precio con contexto

- **WHEN** el visitante lee una ficha en móvil y termina "Prueba real"
- **THEN** encuentra la card completa de precio con propuesta de valor y prueba encima, sin haberla visto flotar durante la lectura

#### Scenario: Sin flotantes de compra

- **WHEN** el visitante abre cualquier ficha en un viewport ≤992px con la caché limpia
- **THEN** no hay sticky viajero ni barra fija: la compra vive solo en su sección, como en Planes
