## Why

Las fotos generadas para las subpáginas de servicios traen degradado azulado, y el texto del `.page-hero` (migas, título y descripción en azul marino) pierde contraste sobre ese fondo. La propuesta es pasar ese texto a blanco en los 3 archivos, como ya hacen el hero principal y la sección GEO sobre foto.

## What Changes

Solo `assets/css/styles.css` (sin tocar HTML, los 3 archivos comparten `.page-hero`):
- Migas (`breadcrumbs`), título (`h1`) y descripción (`.page-hero-sub`) en blanco con sombra sutil, en modo claro y oscuro, acotados a `.page-hero.has-bg` (las fotos aún no están cableadas y casos/legales usan `.page-hero` con fondo plano).
- El `span` resaltado del título pasa a cian claro (`accent-light`) en ambos temas para que destaque sobre la foto.
- Supuesto registrado: blanco en ambos temas (no solo claro), porque el fondo fotográfico manda sobre el tema.

## Capabilities

### New Capabilities

- `hero-servicios`: texto del héroe de subpáginas de servicios en blanco legible sobre foto, en ambos temas.

### Modified Capabilities

- Ninguna (ninguna capacidad existente regula el texto del `.page-hero`).

## Impact

- Afectado: reglas `.page-hero` en `styles.css`. Aplica a las 3 páginas de servicios y a futuro a casos/legales si usan `.page-hero` (mismo fondo fotográfico previsto).
- Sin cambios de HTML, textos, velos ni generador.
