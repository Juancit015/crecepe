## MODIFIED Requirements

### Requirement: Card de precio incrustada entre QA y FAQ en móvil

En viewports ≤992px el aside MUST mostrarse como card completa fija dentro del flujo, ubicada entre la sección de rigor ("Nos tomamos en serio tu sitio") y "Preguntas frecuentes", con badge, nombre del plan, precio con plazo, mini-lista, CTA y nota, sin sticky viajero ni posicionamiento fijo. MUST verse como una card de Planes incrustada en su sección. La zona inferior del viewport MUST quedar siempre libre y no existe ningún elemento flotante de compra.

#### Scenario: Precio en el momento caliente

- **WHEN** el visitante lee una ficha en móvil y termina la sección de rigor
- **THEN** encuentra la card completa de precio antes del FAQ, sin haberla visto flotar durante la lectura

#### Scenario: Sin flotantes de compra

- **WHEN** el visitante abre cualquier ficha en un viewport ≤992px con la caché limpia
- **THEN** no hay sticky viajero ni barra fija: la compra vive solo en su sección, como en Planes
