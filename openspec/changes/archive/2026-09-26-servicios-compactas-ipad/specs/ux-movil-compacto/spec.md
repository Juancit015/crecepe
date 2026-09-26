## ADDED Requirements

### Requirement: Servicios compactos en tablet
El sistema SHALL mostrar las cards de Servicios en versión compacta en tablet (481–1024px): foto contenida, paddings y tipografías reducidos frente a desktop, manteniendo título, descripción, lista y link completos y legibles en claro y oscuro. Teléfonos (≤480px) intactos.

#### Scenario: Card compacta en iPad portrait
- **WHEN** el visitante ve Servicios a 744–820px de ancho (portrait, ver captura de referencia)
- **THEN** cada card apilada ocupa menos altura que hoy (foto ~140px, aire reducido) con contenido completo sin recortes

#### Scenario: Card compacta en iPad landscape
- **WHEN** el visitante ve Servicios a 1024–1180px de ancho
- **THEN** las cards mantienen el layout de grilla desktop pero con aire reducido (foto, paddings y fuentes ajustados)

#### Scenario: Teléfonos y desktop intactos
- **WHEN** el visitante ve Servicios en desktop (>1024px) o teléfono (≤480px)
- **THEN** se aplican sus layouts actuales sin cambios (hover-overlay en desktop, apilada foto-arriba 180px en teléfono)
