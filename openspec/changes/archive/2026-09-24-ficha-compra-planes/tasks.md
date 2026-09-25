## 1. Aside espejo de Planes (3 fichas)

- [x] 1.1 Agregar h3 con nombre del plan + mini-lista de 3 entregables al aside de `servicios/presencia-digital.html`, reutilizando `pricing-badge` y checks existentes, y verificar que precio, plazo y link wa.me quedan intactos
- [x] 1.2 Replicar 1.1 en `servicios/tienda-online-bagisto.html` (Tienda) y `servicios/automatizacion-ia.html` (IA) con sus entregables, y verificar JSON-LD válido en las 3
- [x] 1.3 Igualar estilos desktop del aside a `.pricing-card--featured` (radio, sombra, hover lift) y verificar en claro/oscuro que badge, precio y CTA se leen AA

## 2. Mini-barra móvil

- [x] 2.1 Compactar la barra móvil a ≤92px en una fila (precio + CTA, sin badge/nota) conservando `scrolled-past`, `buybar-down` y `buybar-hidden`, y verificar que no tapa contenido al hacer scroll
- [x] 2.2 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py`, regenerar `styles.min.css`, registrar en `CHANGELOG.md` y commitear
