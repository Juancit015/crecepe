## Purpose

Que la sección FAQ ocupe menos espacio mostrando 6 preguntas y revelando las 5 restantes solo cuando el visitante lo pide.

## Requirements

### Requirement: Revelado progresivo de preguntas del FAQ
El sistema SHALL ocultar por defecto las 5 preguntas tras el botón y revelarlas al pulsarlo, alternando la etiqueta del botón.

#### Scenario: Estado inicial compacto
- **WHEN** el visitante llega a la sección FAQ
- **THEN** ve 6 preguntas, el botón "Ver todas las preguntas" y ninguna de las 5 restantes

#### Scenario: Revelar preguntas restantes
- **WHEN** el visitante pulsa "Ver todas las preguntas"
- **THEN** aparecen las 5 preguntas restantes y el botón cambia a "Ver menos preguntas"

#### Scenario: Botón al final al revelar
- **WHEN** el visitante pulsa "Ver todas las preguntas"
- **THEN** el botón se traslada al final de la lista, tras la 11.ª pregunta

#### Scenario: Ocultar de nuevo
- **WHEN** el visitante pulsa "Ver menos preguntas"
- **THEN** las 5 preguntas se ocultan y el botón vuelve a "Ver todas las preguntas" en su posición tras la 6.ª pregunta

#### Scenario: Acordeón individual intacto
- **WHEN** el visitante pulsa una pregunta, esté o no revelada por el botón
- **THEN** solo esa respuesta se abre o cierra, sin afectar a las demás

#### Scenario: Sin JavaScript
- **WHEN** la página carga sin JS disponible
- **THEN** las 11 preguntas quedan visibles y el botón no oculta nada
