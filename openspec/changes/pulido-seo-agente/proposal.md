## Why

Un agente externo dejó 6 recomendaciones; tras auditarlas se aplican
4 + 1 ajuste propio: sincronizar el generador (evita romper 5
páginas con precios viejos), refrescar `lastmod`, compactar el hero
móvil, adelantar confianza con enlace a casos y quitar visuales de
rating para limpiar los avisos de Review snippets. Se excluyen
schema de reseñas propias (spam) y botón fijo (decisión previa +
redundante con el dial).

## What Changes

- `tools/build_pages.py`: precios 500/700/900 en titles, descs,
  schema y prefills + 5 tags OG en el HEAD generado; se verifica
  con `git diff` que regenerar no toca lo publicado.
- `sitemap.xml`: `lastmod` a fecha de deploy.
- Hero móvil más corto: título + 2 CTAs visibles sin scroll,
  tarjeta del especialista después (solo CSS móvil).
- Línea de confianza descartada a pedido (no gustó; aporte marginal).
- Testimonios sin visuales de rating (fuera estrellas SVG y
  "5 de 5"); textos, nombres y proyectos intactos.
- Excluidos: punto 2 (reviews propias) y punto 5 (botón fijo).

## Capabilities

### New Capabilities

- (none)

### Modified Capabilities

- `seo-contenido`: enlace interno hero→casos y testimonios sin
  formato de reseña (contraste con "Sin duplicados": la línea de
  confianza no duplica anchors existentes).

## Impact

- `tools/build_pages.py`, `sitemap.xml`, `index.html` (línea
  confianza + testimonios), CSS móvil del hero + minificado.
- Commits separados por punto para revertir fácil.
- Sin cambios de copy comercial, precios visibles, JS ni desktop.
