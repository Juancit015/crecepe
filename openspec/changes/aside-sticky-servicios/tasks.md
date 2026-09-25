## 1. Sticky del aside en desktop

- [x] 1.1 Verificar en las 3 fichas que `.related` está fuera de `.svc-wrap` y que ningún ancestro del aside tiene `overflow` que rompa el sticky, y registrar el hallazgo
- [x] 1.2 Cambiar `overflow-x: hidden` por cascada `hidden` + `clip` en `html` y `body` en `assets/css/styles.css` (revive el sticky existente sin tocar el aside), y verificar que la card acompaña el scroll en desktop y se detiene antes de "También te puede interesar" sin taparla ni tapar el footer
- [x] 1.3 Verificar que en móvil (≤992px) el aside sigue siendo mini-barra sin sticky, que el smart-hide (`buybar-*`) funciona igual que antes y que no hay scroll horizontal (marquesinas recortadas igual) en desktop ni móvil

## 2. Cierre

- [ ] 2.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py`, regenerar `styles.min.css`, registrar en `CHANGELOG.md` y commitear
