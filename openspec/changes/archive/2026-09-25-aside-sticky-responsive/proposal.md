## Why

En viewports de poca altura (laptop 13", captura 1366×753: viewport útil ~640px), la card sticky del aside (`top: 110px`, sin altura máxima) supera el espacio visible y su parte baja queda cortada e inalcanzable: un sticky más alto que el viewport nunca deja ver su fondo. La captura de tienda (1366×768, apenas 15px más alta) sí muestra la card completa, lo que confirma que el bug es de altura de ventana, no de página: las 3 cards miden casi igual (presencia/tienda ≈ 208 chars, automatización ≈ 187).

## What Changes

- `.svc-aside` en desktop: `top` ajustado a la navbar real (~88-92px en vez de 110px heredado) + `max-height: calc(100vh - top - aire inferior)` con `overflow-y: auto` y `overscroll-behavior: contain`: nunca se corta, y el scroll interno no atrapa la página.
- Scrollbar interna fina, coherente con `scrollbar-personalizada`.
- Sin cambios visuales en viewports altos ni en móvil (≤992px la card ya es estática en flujo).
- Bump `?v` de assets en las 8 páginas + `tools/build_pages.py` (editar el `?v` ahí también; Ño regenerar páginas: plantilla desactualizada), regenerar `styles.min.css`, registrar en `CHANGELOG.md`.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `servicios-ficha`: el aside sticky siempre muestra su contenido completo, con scroll interno solo cuando la altura no alcanza.

## Impact

- `assets/css/styles.css` (reglas `.svc-aside` desktop) + `styles.min.css`, `?v` en 8 páginas y `tools/build_pages.py`, `CHANGELOG.md`.
- Sin HTML estructural, sin JS, sin SEO. Verificación a 1366×753 (captura evidencial) y 1280×720 + móvil sin cambios.
