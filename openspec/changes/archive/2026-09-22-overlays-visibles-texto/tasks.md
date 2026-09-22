## 1. Textos + caption móvil

- [x] 1.1 Ampliar a 2 líneas los 3 `service-overlay <p>` en `index.html` (beneficio + detalle) y verificar HTML válido
- [x] 1.2 Convertir overlays en caption estática bajo la foto en `max-width:768px` (quita `display:none`, `position:static`, texto legible claro/oscuro), regenerar `styles.min.css` y verificar llaves

## 2. Hover PC + cierre

- [x] 2.1 Verificar hover real en PC para casos y servicios; si el cartel no baja, corregir con el cambio mínimo (fallback opacidad) y re-verificar
- [x] 2.2 Documentar en `CHANGELOG.md`, validar con `openspec validate --strict` y commitear
