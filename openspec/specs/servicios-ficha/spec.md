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
