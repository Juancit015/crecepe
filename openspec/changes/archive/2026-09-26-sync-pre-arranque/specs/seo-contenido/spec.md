## MODIFIED Requirements

### Requirement: Schema declara medios aceptados y rango real

El bloque `ProfessionalService` del JSON-LD MUST incluir `"paymentAccepted": ["Yape", "Plin", "Transferencia bancaria"]` y todos los bloques con `priceRange` MUST decir `"S/ 500 - S/ 900"` (rango real de proyectos decidido por Juan el 2026-09-26: Presencia S/ 500 a Automatización S/ 900), en las 8 páginas. El valor del código MUST ser idéntico al declarado en este spec; si el rango cambia, código y spec se actualizan juntos en el mismo commit.

#### Scenario: Rich data de pagos y precios

- **WHEN** Google lee el JSON-LD de cualquier página
- **THEN** encuentra `paymentAccepted` con los 3 medios y `priceRange` sin precios viejos

#### Scenario: Código y spec sin divergencia

- **WHEN** se busca `priceRange` en las 8 páginas y en este spec
- **THEN** todos los valores son idénticos entre sí (cero ocurrencias del rango viejo)

## ADDED Requirements

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
