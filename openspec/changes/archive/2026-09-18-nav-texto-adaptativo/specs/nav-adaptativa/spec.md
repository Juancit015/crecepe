## Purpose

Que la navegación se lea siempre: blanca sobre la foto al inicio y azul sobre el fondo blanco al hacer scroll.

## ADDED Requirements

### Requirement: Texto de navbar según fondo
El sistema SHALL mostrar el texto de la navbar en blanco sin scroll y en azul con scroll en modo claro, y en blanco siempre en modo oscuro.

#### Scenario: Inicio sin scroll en claro
- **WHEN** el visitante está arriba del todo en modo claro
- **THEN** marca, enlaces y hamburguesa se ven en blanco sobre la foto

#### Scenario: Con scroll en claro
- **WHEN** el visitante baja más de 40px en modo claro
- **THEN** marca y enlaces vuelven a su azul actual sobre el fondo blanco

#### Scenario: Modo oscuro estable
- **WHEN** el visitante navega en modo oscuro, con o sin scroll
- **THEN** el texto se mantiene blanco legible

#### Scenario: Logo acompaña al texto
- **WHEN** el texto está en blanco
- **THEN** el logo imagen va en blanco; cuando el texto es azul, el logo va en azul

#### Scenario: Menú móvil abierto
- **WHEN** el visitante abre el menú en móvil
- **THEN** los enlaces usan el color de su panel (azul sobre blanco en claro, blanco sobre marino en oscuro), ignore el scroll
