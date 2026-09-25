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

### Requirement: Aside sticky nunca cortado

En desktop (>992px) el aside sticky MUST mostrar su contenido completo en cualquier altura de viewport ≥600px: si la card no cabe entre el `top` y el borde inferior, MUST ofrecer scroll interno en vez de cortar la parte baja (CTA/nota). El scroll interno MUST NOT atrapar el scroll de la página al llegar a sus extremos.

#### Scenario: Laptop 13" sin cortes

- **WHEN** el visitante abre una ficha a 1366×753 (captura evidencial: presencia cortada, tienda al límite)
- **THEN** la card muestra CTA y nota completos, con scroll interno solo si la altura no alcanza

#### Scenario: Scroll interno no atrapa la página

- **WHEN** el visitante rueda sobre la card hasta el final de su scroll interno
- **THEN** la página sigue scrolleando con normalidad
