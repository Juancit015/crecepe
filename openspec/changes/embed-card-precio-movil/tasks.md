## 1. Card incrustada entre QA y FAQ

- [x] 1.1 Auditar en las 3 fichas que `.svc-main` no aporta caja visual (fondos/bordes/padding) y que QA y FAQ tienen selectores estables, y registrar el hallazgo
- [x] 1.2 Aplicar `display: contents` + `order` en el bloque `@media (max-width: 992px)` para intercalar el aside entre QA y FAQ como card completa estática (sin sticky ni fixed), retirando las reglas compactas del change anterior, y verificar el orden visual en las 3 fichas
- [x] 1.3 Verificar cero flotantes de compra, zona inferior libre, sin scroll horizontal y desktop (sidebar + sticky) intacto

## 2. Cierre

- [ ] 2.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py`, regenerar `styles.min.css`, registrar en `CHANGELOG.md` y commitear
