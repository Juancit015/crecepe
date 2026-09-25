## 1. Ficha a ancho completo en desktop

- [x] 1.1 Pasar `.svc-layout` a 1 columna en desktop y extender el mecanismo `display: contents` + `order` (o mover markup si falla), y verificar el orden QA → card → FAQ en las 3 fichas
- [x] 1.2 Contener la card desktop (`max-width` + centrada, a decidir contra el home) retirando el sticky base, y verificar que respira como las de Planes
- [x] 1.3 Verificar lectura a 1140px, sin scroll horizontal, móvil intacto y specs en conflicto identificados para el archive

## 2. Cierre

- [ ] 2.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py`, regenerar `styles.min.css`, registrar en `CHANGELOG.md` y commitear
