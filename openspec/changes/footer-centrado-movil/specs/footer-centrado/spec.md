## ADDED Requirements

### Requirement: Footer listado y centrado en móvil y tablet

En viewports ≤992px el footer MUST mostrar sus bloques en una sola columna, listados y centrados: logo, descripción, links de servicios/contacto y badges de pago, todo con `text-align: center`. Nada queda en columna lateral derecha.

#### Scenario: Tablet con footer centrado

- **WHEN** el visitante abre el footer a 768px
- **THEN** ve los bloques uno debajo del otro, centrados, sin columna a la derecha

#### Scenario: Móvil con footer centrado

- **WHEN** el visitante abre el footer a 360px
- **THEN** todo el contenido está listado y centrado

#### Scenario: Desktop intacto

- **WHEN** el visitante abre el footer en desktop
- **THEN** sigue en 3 columnas alineadas a la izquierda, igual que antes
