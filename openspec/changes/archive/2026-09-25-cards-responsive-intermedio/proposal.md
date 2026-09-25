## Why

Dos defectos probados en capturas a ~650px de ancho (layout móvil) + una zona ciega medida en código:

1. **Acordeón de Planes cortado (captura 16-34-25):** el preview colapsado (`max-height: 122px` + fade) corta el 4º item a la mitad y el CTA lo toca: se lee como contenido roto, no como preview. Opiniones (16-34-33) y Diferenciador (16-34-19) a ese ancho están sanos (1 columna).
2. **Zona ciega 769–991px:** `opiniones-grid` es el único grid que sigue en 3 columnas hasta 768px (services/pricing bajan a 2 en 992, cases y geo ya son 2 col). A 800px cada testimonio mide ~240px: apretujón seguro aunque sin captura.

## What Changes

- Preview del acordeón: `max-height` colapsado calibrado a exactamente 3 items (sin medios items) + aire bajo el fade para que el CTA no toque el texto. El expandido (`is-open`, 800px sin máscara) no se toca.
- Breakpoint intermedio ~900px: `opiniones-grid` a 2 columnas (1 vs 2 a decidir probando a 800/834px); si 2 col respira, 2, si no, 1.
- `geo-grid` verificado sano (2 col base): sin cambios. Proceso intacto.
- Bump `?v` de assets en las 8 páginas + `tools/build_pages.py` (Ño regenerar páginas), regenerar `styles.min.css`, registrar en `CHANGELOG.md`.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `planes-entrada`: el preview del acordeón en móvil muestra items completos, sin cortes a la mitad.
- `opiniones`: testimonios legibles en tablet (769–991px), sin apretujones.

## Impact

- `assets/css/styles.css` (acordeón móvil + media ~900px) + `styles.min.css`, `?v` en 8 páginas y `tools/build_pages.py`, `CHANGELOG.md`.
- Sin HTML, sin JS (el toggle `is-open` no se toca), sin SEO. Verificación a 650px (captura), 800/834/1024px y desktop sin cambios.
