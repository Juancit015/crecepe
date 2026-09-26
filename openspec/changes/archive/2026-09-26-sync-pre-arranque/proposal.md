## Why

Exploración completa del sitio encontró 5 frentes desincronizados que bloquean cambios seguros. El push (34 commits) ya se completó; quedan 4 frentes que deben resolverse antes de cualquier cambio de contenido o layout, porque el generador puede destruir trabajo publicado y la divergencia FAQ/llms/schema degrada el GEO que el sitio promete.

## What Changes

- **Candado o sincronización de `tools/build_pages.py`**: el generador Ño reproduce 7 bloques vivos en producción (Prueba real, Cómo lo hacemos, ¿Es para ti?, `qa-check`, héroes con foto, contadores, Ficha del proyecto en casos). Se define una regla: o se congela su uso con verificación obligatoria, o se sincroniza su plantilla con lo publicado.
- **Unificación FAQ index ↔ `llms.txt`**: 10 de 13 preguntas difieren en wording entre lo que Google indexa y lo que las IAs leen. Se unifica texto 1:1 (pregunta y respuesta).
- **Resolución `priceRange`**: el spec `seo-contenido` exige `"S/ 149 - S/ 2,990"` pero el código vivo dice `"S/ 500 - S/ 900"` (commit `68ce883`). Se decide el rango real y se alinean código y spec.
- **Higiene de cierre**: `sitemap.xml` con `lastmod 2026-09-23` (cambios hasta el 26) y `README.md` con datos viejos (dice 11 FAQs, son 13; habla de estrellas ya retiradas).

## Capabilities

### New Capabilities

- `generador-seguro`: contrato de preservación del generador — ninguna corrida de `build_pages.py` puede eliminar ni degradar bloques enriquecidos publicados; toda regeneración se verifica con `git diff` limpio antes de aceptar.

### Modified Capabilities

- `seo-contenido`: sincronía FAQ visible ↔ schema ↔ `llms.txt` (wording 1:1), `priceRange` único y real en las 8 páginas, y `lastmod` del sitemap al día con cada cambio publicado.

## Impact

- `tools/build_pages.py` (candado o plantilla sincronizada).
- `index.html`, `servicios/*.html`, `casos/*.html` (schemas y contenido FAQ).
- `llms.txt`, `sitemap.xml`, `README.md`, `CHANGELOG.md`.
- Specs: nuevo `generador-seguro`, delta en `seo-contenido`.
- Sin cambios visuales ni de layout: sincronización de contenido y metadatos.
