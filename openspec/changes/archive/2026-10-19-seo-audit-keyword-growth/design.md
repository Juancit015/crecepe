# Design

## Context

Sitio estático (HTML/CSS/JS) de CrecePE, multi-página, con `tools/build_pages.py` para regenerar subpáginas a partir del index. SEO ya cubierto por `seo-contenido` (title, H1, headings, anchors, FAQ, schema, sitemap). Este change añade una capa de keywords con demanda real en Perú (base PE de SE Ranking) sin alterar esa base. Datos de SE Ranking son estimaciones; el dominio aún no tiene keywords indexadas (sitio nuevo).

## Goals / Non-Goals

**Goals:**
- Integrar keywords objetivo de baja dificultad y tendencia creciente en Perú en contenido, FAQ, schema y sitemap.
- Mantener coherencia con `seo-contenido` (title <580px, H1 eco, sin duplicados, schema válido, llms.txt 1:1, sitemap lastmod).
- Reutilizar `build_pages.py` para regenerar subpáginas si se tocan navbar/footer.

**Non-Goals:**
- No crear blog ni nuevas URLs (fuera de scope de esta change).
- No cambios de backend, analytics ni infraestructura.
- No prometer rankings ni tráfico.

## Decisions

- **Keyword set primario (PE, dificultad <= 40, tendencia creciente/estable):** "agencia seo en lima" (590, diff 25, creciente), "automatizar" (480, diff 18, nuevo), "automatización de procesos" (590, diff 28, creciente), "bot conversacional" (590, diff 35, creciente), "paginas web peru" (170, diff 26, estable), "diseño web peru" (110, diff 46 — solo si no hay mejor), "posicionamiento web peru" (20, diff 26, estable), "creación de páginas web peru" (20, diff 33, nuevo), "tiendas virtuales peru" (260, diff 53 — secundaria), "que es un chatbot" (390, diff 45 — FAQ).
  - Alternativa: usar base ES (España) — descartada por baja representatividad para Perú.
- **Asignación por página:** home → "paginas web peru" + "agencia seo en lima"; ficha presencia-digital → "creación de páginas web peru" + "posicionamiento web peru"; ficha tienda-online-bagisto → "tiendas virtuales peru"; ficha automatización-ia → "automatización de procesos" + "automatizar" + "bot conversacional"; casos → "paginas web peru" (contexto).
- **FAQ long-tail:** añadir preguntas que contengan la keyword objetivo sin duplicar las existentes; mantener sincronía visible/schema/llms.txt.
- **Schema:** actualizar FAQPage con nuevas preguntas; no alterar priceRange/paymentAccepted (ya validados).
- **Sitemap:** actualizar lastmod de URLs tocadas a la fecha de publicación.

## Risks / Trade-offs

- [Keyword sin volumen suficiente en PE] → Usar términos con al menos 20/mes y tendencia creciente; evitar los de volumen 0.
- [Dificultad alta en algunas keywords] → Priorizar las de diff <= 40; dejar las de diff > 40 como secundarias en FAQ/llms.txt.
- [Riesgo de keyword stuffing] → Integrar keywords de forma natural en H2/párrafos/FAQ, no repetir en cada bloque.
- [Desalineación visible/schema/llms.txt] → Validar con script de comparación antes de publicar.

## Migration Plan

1. Aplicar cambios de contenido en index + fichas + casos.
2. Regenerar subpáginas con `tools/build_pages.py` si se tocaron componentes compartidos.
3. Actualizar llms.txt, JSON-LD y sitemap.xml.
4. Validar: json.loads de schemas, comparación FAQ visible/schema/llms.txt, title <580px, sin headings duplicados.
5. Commit y deploy.

## Open Questions

- (ninguna que bloquee; la lista final de keywords puede ajustarse en apply según validación on-page).