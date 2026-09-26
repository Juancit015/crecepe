## Context

Bloque "cards compactas tipo fila en móvil" (styles.css ~3014, media 768): `.service-card` en grid `92px minmax(0,1fr)` con foto lateral `118px`, textos con line-clamp, lista recortada. Ver proposal.md - Why.

## Goals / Non-Goals

- Goals: foto arriba a ancho completo, contenido debajo, sin tocar desktop/tablet.
- Non-Goals: no cambiar textos, links ni recortes existentes; no tocar HTML.

## Decisions

- **Reordenar solo con grid (elegido):** la card ya es grid; basta con `grid-template-columns: 1fr` + foto en fila 1 (`grid-column: 1/-1`, altura ~180px) y contenido debajo. Cero HTML, DOM intacto para SEO. Alternativa — reordenar markup: innecesario con grid. Ño.
- **Altura de foto ~180-200px:** protagonista sin comerse la pantalla; a decidir probando (3 fotos distintas).
- **Mantener overlay oculto y lista recortada:** ya decidido en el diseño vigente, no se reabre.

## Risks / Trade-offs

- Más scroll vertical (3 fotos grandes): aceptado a cambio de aire; compensado con altura contenida.
