## 1. Híbrido Airbnb en móvil

- [x] 1.1 Devolver el aside a card completa estática en flujo (quitar sticky viajero y versión compacta) decidiendo slot (tras Prueba o QA-FAQ), y verificar orden e intro libre en las 3 fichas
- [x] 1.2 Agregar markup `.buybar` (precio + CTA) ×3 fichas con CSS fixed ≤64px en thumb zone, y verificar que no existe sin JS
- [x] 1.3 Conectar observers (card → show/hide, related/footer → retirada) + desplazamiento de flotantes por `body.buybar-on`, y verificar aparición post-card, retirada al final y cero choques
- [x] 1.4 Verificar `prefers-reduced-motion`, sin scroll horizontal, desktop intacto y consola limpia

## 2. Cierre

- [ ] 2.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py`, regenerar `styles.min.css`, registrar en `CHANGELOG.md` y commitear
