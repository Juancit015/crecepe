## Purpose

Que cualquier visitante entienda el diferenciador sin saber qué es ChatGPT: la forma de buscar cambió y su negocio debe ser la respuesta.

## Requirements

### Requirement: GEO explicado como comportamiento
El sistema SHALL explicar la sección Diferenciador en términos del cambio de comportamiento (preguntar vs buscar listas), sin nombres de IA en título, subtítulo ni cards.

#### Scenario: Título de comportamiento
- **WHEN** el visitante lee el título de la sección
- **THEN** entiende que los clientes ahora preguntan a la IA en vez de recorrer listas

#### Scenario: Cards sin marcas
- **WHEN** el visitante lee las cards SEO y GEO
- **THEN** distingue "salir en la lista" de "ser la respuesta", sin mencionar ChatGPT ni otras marcas

#### Scenario: Píldoras como prueba
- **WHEN** el visitante ve las píldoras
- **THEN** las marcas aparecen solo ahí, como los lugares donde le van a preguntar

### Requirement: Hero y GEO legibles en oscuro
El sistema SHALL mostrar el mouse de scroll del hero en blanco, las cards SEO/GEO en navy con texto claro en modo oscuro, y las píldoras de motores en estilo glass con texto blanco en modo oscuro.

#### Scenario: Mouse blanco
- **WHEN** el visitante ve el hero en cualquier tema
- **THEN** el mouse de scroll es blanco con su ruedita animada

#### Scenario: Cards navy en oscuro
- **WHEN** el visitante activa modo oscuro y ve el diferenciador
- **THEN** ambas cards son azul oscuro con títulos blancos y cuerpo claro

#### Scenario: Píldoras glass en oscuro
- **WHEN** el visitante activa modo oscuro y ve las píldoras
- **THEN** cada píldora es translúcida oscura con texto blanco legible
