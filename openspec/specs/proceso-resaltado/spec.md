## Purpose

Definir la única fuente de resaltado del timeline de Proceso en cada dispositivo: hover en desktop y brillo por scroll en móvil, para que nunca se enciendan dos pasos a la vez por motivos distintos.

## Requirements

### Requirement: Desktop resalta solo por hover
El sistema SHALL resaltar el paso del timeline únicamente por hover en dispositivos con puntero fino, con el scroll-spy desactivado.

#### Scenario: Hover en desktop
- **WHEN** el visitante pasa el mouse sobre un paso en desktop
- **THEN** solo ese paso muestra punto agrandado con anillo y título cyan

#### Scenario: Sin hover no hay resaltado en desktop
- **WHEN** el visitante hace scroll en desktop sin el mouse sobre ningún paso
- **THEN** ningún paso queda resaltado por posición de scroll

### Requirement: Móvil resalta solo por scroll
El sistema SHALL encender el punto y teñir de cyan el título de cada paso únicamente cuando cruce la franja central durante el scroll en dispositivos sin hover, sin aplicar resaltado por toque.

#### Scenario: Número brilla al pasar en móvil
- **WHEN** el visitante hace scroll y un paso cruza el centro del viewport en móvil
- **THEN** solo ese punto brilla con anillo y su título se tiñe cyan, y ambos se apagan al salir de la franja

#### Scenario: Toque no deja resaltado pegado en móvil
- **WHEN** el visitante toca un paso en móvil y sigue scrolleando
- **THEN** ningún título queda cyan pegado por el toque

### Requirement: Movimiento reducido sin resaltado animado
El sistema SHALL desactivar todo resaltado por hover y por scroll cuando el visitante tenga `prefers-reduced-motion` activado, en ambos dispositivos.

#### Scenario: Movimiento reducido en desktop y móvil
- **WHEN** el visitante tiene movimiento reducido y recorre el timeline
- **THEN** ni el hover ni el scroll encienden puntos o tiñen títulos
