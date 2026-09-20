## ADDED Requirements

### Requirement: Menú móvil estilo AZ con todo dentro
El sistema SHALL mostrar en móvil solo hamburguesa (izquierda) y logo en la barra, con links, CTA y tema agrupados dentro del panel, sin redes sociales.

#### Scenario: Barra limpia en móvil
- **WHEN** el visitante ve la navbar en móvil con el menú cerrado
- **THEN** solo ve la hamburguesa a la izquierda y el logo; el tema ño está en la barra

#### Scenario: Todo dentro del panel
- **WHEN** el visitante abre la hamburguesa en móvil
- **THEN** encuentra los 7 links, el CTA "Diagnóstico gratis" y el toggle de tema, sin iconos sociales

#### Scenario: Tema funciona en el panel
- **WHEN** el visitante pulsa el tema dentro del menú en cualquier modo
- **THEN** el tema cambia y el panel adapta sus colores como hoy

#### Scenario: Panel media pantalla
- **WHEN** el visitante abre la hamburguesa en móvil
- **THEN** el panel es una lámina bajo la navbar que cubre ~la mitad superior y el contenido de la página sigue visible debajo (ño fullscreen)

#### Scenario: Desktop intacto
- **WHEN** el visitante ve la navbar en desktop
- **THEN** todo sigue como hoy: links en fila y tema visible en la barra
