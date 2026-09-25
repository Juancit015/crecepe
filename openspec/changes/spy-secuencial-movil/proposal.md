## Why

En móvil el spy de pasos ("Cómo lo hacemos") y de QA ("Nos tomamos en serio…") salta de 1 a 4 con un solo scroll: el observer entrega varias intersecciones en un lote y gana la última, no la que corresponde. El resaltado pierde su función de "vas aquí".

## What Changes

- El `onEntries` de `opinionSpy` (y su espejo `processSpy`, mismo defecto) elige ganador determinista por geometría: entre los que intersectan la franja, se activa el más cercano al centro del viewport en vez del último del lote.
- Solo `assets/js/main.js`; sin cambios de CSS, markup, desktop, copy, SEO ni GA.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `proceso-resaltado`: el resaltado por scroll en móvil es secuencial y determinista (sin saltos por lotes del observer).

## Impact

- `assets/js/main.js`: lógica de ganador en ambos spies (lectura geométrica solo por lote, no por frame: sin costo de scroll).
- Sin impacto fuera del resaltado móvil.
