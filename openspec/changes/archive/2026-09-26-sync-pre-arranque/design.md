## Context

Ver `proposal.md` (Why). Estado verificado por grep el 2026-09-26: `priceRange "S/ 500 - S/ 900"` ×4 en `index.html` contra `"S/ 149 - S/ 2,990"` en el spec `seo-contenido`; 10/13 FAQs con wording distinto entre index y `llms.txt`; `sitemap.xml` con `lastmod 2026-09-23` y cambios hasta el 26; `build_pages.py` sin los 7 bloques enriquecidos. Push de los 34 commits ya completo. Sitio estático en GitHub Pages: sin migraciones ni rollback más allá de `git revert`.

## Goals / Non-Goals

**Goals:**

- Dejar una sola fuente de verdad por dato (FAQ visible, rango de precios, fecha de sitemap).
- Blindar fichas y casos contra regeneraciones destructivas.
- Cerrar con docs (`README`, `CHANGELOG`) que describan lo publicado.

**Non-Goals:**

- Cambios visuales, de layout o de copy persuasivo (solo sincronización).
- Rediseñar el generador ni migrar el deploy.
- Nuevas preguntas FAQ ni nuevas páginas.

## Decisions

- **Generador: candado ahora, sync después.** Congelar el uso sobre páginas publicadas (aviso ya existe en su header; se refuerza con el spec `generador-seguro`) en vez de reescribir su plantilla en este change. Alternativa descartada: sincronizar la plantilla ya — es trabajo grande (7 bloques + héroes + contadores) y bloquea lo urgente. El sync queda como change futuro.
- **Fuente de verdad del FAQ: el index visible.** El schema y `llms.txt` se adaptan al visible, Ño al revés, porque es lo que Google ya indexó y los usuarios ya ven.
- **`priceRange`: el spec manda salvo decisión explícita.** Valor por defecto `"S/ 149 - S/ 2,990"` (incluye mantenimiento S/ 149). Si Juan confirma otro rango en la puerta de decisión (primera tarea), código y spec cambian juntos.
- **Sitemap: bump manual por change.** Sin CI en GitHub Pages; el `lastmod` se actualiza a mano en el mismo commit del cambio. Alternativa descartada: automatizar con Actions — sobredimensionado para 8 URLs.

## Risks / Trade-offs

- [Riesgo] Unificar 10 wordings puede mover keywords que hoy rankean → Mitigación: se conserva el texto del index (el ya indexado); solo se adapta `llms.txt`.
- [Riesgo] Cambiar `priceRange` a 149-2990 confunde si el "hasta" real Ño es 2,990 → Mitigación: puerta de decisión con Juan antes de tocar schemas; el número final queda documentado.
- [Riesgo] El candado del generador se olvida y alguien lo corre → Mitigación: spec + aviso en header + regla en `CHANGELOG`; el `git diff` obligatorio lo ataja todo.

## Migration Plan

Ño aplica migración (sitio estático). Despliegue: push a `main` = publicado por Pages. Rollback: `git revert` del commit de sync. Orden de aplicación: decisión de rango → schemas → FAQ/llms → generador (candado) → sitemap/README → CHANGELOG.

## Open Questions

- Ninguna pendiente: Juan confirmó el 2026-09-26 que el rango real es S/ 500 - S/ 900 (proyectos Presencia/Automatización); spec y código alineados a ese valor.
