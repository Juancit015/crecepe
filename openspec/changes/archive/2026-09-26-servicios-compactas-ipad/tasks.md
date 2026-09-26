## 1. Variante tablet compacta

- [x] 1.1 Agregar variante tablet en `assets/css/styles.css`: apilada compacta 481–1024px (foto ~140px, paddings/fuentes/gaps reducidos, teléfonos ≤480px intactos) y verificar a 744/820/1024px contra la captura de referencia, contenido completo sin recortes
- [x] 1.2 Forzar overlay de Servicios siempre visible en 481–1024px como caption permanente (sin `:hover`), legible en claro y oscuro, y verificar que en desktop sigue al hover y en teléfono sigue limpio
- [x] 1.3 Regenerar `styles.min.css` con clean-css, validar `node --check assets/js/main.js` no tocado, y verificar capturas 744/820/1024 en claro + oscuro + `prefers-reduced-motion`

## 2. Cierre

- [x] 2.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py` (Ño regenerar páginas), registrar en `CHANGELOG.md` y commitear
- [x] 2.2 Sincronizar specs (`overlay-servicios`, `ux-movil-compacto`), validar `--strict`, archivar y reportar commits
