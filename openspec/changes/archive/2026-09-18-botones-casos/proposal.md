## Why

En las cards de Casos los enlaces "Ver caso completo" y "Ver sitio/tienda en vivo" son texto inline apilado, con área táctil pequeña y difícil de atinar en móvil. La propuesta: convertirlos en 2 botones separados con área táctil amplia.

## What Changes

En `index.html` (2 cards) + `assets/css/styles.css`:
- Envolver ambos enlaces en `.case-actions` (flex con wrap y gap).
- `.case-link` como botón píldora con padding generoso (mínimo 44px de alto táctil): "Ver caso completo" sólido primario, "en vivo" con borde.
- Se conservan destinos, iconos flecha y textos ("Ver tienda en vivo" en Novedades Chávez).
- Supuesto registrado: mismo tratamiento en desktop y móvil (botones en ambos, no solo móvil).

## Capabilities

### New Capabilities

- `botones-casos`: enlaces de casos como botones táctiles separados en el portafolio principal.

### Modified Capabilities

- Ninguna.

## Impact

- Afectado: 2 cards en `index.html` y reglas `.case-link` (+ contenedor nuevo). Subpáginas de casos no tienen estos enlaces.
- Sin cambios de destinos, textos ni iconos.
