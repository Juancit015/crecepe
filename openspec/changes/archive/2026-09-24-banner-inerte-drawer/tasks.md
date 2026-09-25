## 1. Banner inerte con drawer abierto

- [x] 1.1 Agregar regla `body:has(.nav-links.open) .consent-banner` con `filter: brightness(0.4)` + `pointer-events: none` (+ `filter` en la transición), regenerar `styles.min.css` y verificar apilado intacto
- [x] 1.2 Probar en móvil 360px: abrir la hamburguesa (banner oscurecido, Aceptar/Rechazar no responden); cerrar (banner normal e interactivo); repetir en modo oscuro

## 2. Lanzamiento y documentación

- [x] 2.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py`, registrar en `CHANGELOG.md` y commitear
- [ ] 2.2 Sync del delta a `drawer-velo`, archivar el change y reportar
