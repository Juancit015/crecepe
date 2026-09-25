## 1. Card compacta sticky en móvil

- [x] 1.1 Reordenar en el bloque `@media (max-width: 992px)`: aside con `order` antes de `.svc-main`, versión compacta (h3 + precio + plazo + CTA ancho natural; badge/mini/nota ocultos) y `position: sticky` bajo el header, y verificar que acompaña la lectura y se suelta antes de "También te puede interesar"
- [x] 1.2 Retirar el mecanismo `buybar-*` en las fichas (auditar `main.js`: si solo las fichas lo usan, eliminar; si hay otros usos, desactivar solo ahí), y verificar que no hay parpadeos ni errores en consola
- [x] 1.3 Verificar alto de la card pegada ≤180px, zona inferior libre (↑ y WhatsApp sin choques), sin scroll horizontal y desktop (sticky) intacto

## 2. Cierre

- [x] 2.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py`, regenerar `styles.min.css`, registrar en `CHANGELOG.md` y commitear
