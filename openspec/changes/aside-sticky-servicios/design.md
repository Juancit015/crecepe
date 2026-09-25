## Context

Ver `proposal.md` (Why). Estado actual: `.svc-aside` YA declara `position: sticky; top: 110px` dentro del grid `.svc-layout` (con `align-items: start`), pero el sticky no funciona en la práctica: `overflow-x: hidden` en `html` y `body` (puesto por las marquesinas) convierte a la raíz en contenedor de scroll y mata todo sticky descendente. La sección "También te puede interesar" (`.page-related`) y el footer están fuera del grid. Solo desktop: en móvil el aside es mini-barra fija (`position: fixed` pisa al sticky) y no se toca.

## Goals / Non-Goals

**Goals:**
- Aside visible acompañando la lectura en desktop con CSS nativo, sin JS.
- El aside se detiene de forma natural al terminar su columna (antes de "También te puede interesar").

**Non-Goals:**
- Cambios visuales al aside; cambios en móvil; cambios de markup salvo que la verificación lo exija; JS de scroll.

## Decisions

- **`overflow-x: clip` tras cada `overflow-x: hidden` en `html` y `body`** (cascada: `hidden` primero como fallback, `clip` después). `clip` recorta igual las marquesinas pero NO crea contenedor de scroll, así el sticky existente revive sin tocar nada más. Alternativa descartada: quitar el overflow y cazar desbordes uno por uno — riesgo de scroll horizontal en móvil, más trabajo. JS descartado: gasta main-thread y ya eliminamos reflows en ese path (`f2c0707`).
- **Parada automática por contenedor** (verificada 1.1): el sticky vive y muere dentro de `.svc-layout`; como `.page-related` y footer están fuera del grid, el aside se frena solo antes de "También te puede interesar".
- **Convivencia con hover lift**: el `transform: translateY(-8px)` de `ficha-compra-planes` aplica sobre el sticky sin romperlo (el transform es en hover, el sticky es posición). Sin transiciones en el posicionamiento, compatible con `prefers-reduced-motion`.
- **Sin `max-height` forzado**: el aside con mini-lista (~500px) cabe en viewports desktop típicos; forzar scroll interno complicaría el CTA. Se documenta como riesgo aceptado.

## Risks / Trade-offs

- [Riesgo] `.related` dentro del wrap en alguna ficha → el aside la invadiría → Mitigación: verificar estructura en las 3 páginas antes del CSS; ajustar solo si hace falta.
- [Riesgo] Viewport desktop bajo (<600px alto) con aside más alto que la ventana → parte inferior oculta hasta llegar al final → Mitigación: aceptado; el CTA queda visible al inicio y al final del recorrido. Alternativa (scroll interno) descartada por complejidad.
- [Riesgo] `overflow: clip` ignorado en navegadores muy viejos → quedan con `hidden` (sticky roto pero sin scroll horizontal, estado actual) → Mitigación: la cascada lo cubre; 2026 irrelevante.
- Caché de GitHub Pages (10 min): verificar con Ctrl+F5 tras el push.
