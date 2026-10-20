# Proposal

## Why

Las vistas del sitio crecepe.com llevan más de 10 días sin crecer. El dominio aún no tiene keywords indexadas en SE Ranking (sitio nuevo/recién publicado), por lo que la visibilidad orgánica actual es nula y el contenido existente no está alineado a términos con demanda real y tendencia creciente en Perú. Se necesita una auditoría SEO que, usando el MCP de SE Ranking (base PE), identifique palabras clave con crecimiento ("aumento") y términos similares de baja dificultad, y las integre al contenido, FAQ, schema y metadatos para empezar a captar tráfico.

## What Changes

- Auditoría SEO on-page y de contenido del sitio (index + 3 fichas de servicio + 2 casos + legales) contra las keywords con mayor potencial en Perú.
- Incorporación de términos objetivo con tendencia creciente (ej. "agencia seo en lima", "automatizar", "automatización de procesos", "bot conversacional", "paginas web peru", "tiendas virtuales peru", "diseño web peru", "posicionamiento web peru", "creación de páginas web peru", "tienda virtual peru") en títulos, H1/H2, cuerpo, anchors y FAQ.
- Ampliación del FAQ del home y de las fichas de servicio con preguntas long-tail derivadas de la investigación (intención informacional/comercial).
- Actualización de `llms.txt`, JSON-LD (FAQPage, Service, ProfessionalService) y `sitemap.xml` (lastmod) para reflejar el nuevo contenido.
- Nuevo spec `seo-palabras-clave` que formaliza los requisitos de cobertura de keywords y su trazabilidad.

## Capabilities

### New Capabilities
- `seo-palabras-clave`: cobertura de palabras clave objetivo (con tendencia creciente en PE) en contenido, headings, FAQ, schema y sitemap, con trazabilidad por keyword.

### Modified Capabilities
- (ninguna) — los requisitos existentes de `seo-contenido` (title, H1, headings, anchors, FAQ transaccional, schema, sitemap) se mantienen; esta change agrega una capa de keywords encima sin alterarlos.

## Impact

- Archivos: `index.html`, `servicios/*.html`, `casos/*.html`, `llms.txt`, `sitemap.xml`.
- Sin cambios de backend ni de build pipeline (`tools/build_pages.py` se reutiliza si se regeneran subpáginas).
- Dependencia externa: SE Ranking (base PE) para investigación; datos tratados como estimaciones.