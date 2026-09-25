## Why

En viewport angosto (≤992px) la mini-barra de compra de las fichas cubre casi toda la pantalla (bloque navy alto con precio, CTA y semanas dispersos) en vez de la barra compacta de ~56px especificada. Tapa el contenido y rompe la lectura en móvil. Evidencia: captura del 2026-09-24 en `automatizacion-ia.html` (S/ 900).

## What Changes

- Diagnosticar la causa real (hipótesis en `design.md`: contenido del aside no oculto, CTA estirando el grid, o caché) reproduciendo con Ctrl+F5 en las 3 fichas.
- Dejar la barra en una fila compacta (precio + CTA, ≤92px) que conserva `scrolled-past`, `buybar-down` y `buybar-hidden`.
- Sin cambios en desktop (sticky intacto) ni en el copy del aside.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ficha-compra`: la mini-barra móvil vuelve a cumplir el tope de 92px en una fila en cualquier viewport ≤992px (el requirement existe pero hoy se viola; se agrega escenario de regresión).

## Impact

- `assets/css/styles.css` (+ `styles.min.css` regenerado): reglas de la barra en `@media (max-width: 992px)`.
- Sin cambios de markup salvo que el diagnóstico lo exija; sin impacto en JSON-LD, SEO, GA ni desktop.
