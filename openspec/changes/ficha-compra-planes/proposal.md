## Why

La card de compra del aside en fichas no se percibe como la card de Planes del home (le faltan nombre del plan y mini-features), y en móvil la barra fija ocupa casi todo el viewport tapando el contenido. La card de compra es el punto de conversión de las fichas: debe verse igual que en Planes y no estorbar.

## What Changes

1. Aside de fichas con estructura espejo de `.pricing-card--featured`: badge pill, nombre del plan (h3), precio, plazo, mini-lista de 3 entregables, CTA cyan. Mismo radio, sombra y hover lift en desktop.
2. Barra móvil mini (≤92px de alto): una sola fila con precio + CTA; sin badge, sin nota, plazo en micro-texto. Mantiene smart-hide (al bajar / en relacionados+footer).
3. Sin cambios de precios, links de WhatsApp, schemas ni copy aprobado fuera de los 3 entregables visibles.

## Capabilities

### New Capabilities
- `ficha-compra`: la card de compra del aside replica la card destacada de Planes y en móvil es una mini-barra que no tapa el contenido.

### Modified Capabilities
- (none)

## Impact

- Archivos: `servicios/*.html` (3 asides), `assets/css/styles.css` + `styles.min.css`, `CHANGELOG.md`. Sin JS nuevo (reutiliza clases de scroll existentes).
- SEO: nulo (mismo contenido, sin cambios de schemas ni URLs).
