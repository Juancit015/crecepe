## Purpose

Que revelar y ocultar las preguntas extra del FAQ se sienta suave y el visitante permanezca en la sección, sin saltos ni cortes bruscos.

## ADDED Requirements

### Requirement: Expansión y colapso animados sin salto de scroll
El sistema SHALL animar la aparición y ocultamiento de las 5 preguntas extra y mantener el botón a la vista al contraer.

#### Scenario: Revelar con animación
- **WHEN** el visitante pulsa "Ver todas las preguntas"
- **THEN** las 5 preguntas aparecen con una expansión suave (no instantánea) y el botón viaja al final

#### Scenario: Contraer sin salto
- **WHEN** el visitante pulsa "Ver menos preguntas"
- **THEN** las 5 preguntas se ocultan con un colapso suave y el botón queda a la vista en su posición del medio, sin saltar a Contacto

#### Scenario: Movimiento reducido
- **WHEN** el visitante tiene `prefers-reduced-motion`
- **THEN** el mostrar/ocultar es instantáneo (bloque global existente) pero igual sin salto de scroll

#### Scenario: Sin JavaScript
- **WHEN** la página carga sin JS disponible
- **THEN** las 11 preguntas quedan visibles
