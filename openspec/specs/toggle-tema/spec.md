## Purpose

Que el botón de tema quede en una posición cómoda al final de la navbar y se vea como icono simple sin círculo.

## Requirements

### Requirement: Botón de tema estilo AZ
El sistema SHALL mostrar el botón de tema al final de la fila de la navbar como icono plano sin borde circular, heredando el color del texto.

#### Scenario: Posición al final
- **WHEN** el visitante ve la navbar en cualquier página y tema
- **THEN** el botón de tema está tras los enlaces (al final de la fila)

#### Scenario: Sin círculo
- **WHEN** el visitante ve el botón en cualquier tema y estado de scroll
- **THEN** no hay borde circular ni fondo propio: solo el icono sol/luna

#### Scenario: Color a juego
- **WHEN** la navbar está arriba (texto blanco) o con scroll (texto azul) en claro
- **THEN** el icono va blanco o azul respectivamente, igual que los enlaces
