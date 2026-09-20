## Purpose

Que la navegación se lea siempre: blanca sobre la foto al inicio y azul sobre el fondo blanco al hacer scroll.

## Requirements

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

### Requirement: Menú móvil estilo AZ con todo dentro
El sistema SHALL mostrar en móvil solo hamburguesa y logo en la barra, con links, CTA y tema agrupados dentro del panel, sin redes sociales.

#### Scenario: Barra limpia en móvil
- **WHEN** el visitante ve la navbar en móvil con el menú cerrado
- **THEN** solo ve el logo a la izquierda y la hamburguesa a la derecha; el tema ño está en la barra

#### Scenario: Todo dentro del panel
- **WHEN** el visitante abre la hamburguesa en móvil
- **THEN** encuentra los 7 links, el CTA "Diagnóstico gratis" y el toggle de tema, sin iconos sociales

#### Scenario: Tema funciona en el panel
- **WHEN** el visitante pulsa el tema dentro del menú en cualquier modo
- **THEN** el tema cambia y el panel adapta sus colores como hoy

#### Scenario: Desktop intacto
- **WHEN** el visitante ve la navbar en desktop
- **THEN** todo sigue como hoy: links en fila y tema visible en la barra

### Requirement: Velo con blur y cierre al tocar fuera
El sistema SHALL mostrar un velo con blur sobre el fondo al abrir el menú móvil; tocar el velo lo cierra y el scroll de la página queda bloqueado mientras está abierto.

#### Scenario: Velo con blur al abrir
- **WHEN** el visitante abre la hamburguesa en móvil
- **THEN** el contenido detrás se ve difuminado y levemente oscurecido bajo el panel

#### Scenario: Toque fuera cierra
- **WHEN** el visitante toca el velo (cualquier zona fuera del panel) con el menú abierto
- **THEN** el menú se cierra y el velo desaparece

#### Scenario: Scroll de fondo bloqueado
- **WHEN** el menú está abierto en móvil
- **THEN** la página detrás ño hace scroll; al cerrar, el scroll vuelve a la normalidad

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

### Requirement: Drawer lateral derecho con links iconizados
El sistema SHALL mostrar el menú móvil como un drawer lateral derecho de fondo de marca, con links iconizados a la izquierda, divisores y X de cierre, conservando CTA, tema, velo y bloqueo de scroll.

#### Scenario: Apertura lateral
- **WHEN** el visitante pulsa la hamburguesa en móvil
- **THEN** el panel entra desde la derecha (~80% del ancho, altura completa) sobre el velo con blur

#### Scenario: Links con iconos y divisores
- **WHEN** el visitante mira el drawer abierto
- **THEN** cada link lleva su icono a la izquierda y hay un divisor entre filas, con la X arriba para cerrar

#### Scenario: Contenido completo al abrir
- **WHEN** el visitante abre el drawer en móvil
- **THEN** X, 7 links con icono, CTA y fila del tema se ven completos sin recortes ni zonas vacías (la navbar ño lleva blur con el menú abierto)

#### Scenario: Todo lo anterior sigue igual
- **WHEN** el visitante usa el drawer
- **THEN** CTA, tema, cierre al tocar fuera, Escape, resize y bloqueo de scroll funcionan como hoy
