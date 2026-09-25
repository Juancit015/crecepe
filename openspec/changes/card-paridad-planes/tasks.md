## 1. Paridad visual con Planes en móvil

- [x] 1.1 Medir cada delta entre el aside móvil y `.pricing-card--featured` (padding, banda de precio, ritmo de lista, ancho del CTA) y registrar los valores a espejar
- [x] 1.2 Espejar las métricas en el bloque `@media (max-width: 992px)` de `assets/css/styles.css` y verificar en ~360px y ~768px que la card se siente idéntica a la de Planes
- [x] 1.3 Verificar orden QA → card → FAQ intacto, sin scroll horizontal y desktop sin cambios

## 2. Cierre

- [ ] 2.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py`, regenerar `styles.min.css`, registrar en `CHANGELOG.md` y commitear
