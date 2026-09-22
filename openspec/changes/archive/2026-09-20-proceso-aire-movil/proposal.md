## Why

En móvil (360px) el timeline de Proceso se siente apretado: la columna de texto queda en ~248px y la línea gruesa compite con el contenido. Darle respiración vertical solo en móvil mantiene el formato editorial que funciona, sin tocar desktop.

## What Changes

- Solo en móvil (`max-width: 768px`): espaciado entre pasos 34px → 52px, puntos 38px → 32px, línea 2px → 1px y más tenue.
- Desktop intacto. Sin cambios de copy, colores, hover, spy ni movimiento reducido.

## Capabilities

### New Capabilities

- `proceso-aire-movil`: respiración del timeline de Proceso solo en móvil (espaciado, puntos y línea).

### Modified Capabilities

- Ninguna.

## Impact

- Solo `assets/css/styles.css` (reglas dentro del media query móvil existente). Sin JS ni HTML.
- Riesgo mínimo; rollback con revert.
