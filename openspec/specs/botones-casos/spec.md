## Purpose

Que los dos enlaces de cada caso sean botones fáciles de pulsar en móvil sin confundirlos.

## Requirements

### Requirement: Enlaces de casos como botones
El sistema SHALL mostrar "Ver caso completo" y "Ver sitio/tienda en vivo" como 2 botones píldora separados con área táctil mínima de 44px.

#### Scenario: Botones separados en móvil
- **WHEN** el visitante ve una card de caso en móvil
- **THEN** los 2 enlaces son botones separados con espacio entre ellos, fáciles de atinar con el pulgar

#### Scenario: Destinos e iconos intactos
- **WHEN** el visitante pulsa cada botón
- **THEN** va al mismo destino de antes (subpágina del caso o sitio en vivo) con su icono correspondiente

#### Scenario: Jerarquía visual
- **WHEN** el visitante ve la card en cualquier tema
- **THEN** "Ver caso completo" destaca como primario y el enlace en vivo como secundario con borde

### Requirement: Fila estable de botones de casos en desktop
El sistema SHALL mantener los botones de acción de cada caso en fila horizontal en desktop, sin que el hover sobre uno mueva al otro de línea.

#### Scenario: Hover sin salto de línea
- **WHEN** el visitante pasa el cursor sobre "Ver caso Novedades Chávez" en desktop a pantalla completa
- **THEN** "Ver tienda en vivo" permanece en la misma fila, sin saltar abajo

#### Scenario: Efecto hover sin cambio de ancho
- **WHEN** el visitante pasa el cursor sobre cualquier botón de caso
- **THEN** el botón muestra su efecto (elevación) sin ensancharse ni empujar a su vecino

#### Scenario: Wrap solo en pantallas angostas
- **WHEN** el visitante ve los casos en una pantalla angosta donde dos botones no caben
- **THEN** los botones pueden apilarse en columna como hoy
