## ADDED Requirements

### Requirement: Cards apiladas compactas en rango medio
El sistema SHALL mostrar las cards apiladas de Casos, Opiniones y Contacto en versión compacta en el subrango 600–768px (foto contenida ~140–150px, paddings y tipografías reducidos frente a desktop), espejo del tratamiento que Servicios ya tiene en 481–1024px. El contenido queda completo y legible en claro y oscuro; teléfonos (≤600px) y desktop intactos.

#### Scenario: Casos compactos a 670px
- **WHEN** el visitante abre Casos a ~670px (captura 09-23-26)
- **THEN** cada card apilada ocupa menos altura que hoy (foto contenida, aire reducido) con título, descripción y botones completos

#### Scenario: Opiniones legibles a 670px
- **WHEN** el visitante abre Opiniones a ~670px (captura 09-23-39)
- **THEN** las cards tienen menos padding y las líneas de testimonio Ño cruzan de borde a borde

#### Scenario: Contacto compacto a 670px
- **WHEN** el visitante abre Contacto a ~670px (captura 09-23-52)
- **THEN** la tarjeta de diagnóstico y los botones ocupan menos altura con aire lateral, sin estirarse al ancho total
