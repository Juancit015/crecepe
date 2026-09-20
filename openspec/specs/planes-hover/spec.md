## Purpose

Que cada card diga para quién es dentro de su descripción y el azul destaque solo la card bajo el cursor.

## Requirements

### Requirement: Uso integrado y hover azul
El sistema SHALL mostrar el "Ideal si..." en negrita dentro de la descripción (sin badges superiores) y borde azul solo al hover, igual en las 3 cards.

#### Scenario: Sin badges superiores
- **WHEN** el visitante ve cualquier card
- **THEN** no hay etiqueta superior; la descripción abre con el "Ideal si..." en negrita

#### Scenario: Hover azul parejo
- **WHEN** el visitante pasa el cursor sobre cualquier card
- **THEN** esa card muestra borde azul con sombra y elevación, sin mover a las demás

#### Scenario: Reposo igual
- **WHEN** el visitante no interactúa
- **THEN** las 3 cards se ven idénticas en estilo

#### Scenario: Transición rápida
- **WHEN** el cursor entra o sale de cualquier card
- **THEN** el borde azul aparece o se desvanece en ~0.25s, sin golpe ni salto
