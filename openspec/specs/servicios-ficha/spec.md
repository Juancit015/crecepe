# servicios-ficha Specification

## Purpose
Que cada página de servicio responda de un vistazo inversión, entrega, duración, entregable y aporte del cliente, con datos ya publicados.

## Requirements

### Requirement: Ficha completa por servicio
El sistema SHALL mostrar en cada página de servicio una ficha con Inversión, Entrega, Recibes, Necesito de ti y Soporte, con datos coherentes con el resto de la página.

#### Scenario: Ficha visible antes del FAQ
- **WHEN** el visitante baja hasta antes de las preguntas en cualquier página de servicio
- **THEN** encuentra la ficha completa con los 5 datos sin contradicciones con precio y semanas del aside

#### Scenario: Tres fichas coherentes
- **WHEN** el visitante compara las 3 páginas
- **THEN** cada ficha refleja su precio (500/700/900) y entrega (2-3, 4-6, 2-4 semanas)

### Requirement: Fichas responden intención de búsqueda

Cada ficha de servicio MUST incluir un bloque visible "¿Qué incluye?" con la lista de entregables, el tiempo estimado de entrega y una mención explícita de que el cliente puede administrar su sitio sin depender del proveedor.

#### Scenario: Ficha presencia completa

- **WHEN** un visitante abre la ficha de Presencia Digital
- **THEN** ve qué incluye, en cuánto tiempo se entrega y que puede administrarla solo

#### Scenario: Ficha tienda completa y honesta

- **WHEN** un visitante abre la ficha de Tienda Online
- **THEN** ve catálogo, pagos Yape/Plin, pedidos por WhatsApp, envíos y una nota honesta de que la pasarela con tarjeta se cotiza aparte

### Requirement: Contenido propio sin copia

Todo texto nuevo de fichas MUST ser redacción original de CrecePE; queda prohibido copiar textos de sitios competidores.

#### Scenario: Originalidad verificable

- **WHEN** se agrega un bloque de contenido a una ficha
- **THEN** el texto es redacción propia y no reproduce contenido de terceros
