## Why

En móvil la descripción de cada plan queda cortada a 2 líneas con "..." permanente: el visitante nunca puede leerla completa. El botón "Ver qué incluye" debe desplegar con animación la descripción completa junto con la lista, manteniendo el preview con "..." en estado colapsado.

## What Changes

- En móvil, estado colapsado: descripción recortada con "..." (preview) como hoy.
- Al tocar "Ver qué incluye": la descripción se despliega completa con animación junto con la lista; el botón cambia a "Ocultar detalles" y al tocar colapsa todo de nuevo.
- Desktop intacto (todo siempre visible, sin botón). Sin cambios de copy.

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `ux-movil-compacto`: el acordeón de Planes ahora despliega descripción completa + lista.

## Impact

- `assets/css/styles.css` (estado expandido de la descripción en móvil) y `assets/js/main.js` (toggle de clase en la card). Sin cambios HTML ni copy.
