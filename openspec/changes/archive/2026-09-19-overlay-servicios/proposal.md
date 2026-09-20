## Why

Tres ajustes a overlays y cards: (1) la descripción del overlay de casos quedó de 1 línea y pide más texto; (2) las fotos de servicios no tienen overlay; (3) la barra superior degradada que aparece al hover en las cards de servicios (`::before` con `scaleX`) se siente ajena y el dueño la quiere fuera.

## What Changes

`index.html` (secciones Casos y Servicios) + `assets/css/styles.css`:
- Overlay de casos con descripción ampliada (2 líneas, textos propuestos en `design.md` para aprobación).
- Overlay solo descriptivo en las 3 `.service-photo` (misma mecánica: baja de arriba, velo ligero, foto oscurecida leve), con los enlaces "Ver plan…" intactos debajo.
- Eliminar la barra superior: reglas `.service-card::before` y `.service-card:hover::before` fuera.
- Supuesto registrado: en servicios, overlay sin botones (patrón final aprobado en casos).

## Capabilities

### New Capabilities

- `overlay-servicios`: overlays descriptivos en fotos de servicios y barra superior eliminada; descripciones de casos ampliadas.

### Modified Capabilities

- Ninguna (extiende `overlay-casos` archivado; no lo reabre).

## Impact

- Afectado: 2 overlays de casos (texto), 3 fotos de servicios (overlay nuevo) y reglas `.service-card::before`. Resto intacto.
