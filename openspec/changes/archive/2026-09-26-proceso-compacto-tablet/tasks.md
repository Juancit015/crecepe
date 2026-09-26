## 1. Variante compacta de Proceso en tablet

- [x] 1.1 Agregar media 481–768px en `assets/css/styles.css` con Proceso compacto (gaps/paddings de pasos y timeline reducidos, header ajustado) y verificar a 768px que los 6 pasos van uniformes con el resto de secciones, sin recortes
- [x] 1.2 Compactar `#proceso .pricing-toggle` en 481–768px (flecha junto a la etiqueta, área táctil 44px, rotación intacta) y verificar que Planes no cambia a 768px
- [x] 1.3 Regenerar `styles.min.css` con clean-css, validar `node --check assets/js/main.js` no tocado, y verificar capturas 768/820 en claro + oscuro, 360 intacto y `prefers-reduced-motion`

## 2. Cierre

- [ ] 2.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py` (Ño regenerar páginas), registrar en `CHANGELOG.md` y commitear
- [x] 2.2 Sincronizar specs (`proceso-aire-movil`, `proceso-detalle`), validar `--strict`, archivar y reportar commits
