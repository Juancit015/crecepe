## MODIFIED Requirements

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
