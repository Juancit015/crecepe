## Purpose

Que título, H1, headings y enlaces cumplan lo que pide la auditoría, sin tocar temas de dominio.

## Requirements

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

### Requirement: FAQ cubre intención transaccional

El FAQ visible del home MUST incluir preguntas de precio ("¿Cuánto cuesta una página web / una tienda virtual?"), tiempos ("¿En cuánto tiempo está lista?"), autogestión ("¿Puedo administrarla yo?") y pagos ("¿Acepta tarjeta?"), cada una con respuesta de 2-3 líneas en lenguaje cliente.

#### Scenario: Preguntas de precio y tiempos

- **WHEN** un visitante expande el FAQ del home
- **THEN** encuentra respuestas directas sobre precios desde, tiempos de entrega y autogestión

### Requirement: Schema FAQPage válido y sincronizado

Cada pregunta visible en el FAQ MUST tener su entrada correspondiente en el bloque schema FAQPage de la página, y el JSON-LD MUST seguir pasando validación (python json.loads) tras cada cambio.

#### Scenario: Schema sincronizado

- **WHEN** se agrega o edita una pregunta del FAQ
- **THEN** el Rich Results Test no reporta errores en FAQPage y `python3 -c json.loads` valida cada bloque
