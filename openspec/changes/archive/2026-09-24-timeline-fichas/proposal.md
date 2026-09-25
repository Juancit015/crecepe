## Why

Los pasos ("Cómo lo hacemos") y checks de QA en fichas se ven como lista suelta: sin aire entre ítems ni hilo conductor, cuesta seguir la secuencia 1→4 (y 1→5 en QA). El timeline de Proceso ya resolvió esto con riel vertical + puntos; replicarlo unifica el lenguaje visual del sitio.

## What Changes

- `.svc-steps` y `.qa-check` ganan riel vertical (`::before` en la lista, como `.process-timeline::before`) alineado a la columna de números/iconos, más aire entre ítems.
- El punto/numero activo del spy sigue mandando (sin cambios de JS ni del resaltado).
- Solo CSS; sin markup, copy, desktop diferenciado (aplica en ambos, como Proceso), SEO ni GA.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `servicios-ficha`: pasos y QA con timeline conector estilo Proceso.

## Impact

- `assets/css/styles.css` (+ `styles.min.css`): riel + espaciados en ambas listas.
- Sin impacto en JS, markup, SEO ni GA.
