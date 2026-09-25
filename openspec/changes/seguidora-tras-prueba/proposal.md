## Why

La seguidora móvil anterior falló por posición (primera de todo, tapaba la intro), no por concepto. Ubicada tras "Prueba real" —con propuesta de valor y prueba encima— y compacta (~160px), acompaña sin bloquear la lectura de arriba. Se conserva lo que sí funcionaba (card incrustada como fallback si el slot falla).

## What Changes

- En viewports ≤992px el aside vuelve a viajar con `position: sticky` bajo el header, pero ubicado tras "Prueba real" (no al inicio) y en versión compacta (nombre + precio + plazo + CTA; sin mini-lista ni nota).
- Se logra con CSS puro sobre el `display: contents` vigente: lo posterior a Prueba (Pasos, Fit, QA, FAQ) sube de `order` y el aside ocupa el hueco. Sin markup ni JS.
- Sin cambios en desktop (sidebar + sticky intactos), copy, JSON-LD/SEO/GA.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ficha-compra`: la compra móvil vuelve a ser seguidora sticky, ubicada tras Prueba y compacta (reemplaza la incrustada fija entre QA y FAQ).

## Impact

- `assets/css/styles.css` (+ `styles.min.css`): bloque `@media (max-width: 992px)` del aside.
- Si los selectores del slot resultan inestables entre fichas, fallback: mover markup ×3 (se pediría aprobación antes).
