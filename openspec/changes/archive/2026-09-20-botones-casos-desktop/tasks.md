## 1. Fijar hover de botones de casos

- [x] 1.1 Quitar `gap: 13px` de `.case-link:hover` y sacar `gap` de su `transition` en `assets/css/styles.css`
- [x] 1.2 Verificar en desktop a pantalla completa (ambos temas): hover en "Ver caso Novedades Chávez" sin que "Ver tienda en vivo" salte abajo; si aún roza el wrap, reforzar con `flex-wrap: nowrap` en `.case-actions` solo en desktop; validar con `openspec validate botones-casos-desktop`
