## Why

Un agente externo resolvió la mayoría de los problemas responsive (11 archivos sin commitear, 32 min de trabajo verificado en 8 páginas sin overflow ≥500px). Su CSS cambia de filosofía en móvil (contenido completo en vez de podas) y agrega bandas 769–1100, 993–1100 y desktop-bajo que convergen con `responsive-intermedio` (aún activo). Sin integración, el trabajo se pierde o deriva: hay que revisarlo, commitearlo, reconciliar los specs que contradice y archivar los dos changes.

## What Changes

- **Revisión y commit** del CSS del agente (bandas medias, toques 44px, reveals con `reduced-motion`, mobile sin podas) tras verificar que Ño rompe desktop ni los fixes previos (cantos 600px, 62ch, candados).
- **Unificación `?v=`**: CSS en 53 y JS en 42 → un solo valor en las 8 páginas + generador.
- **Reconciliación de specs**: `ux-movil-compacto` pasa de "podar en móvil" a "contenido completo en móvil" (lo que el código hace desde hace varios changes); `cards-centradas` confirma topes vigentes tras las bandas del agente.
- **Cierre doble**: archivar `responsive-intermedio` (deltas ajustados a lo que quedó) y este change, con entrada CHANGELOG.
- Ño se agregan bandas nuevas ni se rediseña nada: integrar lo existente.

## Capabilities

### New Capabilities

(Ninguna.)

### Modified Capabilities

- `ux-movil-compacto`: el requisito "Secciones compactas en móvil" cambia de poda (filas, bullets recortados, Casos sin 2° link) a contenido completo compacto en altura (foto contenida, aire reducido, todo visible).
- `cards-centradas`: se confirma el tope centrado vigente (600px ≤768, 560px en 601–768, 600px en 769–992 para Casos/Planes/Contacto/FAQ) frente a las bandas del agente.

## Impact

- `assets/css/styles.css` + `styles.min.css` (revisión, Ño reescritura).
- `?v=` unificado ×9 (8 páginas + generador).
- Specs principales `ux-movil-compacto` y `cards-centradas` vía archive.
- `CHANGELOG.md`, commit + push. Sin cambios visuales nuevos más allá de los del agente.
