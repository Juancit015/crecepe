## Why

Solo el badge "Diferenciador" (sección SEO + GEO) luce el borde cyan en modo claro, por un override puntual (`body:not(.dark-mode) .geo-section .section-badge`). Los demás badges (Servicios, Planes, Proceso, Casos reales, Opiniones, FAQ) usan el estilo base sin borde. Unificar el borde en todos los badges da identidad visual consistente en ambos temas.

## What Changes

Solo `assets/css/styles.css`:
- Agregar `border: 1px solid rgba(0, 194, 255, 0.4)` a la regla base `.section-badge`, para que aplique a todas las secciones en modo claro y oscuro.
- Agregar el mismo borde a la regla oscura `body.dark-mode .section-badge`.
- Eliminar el override puntual de GEO en claro (queda redundante; su fondo y color se conservan si aún aportan contraste sobre la foto).

## Capabilities

### New Capabilities

- `insignias-secciones`: borde cyan uniforme en los nombres de sección (badges) en modo claro y oscuro.

### Modified Capabilities

- Ninguna (ninguna capacidad existente regula los badges de sección).

## Impact

- Afectado: 2–3 reglas en `assets/css/styles.css`. Sin cambios de HTML (los 7 badges ya usan `.section-badge`), sin impacto en subpáginas ni generador.
