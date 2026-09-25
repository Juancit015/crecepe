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

### Requirement: Aside de compra sticky en desktop

El aside `.svc-aside` de cada página de servicio SHALL acompañar el scroll en viewport desktop, manteniendo precio y CTA visibles mientras el visitante lee la ficha, y SHALL detenerse antes de la sección "También te puede interesar" sin superponerse a ella ni al footer.

#### Scenario: Aside visible durante la lectura

- **WHEN** el visitante hace scroll por la ficha en desktop (ancho >992px)
- **THEN** el aside sigue visible junto al contenido hasta que termina la columna, y nunca tapa "También te puede interesar" ni el footer

#### Scenario: Móvil sin cambios

- **WHEN** el visitante abre una ficha en móvil (ancho ≤992px)
- **THEN** el aside NO es sticky; la mini-barra inteligente sigue siendo el mecanismo de compra visible

#### Scenario: Sin movimiento reducido afectado

- **WHEN** el visitante tiene `prefers-reduced-motion` activado
- **THEN** el sticky sigue funcionando (es posición, no animación) sin transiciones asociadas

### Requirement: Card siempre entera, sin scroll interno

En desktop (>992px) la card del aside MUST verse siempre completa, sin recortes ni scroll interno. Si la altura del viewport no alcanza para el sticky (<600px: card medida 493px + `top: 88px` + aire), el aside MUST pasar a estático en flujo normal, mostrando la card entera de arriba a abajo. En viewports ≥600px el sticky funciona como siempre.

#### Scenario: Laptop 13" con card completa

- **WHEN** el visitante abre presencia a 1366×753 (viewport ~640px, card medida 493px)
- **THEN** el aside sigue fijo al hacer scroll y la card se ve entera, sin scroll interno ni partes ocultas

#### Scenario: Sticky intacto en viewport alto

- **WHEN** el visitante abre una ficha con altura ≥600px
- **THEN** el aside sigue fijo al hacer scroll, igual que antes
