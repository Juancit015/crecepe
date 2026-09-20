## 1. Velo medio en modo oscuro

- [x] 1.1 Subir velo a `rgba(8,15,35,0.60→0.50)` en `body.dark-mode .hero-photo-bg` y verificar foto atenuada sin opacarse, con animación heroZoom intacta
- [x] 1.2 Subir velo a `rgba(6,13,31,0.60→0.50)` en `body.dark-mode .geo-section` y verificar foto nocturna visible con texto blanco legible
- [x] 1.3 Subir velo a `rgba(6,13,31,0.60→0.50)` en `body.dark-mode .opiniones-section.has-bg` y verificar foto de oficina atenuada

## 2. Sombra de texto en oscuro sobre foto

- [x] 2.1 Aplicar `text-shadow` sutil al H1 del hero en oscuro y verificar título blanco nítido sobre la foto
- [x] 2.2 Aplicar `text-shadow` sutil a títulos/subtítulos de GEO y Opiniones en oscuro y verificar contraste sin cambiar colores base

## 3. Verificación visual y contraste

- [x] 3.1 Revisar hero, GEO y Opiniones en claro (velo 0.35 intacto) y oscuro (velo 0.60 + sombras), desktop + móvil, comparando con las capturas de referencia del 16-09
- [x] 3.2 Verificar que ninguna opacidad sobre foto pase de 0.35 en claro ni 0.60 en oscuro, que no se tocó `.hero::before`, `.hero-grid-bg`, HTML ni `tools/build_pages.py`, y validar con `openspec validate quitar-capa-fondos`
