## ADDED Requirements

### Requirement: Pista cubre el viewport todo el loop
El sistema SHALL dimensionar la pista de cada marquesina para que cubra el viewport completo durante todo el ciclo, sin tramos vacíos en ningún punto del loop.

#### Scenario: Mitad del loop sin huecos
- **WHEN** la animación de la barra de garantías va por la mitad de su ciclo
- **THEN** el borde derecho de la pista sigue más allá del borde del viewport y no hay tramo sin contenido

#### Scenario: Reinicio sin pop
- **WHEN** el loop de la barra de garantías reinicia
- **THEN** no hay salto visible: el contenido que entra es idéntico al que sale

#### Scenario: Mitades idénticas
- **WHEN** se comparan las dos mitades de la pista de garantías
- **THEN** miden exactamente igual (mismos ítems, mismos separadores) para que el -50% caiga exacto
