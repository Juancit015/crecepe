## Purpose

Orientar el contenido, FAQ, schema y sitemap del sitio CrecePE a palabras clave con demanda real y tendencia creciente en Perú (base PE de SE Ranking), para recuperar y acelerar el crecimiento de vistas orgánicas.

## Requirements

### Requirement: Cobertura de keywords con tendencia creciente
El sistema SHALL integrar al menos una keyword objetivo con tendencia creciente en Perú en el title, H1 o H2 de cada página principal (home, 3 fichas de servicio, 2 casos).

#### Scenario: Home cubre keyword primaria
- **WHEN** un auditor revisa el H1 y title del home
- **THEN** encuentra al menos una keyword objetivo de la lista (ej. "paginas web peru" o "agencia seo en lima")

#### Scenario: Fichas de servicio cubren keyword propia
- **WHEN** un auditor revisa cada ficha de servicio
- **THEN** su H1 o H2 incluye la keyword objetivo asignada a ese servicio

### Requirement: FAQ long-tail por keyword
El FAQ del home y de cada ficha de servicio MUST incluir al menos una pregunta formulada con una keyword objetivo long-tail, con respuesta directa de 2-3 líneas.

#### Scenario: Pregunta long-tail presente
- **WHEN** un visitante expande el FAQ
- **THEN** encuentra una pregunta que contiene una keyword objetivo (ej. "¿Cuánto cuesta crear una página web en Perú?")

### Requirement: Trazabilidad en llms.txt
Cada keyword objetivo integrada en el sitio MUST aparecer en `llms.txt` con la misma formulación.

#### Scenario: Keyword en llms.txt
- **WHEN** se busca una keyword objetivo en llms.txt
- **THEN** aparece al menos una ocurrencia idéntica

### Requirement: Schema sincronizado con keywords
Los bloques JSON-LD (FAQPage, Service, ProfessionalService) MUST reflejar las nuevas preguntas y keywords sin romper la validación `python json.loads`.

#### Scenario: JSON válido tras cambios
- **WHEN** se ejecuta `python3 -c "import json; json.loads(...)"` sobre cada bloque
- **THEN** no se reportan errores

### Requirement: Sitemap actualizado
Toda página con contenido indexable modificado MUST tener su `lastmod` actualizado en `sitemap.xml` en el mismo commit.

#### Scenario: Lastmod vigente
- **WHEN** se publica un cambio de contenido
- **THEN** el `lastmod` de las URLs afectadas es igual o posterior a la fecha del cambio

### Requirement: Priorización por dificultad y tendencia
Las keywords objetivo MUST seleccionarse entre términos con dificultad <= 40 (cuando exista métrica) y tendencia creciente o estable en los últimos 3 meses en la base PE.

#### Scenario: Keyword cumple criterio
- **WHEN** se revisa una keyword objetivo en SE Ranking (base PE)
- **THEN** su dificultad es <= 40 o no tiene métrica, y su sparkline no decrece en los últimos 3 meses
