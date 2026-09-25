## MODIFIED Requirements

### Requirement: Móvil resalta solo por scroll

El sistema SHALL mostrar el texto del botón "Ver detalle" en blanco sobre el fondo marino en dispositivos sin hover, tiñéndolo de cyan solo al hover con mouse, sin aplicar resaltado por toque. El paso activo en un scroll rápido SHALL ser el más cercano al centro del viewport, nunca un salto por el orden de entrega del observer.

#### Scenario: Número brilla al pasar en móvil

- **WHEN** el visitante hace scroll y un paso cruza el centro del viewport en móvil
- **THEN** solo ese punto brilla con anillo y su título se tiñe cyan, y ambos se apagan al salir de la franja

#### Scenario: Botón Ver detalle blanco con hover cyan

- **WHEN** el visitante ve un paso del Proceso en móvil
- **THEN** el texto del botón "Ver detalle" se muestra en blanco (legible sobre el fondo marino y sin azul oscuro al tocar) y solo se tiñe cyan al pasar el mouse, manteniendo su color actual en desktop

#### Scenario: Toque no deja resaltado pegado en móvil

- **WHEN** el visitante toca un paso en móvil y sigue scrolleando
- **THEN** ningún título queda cyan pegado por el toque

#### Scenario: Scroll rápido sin saltos

- **WHEN** el visitante hace un scroll rápido que cruza varios pasos en móvil
- **THEN** queda activo el paso más cercano al centro del viewport, sin saltos de 1 a 4 ni resaltados múltiples
