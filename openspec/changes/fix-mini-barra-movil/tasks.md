## 1. Diagnóstico y fix de la mini-barra

- [x] 1.1 Reproducir la barra gigante con caché limpia (Ctrl+F5) en las 3 fichas en viewport ≤992px, identificar cuál hipótesis del `design.md` (H1 caché, H2 contenido visible, H3 grid estirado, H4 breakpoint) es la causa y registrar el hallazgo
- [x] 1.2 Aplicar el fix mínimo según el diagnóstico en el bloque `@media (max-width: 992px)` de `assets/css/styles.css` (si H1 se confirma, omitir cambios de código), y verificar que la barra mide ≤92px en una fila con solo precio, plazo micro y CTA
- [x] 1.3 Verificar que el smart-hide (`scrolled-past`, `buybar-down`, `buybar-hidden`) funciona igual, que no hay scroll horizontal y que el desktop (sticky) queda intacto

## 2. Cierre

- [ ] 2.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py` (solo si hubo cambios de código o CSS), regenerar `styles.min.css`, registrar en `CHANGELOG.md` y commitear
