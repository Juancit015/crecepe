## Purpose

Reducir la altura vertical en móvil con compactación por sección y acordeón en Planes, manteniendo desktop intacto y sin barra CTA fija.

## Requirements

### Requirement: Planes con acordeón en móvil
El sistema SHALL mostrar en móvil cada plan compacto con descripción siempre completa y su lista en preview tras un botón "Ver qué incluye", visible siempre en desktop.

#### Scenario: Preview al entrar
- **WHEN** el visitante abre Planes en móvil
- **THEN** ve título, descripción completa, precio y CTA, con ~3 features visibles desvanecidas y el botón "Ver qué incluye" cerrado

#### Scenario: Expandir y colapsar con animación simétrica
- **WHEN** el visitante toca "Ver qué incluye"
- **THEN** la lista se expande con la misma animación de ida y vuelta y el botón cambia a "Ocultar detalles"; al tocar de nuevo se colapsa igual

#### Scenario: Desktop sin cambios
- **WHEN** el visitante ve Planes en desktop
- **THEN** las listas y descripciones están siempre visibles y el botón no aparece

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

### Requirement: Secciones compactas en móvil
El sistema SHALL mostrar Servicios en filas con foto fija de 118px de alto y sus 3 primeros bullets visibles, Casos podados (2° link solo desktop) y Opiniones compactas, solo en móvil.

#### Scenario: Servicios fila
- **WHEN** el visitante ve Servicios en móvil
- **THEN** cada card es una fila con foto de 92px por 118px, título, descripción a 2 líneas, los 3 primeros bullets de su lista y link, sin overlay ni icono

#### Scenario: Casos podados
- **WHEN** el visitante ve Casos en móvil
- **THEN** ve foto, título, descripción a 3 líneas y un solo botón full-width, sin overlay, rol ni stack

#### Scenario: Opiniones compactas
- **WHEN** el visitante ve Opiniones en móvil
- **THEN** las cards tienen menos padding y texto reducido

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
