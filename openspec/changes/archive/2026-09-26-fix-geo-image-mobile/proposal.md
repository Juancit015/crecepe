## Why

En la sección Diferenciador (`.geo-section`) los dispositivos táctiles cargan `geo-fondo-movil.avif` (vía `@media (hover: none)`), que es un recorte central del panorama 1920×800. La mujer sonriente está al ~60% horizontal, así que el recorte central la deja fuera: solo se ve su hombro en tablet y móvil. En desktop el panorama completo está bien y Ño se toca.

## What Changes

- **Recrop focal del variant móvil**: `geo-fondo-movil.avif` regenerado desde el original, ventana 600×800 centrada en la mujer (x 850–1450, ~60%), mismo peso (~10 KB vs 8.5 KB) y mismas dimensiones.
- **Sin cambios CSS**: el pipeline existente (variante móvil + `cover + center`) ya funciona una vez que el archivo contiene al sujeto; desktop intacto.
- Verificación por captura en tablet y móvil (~768px y ~375px).

## Capabilities

### New Capabilities

(Ninguna.)

### Modified Capabilities

- `fondos-fotograficos`: el recorte móvil de GEO MUST contener a la mujer (ventana focal al ~60%), Ño recorte central ciego.

## Impact

- Solo `assets/img/geo-fondo-movil.avif` (1 archivo). Sin cambios de CSS, DOM, copy ni JS. `?v=54` ya está en las páginas (bump previo reutilizado).
