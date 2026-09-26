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

### Requirement: Schema declara medios aceptados y rango real

El bloque `ProfessionalService` del JSON-LD MUST incluir `"paymentAccepted": ["Yape", "Plin", "Transferencia bancaria"]` y todos los bloques con `priceRange` MUST decir `"S/ 500 - S/ 900"` (rango real de proyectos decidido por Juan el 2026-09-26: Presencia S/ 500 a Automatización S/ 900), en las 8 páginas. El valor del código MUST ser idéntico al declarado en este spec; si el rango cambia, código y spec se actualizan juntos en el mismo commit.

#### Scenario: Rich data de pagos y precios

- **WHEN** Google lee el JSON-LD de cualquier página
- **THEN** encuentra `paymentAccepted` con los 3 medios y `priceRange` sin precios viejos

#### Scenario: Código y spec sin divergencia

- **WHEN** se busca `priceRange` en las 8 páginas y en este spec
- **THEN** todos los valores son idénticos entre sí (cero ocurrencias del rango viejo)

### Requirement: FAQ visible, schema y llms.txt con wording 1:1

Cada pregunta y respuesta del FAQ visible del home MUST tener texto idéntico (pregunta y respuesta) en el bloque schema FAQPage y en la sección correspondiente de `llms.txt`. La fuente de verdad es el texto visible del index.

#### Scenario: Wording unificado

- **WHEN** se comparan las preguntas del FAQ visible contra el schema y `llms.txt`
- **THEN** los 13 pares pregunta-respuesta son idénticos carácter a carácter (salvo formato Markdown de `llms.txt`)

### Requirement: Sitemap al día con lo publicado

Cada cambio publicado que agregue, quite o modifique URLs o contenido indexable MUST actualizar el `lastmod` correspondiente en `sitemap.xml` en el mismo commit.

#### Scenario: Lastmod vigente

- **WHEN** se publica un cambio de contenido
- **THEN** el `lastmod` de las URLs afectadas es igual o posterior a la fecha del cambio
