## Purpose

Reducir la altura vertical en móvil con compactación por sección y acordeón en Planes, manteniendo desktop intacto y sin barra CTA fija.

## ADDED Requirements

### Requirement: Planes con acordeón en móvil
El sistema SHALL mostrar en móvil cada plan compacto con su lista colapsada tras un botón "Ver qué incluye", visible siempre en desktop.

#### Scenario: Lista colapsada al entrar
- **WHEN** el visitante abre Planes en móvil
- **THEN** ve título, descripción a 2 líneas, precio y CTA, con el botón "Ver qué incluye" cerrado

#### Scenario: Expandir y colapsar
- **WHEN** el visitante toca "Ver qué incluye"
- **THEN** la lista se expande y el botón cambia a "Ocultar detalles"; al tocar de nuevo se colapsa

#### Scenario: Desktop sin cambios
- **WHEN** el visitante ve Planes en desktop
- **THEN** las listas están siempre visibles y el botón no aparece

### Requirement: Secciones compactas en móvil
El sistema SHALL mostrar Servicios en filas compactas, Casos podados (2° link solo desktop) y Opiniones compactas, solo en móvil.

#### Scenario: Servicios fila
- **WHEN** el visitante ve Servicios en móvil
- **THEN** cada card es una fila con foto 92px, título, descripción a 2 líneas y link, sin overlay, icono ni lista

#### Scenario: Casos podados
- **WHEN** el visitante ve Casos en móvil
- **THEN** ve foto, título, descripción a 3 líneas y un solo botón full-width, sin overlay, rol ni stack

#### Scenario: Opiniones compactas
- **WHEN** el visitante ve Opiniones en móvil
- **THEN** las cards tienen menos padding y texto reducido
