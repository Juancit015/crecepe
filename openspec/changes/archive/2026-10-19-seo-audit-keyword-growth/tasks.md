# Tasks

## 1. Investigación y fijación de keywords (SE Ranking, base PE)

- [x] 1.1 Consolidar la lista final de keywords objetivo (primarias + secundarias + long-tail) con volumen, dificultad y sparkline en `openspec/changes/seo-audit-keyword-growth/keyword-set.md` y verificar que cada una cumple dificultad <= 40 o sin métrica y tendencia no decreciente.
- [x] 1.2 Asignar cada keyword a su página/FAQ y documentar la matriz en el mismo archivo; verificar que home, 3 fichas y 2 casos tienen al menos una keyword primaria.

## 2. Contenido on-page (index.html)

- [x] 2.1 Integrar keywords primarias ("paginas web peru", "agencia seo en lima") en title (<580px), H1 y primer H2 del home sin romper el eco de "vendiendo solo"/"todos los días"; verificar con medición de title y grep de headings.
- [x] 2.2 Añadir al menos una pregunta long-tail con keyword objetivo al FAQ del home (visible + schema FAQPage + llms.txt) y verificar sincronía 1:1.
- [x] 2.3 Actualizar llms.txt con las nuevas keywords y verificar ocurrencia idéntica.

## 3. Contenido on-page (fichas de servicio)

- [x] 3.1 Integrar keywords en presencia-digital.html ("creación de páginas web peru", "posicionamiento web peru") en title/H1/H2; verificar title <580px.
- [x] 3.2 Integrar keywords en tienda-online-bagisto.html ("tiendas virtuales peru") en title/H1/H2; verificar.
- [x] 3.3 Integrar keywords en automatizacion-ia.html ("automatización de procesos", "automatizar", "bot conversacional") en title/H1/H2; verificar.
- [x] 3.4 Añadir FAQ long-tail con keyword en cada ficha y sincronizar schema Service/FAQPage; verificar json.loads.

## 4. Casos y metadatos

- [x] 4.1 Integrar keyword de contexto ("paginas web peru") en las páginas de casos (az-consulting, novedades-chavez) en title/H1; verificar.
- [x] 4.2 Actualizar `lastmod` en sitemap.xml para todas las URLs modificadas; verificar fechas >= fecha de cambio.
- [x] 4.3 Regenerar subpáginas con `tools/build_pages.py` si se modificaron componentes compartidos; verificar build sin errores.

## 5. Validación y verificación

- [x] 5.1 Ejecutar validación de schema (json.loads en cada bloque JSON-LD) y verificar cero errores.
- [x] 5.2 Comparar FAQ visible vs schema FAQPage vs llms.txt (13+ pares) y verificar idénticos.
- [x] 5.3 Verificar ausencia de headings/anchors duplicados y title <580px en todas las páginas tocadas.
- [x] 5.4 Revisar que no haya keyword stuffing (conteo razonable por página) y confirmar diff final.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.