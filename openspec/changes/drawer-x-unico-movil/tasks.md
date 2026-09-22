## 1. Señal de estado + ocultado del toggle

- [x] 1.1 Alternar `menu-open` en `body` al abrir/cerrar el drawer en `assets/js/main.js` (apertura, `closeMenu` y todos sus llamados) y verificar con `node --check assets/js/main.js`
- [x] 1.2 Añadir regla móvil `body.menu-open .nav-toggle { visibility: hidden; }` en `assets/css/styles.css` (bloque `@media (max-width: 768px)` del drawer) y regenerar `styles.min.css` verificando llaves balanceadas

## 2. Verificación visual y funcional

- [x] 2.1 Abrir el drawer en móvil (claro y oscuro) y verificar que solo se ve la X izquierda, la hamburguesa no muta a X y el header no se mueve
- [x] 2.2 Cerrar por cada vía (X izquierda, velo, link, Escape, resize a desktop) y verificar que la hamburguesa de 3 líneas reaparece

## 3. Cierre

- [ ] 3.1 Documentar el fix en `CHANGELOG.md`, validar con `openspec validate --strict` y commitear
