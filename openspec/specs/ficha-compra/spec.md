# ficha-compra Specification

## Purpose

La card de compra del aside en las fichas de servicio convierte tanto como la card destacada de Planes del home porque se ve igual, y en móvil acompaña sin tapar el contenido.

## Requirements

### Requirement: Aside espejo de la card destacada

El aside de cada ficha MUST mostrar badge pill, nombre del plan (h3), precio con plazo, mini-lista de 3 entregables y CTA cyan, con el mismo radio, sombra y hover lift de `.pricing-card--featured` en desktop.

#### Scenario: Paridad visual con Planes

- **WHEN** el visitante compara el aside de una ficha con la card destacada del home
- **THEN** reconoce el mismo diseño (badge, precio, CTA) adaptado al plan de la ficha

### Requirement: Card de precio tras Prueba en móvil

En viewports ≤992px el aside MUST mostrarse como card completa fija dentro del flujo, ubicada tras la sección "Prueba real" (slot `order` tras el 4º `h2`), con badge, nombre del plan, precio con plazo, mini-lista, CTA y nota, sin sticky viajero ni posicionamiento fijo. MUST verse como una card de Planes incrustada en su sección. La zona inferior del viewport MUST quedar siempre libre y no existe ningún elemento flotante de compra.

#### Scenario: Precio con contexto

- **WHEN** el visitante lee una ficha en móvil y termina "Prueba real"
- **THEN** encuentra la card completa de precio con propuesta de valor y prueba encima, sin haberla visto flotar durante la lectura

#### Scenario: Sin flotantes de compra

- **WHEN** el visitante abre cualquier ficha en un viewport ≤992px con la caché limpia
- **THEN** no hay sticky viajero ni barra fija: la compra vive solo en su sección, como en Planes

### Requirement: Card móvil indistinguible de Planes

En viewports ≤992px la card del aside MUST replicar las proporciones de `.pricing-card--featured` del home: mismo padding, banda de precio con bordes, lista con el ritmo de `pricing-features` y CTA con igual ancho y radio. Un visitante que compare ambas MUST sentir el mismo diseño.

#### Scenario: Paridad con Planes en móvil

- **WHEN** el visitante ve la card incrustada en una ficha en móvil y luego la destacada en Planes
- **THEN** reconoce idénticas proporciones (padding, banda de precio, lista, CTA)

### Requirement: Card contenida en tablet

En viewports ≤992px la card del aside MUST tener un ancho máximo (~440px) y mostrarse centrada, con tipografía y paddings compactos que no dominen la pantalla. En móvil chico (~360px) MUST seguir viéndose proporcionada a una columna.

#### Scenario: Tablet proporcionada

- **WHEN** el visitante abre una ficha en tablet (~768px)
- **THEN** ve la card contenida y centrada, parecida en presencia a la referencia de planes de AZ, no un bloque de ancho completo
