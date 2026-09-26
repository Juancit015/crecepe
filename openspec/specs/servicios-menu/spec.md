## Purpose

Que la sección Servicios sea un menú compacto y expandible en móvil y tablet, sin perder información ni SEO.

## Requirements

### Requirement: Servicios como menú expandible en móvil y tablet

En viewports ≤992px la sección Servicios MUST mostrarse como lista menú (número + nombre + botón +/−) en vez de cards. Al expandir un servicio MUST revelar su descripción, lista de checks y link a su ficha. Todo el contenido MUST estar en el DOM desde la carga (toggle por clase CSS, nunca fetch al expandir).

#### Scenario: Menú compacto inicial

- **WHEN** el visitante abre Servicios en móvil a 360px
- **THEN** ve las 3 filas numeradas colapsadas, sin cards ni fotos

#### Scenario: Expansión con contenido completo

- **WHEN** el visitante expande Tienda Virtual + IA
- **THEN** ve descripción, checks y el link a su ficha, y puede navegar a ella

### Requirement: SEO intacto en el menú

Cada nombre de servicio MUST ser un heading real (h3), los links a fichas MUST ser `<a>` rastreables y el texto colapsado MUST seguir en el DOM. Ningún contenido puede depender de JS para existir (sin JS todo visible o accesible).

#### Scenario: Crawler lee el menú

- **WHEN** Google renderiza la sección en móvil
- **THEN** encuentra los 3 h3, descripciones, checks y links a las fichas
