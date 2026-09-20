## ADDED Requirements

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
