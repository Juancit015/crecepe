## 1. Revelado progresivo del FAQ

- [x] 1.1 Marcar las 5 `.faq-item` tras el botón con `faq-extra` + `hidden` en `index.html` y agregar regla CSS de oculto
- [x] 1.2 Reescribir el handler `faqToggleAll` en `main.js`: alternar visibilidad de `.faq-extra` y etiqueta (Ver todas ↔ Ver menos), sin tocar respuestas salvo cerrar las abiertas al ocultar
- [x] 1.3 Verificar toggle, acordeón individual y vista sin JS (desktop + móvil), revisar `tools/build_pages.py` y validar con `openspec validate faq-revelado-progresivo`
- [x] 1.4 Reubicar `.faq-more-wrap` al final de `.faq-list` al revelar y devolverlo tras la 6.ª al ocultar; verificar posiciones en ambos temas y revalidar
