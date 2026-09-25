# ficha-compra Specification

## Purpose

La card de compra del aside en las fichas de servicio convierte tanto como la card destacada de Planes del home porque se ve igual, y en móvil acompaña sin tapar el contenido.

## Requirements

### Requirement: Aside espejo de la card destacada

El aside de cada ficha MUST mostrar badge pill, nombre del plan (h3), precio con plazo, mini-lista de 3 entregables y CTA cyan, con el mismo radio, sombra y hover lift de `.pricing-card--featured` en desktop.

#### Scenario: Paridad visual con Planes

- **WHEN** el visitante compara el aside de una ficha con la card destacada del home
- **THEN** reconoce el mismo diseño (badge, precio, CTA) adaptado al plan de la ficha

### Requirement: Compra móvil sticky en flujo (reemplaza mini-barra fija)

En viewports ≤992px el aside MUST mostrarse como card compacta dentro del flujo (nombre del plan, precio con plazo y CTA de ancho natural; mini-lista, badge y nota ocultos), ubicada tras la intro mediante `order` y con `position: sticky` bajo el header. MUST acompañar la lectura y soltarse sola al terminar el layout, sin superponerse nunca a "También te puede interesar" ni al footer. El mecanismo `buybar-*` por JS (`scrolled-past`, `buybar-down`, `buybar-hidden`) queda retirado en las fichas. La zona inferior del viewport (flotantes ↑ y WhatsApp) MUST quedar siempre libre.

#### Scenario: Card que acompaña sin tapar

- **WHEN** el visitante hace scroll por una ficha en móvil
- **THEN** la card compacta sigue visible bajo el header durante la lectura y se suelta antes de relacionados, sin cubrir nunca contenido, footer ni flotantes

#### Scenario: Sin barra fija ni JS de show/hide

- **WHEN** el visitante abre cualquier ficha en un viewport ≤992px con la caché limpia
- **THEN** no existe barra `fixed` inferior ni parpadeos de aparición: solo la card sticky en flujo
