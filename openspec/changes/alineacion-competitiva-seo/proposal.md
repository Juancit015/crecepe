## Why

Los 4 competidores que rankean primero (digitalmarketing.pe, arenavisual.com, siswebperu.com, creativadesign.pe) comparten patrones que Google y los usuarios ya premian: intención de búsqueda explícita en fichas, FAQ visible, prueba social con datos y contacto humano. CrecePE los cubre a medias. Alinear esos patrones con contenido propio —sin copiar textos ni keyword stuffing— sube coincidencias con intención y conversión sin riesgoSEO.

## What Changes

1. Ficha Presencia Digital: bloque "¿Qué incluye?", tiempos de entrega y autoadministrable.
2. Ficha Tienda Online: bloque incluye (catálogo, Yape/Plin, WhatsApp, envíos) + nota honesta "pasarela con tarjeta a cotizar".
3. FAQ ampliado en home: 4 preguntas nuevas (precio web, precio tienda, tiempos, autogestión) + schema FAQPage extendido.
4. Contacto humano: "Habla con Juan por WhatsApp" + zona visible "Paiján, La Libertad · remoto todo el Perú" (sin dirección exacta visible por privacidad).
5. Casos enriquecidos con datos reales (fecha, tecnología, alcance, tiempos). Cero métricas inventadas.
6. (IDEA EXTRA, no se aplica ahora) Blog mínimo viable con 3 posts enlazando a servicios.

## Capabilities

### New Capabilities
- `casos-contenido`: las páginas de caso muestran datos reales del proyecto (fecha, tecnología, alcance, funciones, tiempos) sin métricas inventadas.

### Modified Capabilities
- `servicios-ficha`: las fichas responden intención de búsqueda (qué incluye, tiempos, autogestión, pagos).
- `seo-contenido`: el FAQ de home cubre preguntas de precio/tiempos/gestión con schema FAQPage válido.
- `contacto-card`: el contacto muestra persona con nombre y zona de atención visible, sin exponer dirección exacta.

## Impact

- Archivos: `index.html` (FAQ, contacto), `servicios/presencia-digital.html`, `servicios/tienda-online-bagisto.html`, `casos/*.html`, `tools/build_pages.py` (réplica de cambios si aplica), `CHANGELOG.md`.
- SEO: solo contenido propio sumado a URLs existentes; sin cambios de titles, H1, URLs ni precios. Riesgo mínimo y reversible por commit.
- No cambia: precios S/ 500/700/900, H1/titles, política de hosting a nombre del cliente, dirección exacta solo en schema.
