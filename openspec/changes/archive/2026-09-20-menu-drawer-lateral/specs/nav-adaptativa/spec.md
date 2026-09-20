## ADDED Requirements

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
- **THEN** X, 7 links con icono, CTA y fila del tema se ven completos sin recortes ni zonas vacías

#### Scenario: Todo lo anterior sigue igual
- **WHEN** el visitante usa el drawer
- **THEN** CTA, tema, cierre al tocar fuera, Escape, resize y bloqueo de scroll funcionan como hoy
