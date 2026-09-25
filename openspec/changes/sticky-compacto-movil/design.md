## Context

Ver `proposal.md` (Why). Estado: en `@media (max-width: 992px)` el aside es `position: fixed` con grid de 2 columnas + show/hide por JS (`buybar-*` en `main.js`). En DOM el aside va ÚLTIMO (tras `.svc-main`, que contiene intro→…→FAQ) dentro del grid `.svc-layout` de 1 columna en móvil; `.page-related` y footer están fuera del grid. El header es fijo (~70px).

## Goals / Non-Goals

**Goals:**
- Card compacta sticky en flujo que acompaña sin tapar y libera la zona inferior.
- Retirar el JS `buybar` en fichas (menos código, cero reflows de show/hide).

**Non-Goals:**
- Cambios en desktop, copy, markup o schemas; freno exacto antes del FAQ (viaja hasta fin del layout, ver trade-off).

## Decisions

- **`order: -1` al aside + `order` explícito a `.svc-main` en el media 992px**: sube la card tras el hero/intro sin tocar el DOM. Contrapartida aceptada: precio antes de la propuesta de valor (estándar en e-commerce móvil).
- **Card compacta en móvil**: se ocultan badge, mini-lista y nota (ya ocultos hoy); se muestran h3 compacto, precio, plazo micro y CTA de ancho natural (`align-self: center`, sin estirarse al `1fr`). Una card full de ~500px con sticky taparía el contenido al pegarse: por eso compacta sí o sí.
- **`position: sticky; top` bajo el header (~76px)**: nativo, componible, sin JS. La parada es automática (fin de `.svc-layout`); `.page-related` fuera del grid garantiza que nunca la cubre.
- **Retirar `buybar-*`**: quitar clases y listener en `main.js` para las fichas (guardar por si el home u otra página los usa; si solo las fichas, eliminar). `scrolled-past` puede seguir usándose para otros efectos si existe.
- **No frenar exacto antes del FAQ**: el FAQ vive dentro de `.svc-main`; sacarlo del layout sería markup ×3 fichas + revisar `build_pages.py`. Se viaja hasta fin del layout (incluye FAQ). Decisión consciente, documentada.

## Risks / Trade-offs

- [Riesgo] Card compacta aun así tapa ~150px al pegarse → Mitigación: es lo estándar (sub-header sticky); el contenido pasa por debajo y nada queda permanentemente oculto. Verificar alto final ≤180px.
- [Riesgo] `buybar` usado también fuera de fichas → Mitigación: auditar usos en `main.js` antes de borrar; si hay otros, solo desactivar en fichas.
- [Riesgo] `overflow` ancestral (lección de `fix-mini-barra-movil`) → Mitigación: con `clip` ya en raíz, el sticky funciona; verificar igual.
- Caché de GitHub Pages (10 min): Ctrl+F5 tras el push.
