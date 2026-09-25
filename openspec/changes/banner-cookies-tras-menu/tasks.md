## 1. Fix de apilado

- [x] 1.1 Bajar `.consent-banner` a `z-index: 999` en `assets/css/styles.css` con comentario del mapa de apilado, regenerar `styles.min.css` y verificar que el drawer (1000) y la hamburguesa (1001) quedan por encima
- [x] 1.2 Probar en móvil 360px: con banner visible, abrir la hamburguesa (drawer y X completos y clicables); cerrar y confirmar Aceptar/Rechazar responden; repetir en modo oscuro

## 2. Lanzamiento y documentación

- [ ] 2.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py`, registrar en `CHANGELOG.md` y commitear
- [ ] 2.2 Documentar todo al terminar: sync del delta a `drawer-velo`, archivar el change y reportar
