## Why

En móvil el botón "Ver qué incluye" de la card Tienda (fondo navy)
hereda `color: var(--accent-dark)` —azul oscuro sobre azul oscuro— y
no se ve. Debe ser blanco en reposo y cyan en hover, en ambos temas
(la destacada es oscura en claro y en oscuro).

## What Changes

- `.pricing-card--featured .pricing-toggle` en blanco con hover
  cyan (`--accent-light`), dentro del `max-width:768px` (único
  lugar donde el botón existe; en desktop va oculto).
- Mismo patrón ya usado en `.process-step .pricing-toggle`.
- Nada más cambia: resto de toggles, features y acordeón intactos.

## Capabilities

### New Capabilities

- (none)

### Modified Capabilities

- `precios-estilo-casos`: el toggle "Ver qué incluye" de la card
  destacada es blanco con hover cyan en ambos temas.

## Impact

- `assets/css/styles.css` (2 reglas en el bloque móvil) +
  `assets/css/styles.min.css`.
- Sin cambios de HTML, JS, copy, SEO ni desktop.
