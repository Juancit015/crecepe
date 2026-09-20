## 1. Colapso elegante del FAQ

- [x] 1.1 Envolver las 5 `.faq-extra` en `.faq-extra-wrap` en `index.html` y agregar reglas CSS de expansión/colapso con `grid-template-rows`, retirando `faq-hidden`
- [x] 1.2 Actualizar el handler en `main.js`: alternar clase del wrapper y `scrollIntoView({ block: 'nearest' })` al contraer
- [x] 1.3 Verificar animación al revelar/contraer, permanencia en la sección, `prefers-reduced-motion` y vista sin JS (desktop + móvil), y validar con `openspec validate faq-colapso-elegante`
