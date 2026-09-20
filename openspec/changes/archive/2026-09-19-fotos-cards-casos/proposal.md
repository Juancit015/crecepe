## Why

Las 2 cards de Casos muestran placeholders con degradado + URL en vez de foto. Fotos libres (Pexels, sin atribución requerida) en AVIF: equipo en oficina para AZ (aprobada) y empacando pedidos e-commerce para Chávez (reemplazo de la vendedora, descartada por el usuario).

## What Changes

`index.html` (2 `.case-preview`) + `assets/css/styles.css`:
- `<img class="case-photo">` con cover dentro de cada preview (fotos ya en `assets/img/`, alts descriptivos), manteniendo la píldora `.case-url` encima.
- Licencia: Pexels (gratis comercial, sin atribución). Fotos: Pexels 6326260 (oficina) y 7857559 (empacando pedidos).

## Capabilities

### New Capabilities

- `fotos-casos`: previews de casos con foto real y URL encima.

### Modified Capabilities

- Ninguna.

## Impact

- Afectado: 2 previews en index + 1 regla CSS. Degradados quedan como fondo de carga tras la foto.
