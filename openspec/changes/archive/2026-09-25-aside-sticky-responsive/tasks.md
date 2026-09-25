## 1. Aside sticky responsive

- [x] 1.1 Ajustar `top` (~88-92px, medido contra navbar real), agregar `max-height: calc(100vh - top - 24px)` + `overflow-y: auto` + `overscroll-behavior: contain` + scrollbar fina en `.svc-aside` desktop, regenerar `styles.min.css`
- [x] 1.2 Probar a 1366×753 (captura evidencial: card completa en presencia/tienda/automatización), 1280×720 y viewport alto sin cambios; móvil ≤992px intacto, claro/oscuro

## 2. Lanzamiento y documentación

- [x] 2.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py` (Ño regenerar páginas), registrar en `CHANGELOG.md` y commitear
- [ ] 2.2 Sync del delta a `servicios-ficha`, archivar el change y reportar
