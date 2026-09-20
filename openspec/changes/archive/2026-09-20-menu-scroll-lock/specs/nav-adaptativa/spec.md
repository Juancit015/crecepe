## ADDED Requirements

### Requirement: Fondo inmóvil y hamburguesa a la derecha
El sistema SHALL impedir todo scroll del fondo con el menú móvil abierto (móvil y escritorio angosto), cerrar todo al pasar a desktop y mostrar la hamburguesa a la derecha del logo en móvil.

#### Scenario: Sin scroll de fondo en ningún viewport
- **WHEN** el menú está abierto (móvil o ventana angosta de escritorio)
- **THEN** la página detrás ño se mueve por ningún gesto; el panel conserva su propio scroll interno si excede su altura

#### Scenario: Redimensionar a desktop cierra todo
- **WHEN** el visitante agranda la ventana más allá del breakpoint con el menú abierto
- **THEN** panel, velo y bloqueo desaparecen y la navbar queda en su estado desktop normal, sin restos visuales

#### Scenario: Hamburguesa a la derecha
- **WHEN** el visitante ve la navbar en móvil
- **THEN** el logo va a la izquierda y la hamburguesa con borde a la derecha
