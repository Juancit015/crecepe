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
El sistema SHALL mostrar el texto del botón "Ver detalle" en blanco sobre el fondo marino en dispositivos sin hover, tiñéndolo de cyan solo al hover con mouse, sin aplicar resaltado por toque.

#### Scenario: Número brilla al pasar en móvil
- **WHEN** el visitante hace scroll y un paso cruza el centro del viewport en móvil
- **THEN** solo ese punto brilla con anillo y su título se tiñe cyan, y ambos se apagan al salir de la franja

#### Scenario: Botón Ver detalle blanco con hover cyan
- **WHEN** el visitante ve un paso del Proceso en móvil
- **THEN** el texto del botón "Ver detalle" se muestra en blanco (legible sobre el fondo marino y sin azul oscuro al tocar) y solo se tiñe cyan al pasar el mouse, manteniendo su color actual en desktop

#### Scenario: Toque no deja resaltado pegado en móvil
- **WHEN** el visitante toca un paso en móvil y sigue scrolleando
- **THEN** ningún título queda cyan pegado por el toque

### Requirement: Movimiento reducido sin resaltado animado
El sistema SHALL desactivar todo resaltado por hover y por scroll cuando el visitante tenga `prefers-reduced-motion` activado, en ambos dispositivos.

#### Scenario: Movimiento reducido en desktop y móvil
- **WHEN** el visitante tiene movimiento reducido y recorre el timeline
- **THEN** ni el hover ni el scroll encienden puntos o tiñen títulos
