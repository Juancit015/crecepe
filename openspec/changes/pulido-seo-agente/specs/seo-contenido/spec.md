## MODIFIED Requirements

### Requirement: Contenido coherente y único
El sistema SHALL mostrar title bajo 580px, palabras del H1 en el cuerpo, headings sin duplicados y anchors descriptivos únicos.

#### Scenario: Título en medida
- **WHEN** un auditor mide el title
- **THEN** no supera 580px y conserva las keywords

#### Scenario: H1 con eco
- **WHEN** un auditor compara H1 contra cuerpo
- **THEN** "vendiendo solo" y "todos los días" aparecen en el texto

#### Scenario: Sin duplicados
- **WHEN** un auditor lista headings y anchors
- **THEN** no hay textos repetidos entre ellos

#### Scenario: Testimonios sin formato de reseña
- **WHEN** Google analiza las opiniones
- **THEN** no detecta visuales de puntuación (estrellas o "5 de 5"); textos y autores intactos
