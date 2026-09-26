## Why

En iPad (portrait, ver `~/Pictures/Screenshots/Screenshot from 2026-09-25 22-22-08.png`) las cards de Servicios ya van apiladas foto-arriba pero se ven altas: foto grande, mucho aire, y su texto descriptivo solo aparece al hover de PC, inaccesible en táctil. Los Casos Reales ya resolvieron esto en móvil con texto siempre visible; Servicios debe seguir el mismo patrón en tablet.

## What Changes

- Cards de Servicios compactas en rango tablet (iPad Mini portrait/landscape): menos aire vertical, foto contenida, tipografías y paddings ajustados sin perder legibilidad.
- Texto descriptivo del hover de Servicios (overlay de 2 líneas) siempre visible en tablet como caption/bloque bajo o sobre la foto, sin depender de `:hover`.
- Desktop (>1024px) intacto: overlay al hover como hoy. Móvil (≤768px) intacto: card apilada con foto arriba según `servicios-foto-arriba`.
- Claro/oscuro y `prefers-reduced-motion` respetados.

## Capabilities

### New Capabilities

(none — se reutilizan capacidades existentes)

### Modified Capabilities

- `overlay-servicios`: el texto del hover pasa a siempre visible en tablet (caption permanente), siguiendo el patrón de `overlay-casos` en móvil.
- `ux-movil-compacto`: la compactación de Servicios se extiende al rango tablet con variante compacta propia de iPad Mini.

## Impact

- `assets/css/styles.css` + `styles.min.css` (nuevo media tablet, caption permanente).
- `index.html` solo si el caption requiere mover texto al DOM visible (preferible reutilizar overlay existente vía CSS).
- Sin cambios en JS, JSON-LD, precios ni consentimiento.
