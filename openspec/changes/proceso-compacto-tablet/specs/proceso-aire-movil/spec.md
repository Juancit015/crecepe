## MODIFIED Requirements

### Requirement: Respiración solo en móvil
El sistema SHALL mostrar el timeline con pasos más separados, puntos más chicos y línea más fina en teléfonos (≤480px); en tablet-portrait (481–768px) el timeline usa variante compacta con aire reducido, uniforme con el resto de secciones.

#### Scenario: Aire en móvil 360px
- **WHEN** el visitante recorre Proceso en teléfono (≤480px)
- **THEN** hay 52px entre pasos, puntos de 32px y línea de 1px tenue

#### Scenario: Compacto en tablet-portrait
- **WHEN** el visitante recorre Proceso a 481–768px (iPad portrait)
- **THEN** los pasos 1–6 van compactos (gaps y paddings reducidos frente al teléfono) al nivel de las demás secciones, con línea y puntos legibles en claro y oscuro

#### Scenario: Desktop intacto
- **WHEN** el visitante recorre Proceso en desktop
- **THEN** el espaciado, puntos y línea son los actuales (34px, 38px, 2px)
