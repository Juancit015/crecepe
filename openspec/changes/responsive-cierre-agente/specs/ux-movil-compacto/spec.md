## MODIFIED Requirements

### Requirement: Secciones compactas en móvil

El sistema SHALL mostrar en móvil las cards de Servicios, Casos y Opiniones con contenido completo (descripciones sin recorte, listas íntegras, metadatos y segundo enlace de Casos visibles, caption en foto de Servicios), compactando solo altura: foto contenida, paddings y tipografías reducidos. Nada se poda ni se oculta por ser móvil.

#### Scenario: Servicios fila

- **WHEN** el visitante ve Servicios en móvil
- **THEN** cada card apilada muestra prestaciones, descripción y leyenda completas (sin poda a 3 bullets ni recorte a 2 líneas), con foto contenida y aire reducido

#### Scenario: Casos podados

- **WHEN** el visitante ve Casos en móvil
- **THEN** ve foto, descripción completa, metadatos y los dos botones (ver caso + ver sitio), compactados en altura sin ocultar nada

#### Scenario: Opiniones compactas

- **WHEN** el visitante ve Opiniones en móvil
- **THEN** las cards tienen menos padding y texto completo con renglón contenido
