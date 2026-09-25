## 1. Card entera sin scroll

- [x] 1.1 Retirar `max-height`/`overflow-y`/`overscroll`/`scrollbar-width` de `.svc-aside`, agregar media `(max-height: 800px)` con aside estático completo (conservar `top: 88px`), regenerar `styles.min.css`
- [x] 1.2 Probar a 1366×753 (card entera en flujo, cero scroll interno en las 3 fichas) y viewport alto (sticky intacto); móvil intacto, claro/oscuro

## 2. Lanzamiento y documentación

- [x] 2.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py` (Ño regenerar páginas), registrar en `CHANGELOG.md` y commitear
- [ ] 2.2 Sync (reemplazar requirement en `servicios-ficha`), archivar el change y reportar
