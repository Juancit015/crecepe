## MODIFIED Requirements

### Requirement: Móvil resalta solo por scroll
El sistema SHALL encender el punto y teñir de cyan el título de cada paso únicamente cuando cruce la franja central durante el scroll en dispositivos sin hover, sin aplicar resaltado por toque.

#### Scenario: Número brilla al pasar en móvil
- **WHEN** el visitante hace scroll y un paso cruza el centro del viewport en móvil
- **THEN** solo ese punto brilla con anillo y su título se tiñe cyan, y ambos se apagan al salir de la franja

#### Scenario: Toque no deja resaltado pegado en móvil
- **WHEN** el visitante toca un paso en móvil y sigue scrolleando
- **THEN** ningún título queda cyan pegado por el toque
