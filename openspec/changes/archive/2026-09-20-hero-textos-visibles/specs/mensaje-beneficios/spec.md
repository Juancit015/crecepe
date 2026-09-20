## ADDED Requirements

### Requirement: H1 sin coma y subtítulo extendido
El sistema SHALL mostrar el H1 del hero sin comas y el subtítulo extendido con 3 palabras de cierre, manteniendo el enfoque en beneficios.

#### Scenario: H1 limpio
- **WHEN** el visitante lee el titular del hero
- **THEN** lee "Tu negocio vendiendo solo todos los días" sin comas

#### Scenario: Subtítulo con cierre
- **WHEN** el visitante lee el subtítulo del hero
- **THEN** el texto termina con el cierre de 3 palabras sobre ganar dinero, conservando el resto igual
