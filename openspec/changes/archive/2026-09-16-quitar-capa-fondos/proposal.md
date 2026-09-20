## Why

Las fotos de fondo (hero, GEO, Opiniones) llevaban un velo `linear-gradient` muy pesado (opacidad 0.80–0.92) que las opacaba. Se bajó a velo ligero uniforme (0.35→0.25), pero en modo oscuro apareció el problema inverso: `--primary` pasa a blanco, así que títulos blancos quedan sobre fotos claras (hero y oficina de Opiniones) y algunos textos se vuelven poco visibles. Se pide velo asimétrico por tema más refuerzo de texto en oscuro.

## What Changes

- Velo ligero en modo claro (se mantiene, 0.35→0.25):
  - `.hero-photo-bg`: `linear-gradient(rgba(238,243,255,0.35), rgba(238,243,255,0.25))` + `url('../img/hero-crecepe.avif')`.
  - `.geo-section`: velo oscuro ligero (0.35→0.25) + `url('../img/geo-fondo.avif')`.
  - `.opiniones-section.has-bg`: velo claro ligero (0.35→0.25) + `url('../img/opiniones-fondo.avif')`.
- Velo medio en modo oscuro (nuevo, 0.60→0.50, tono de cada bloque):
  - `body.dark-mode .hero-photo-bg`: `linear-gradient(rgba(8,15,35,0.60), rgba(8,15,35,0.50))` + URL.
  - `body.dark-mode .geo-section`: `linear-gradient(rgba(6,13,31,0.60), rgba(6,13,31,0.50))` + URL.
  - `body.dark-mode .opiniones-section.has-bg`: `linear-gradient(rgba(6,13,31,0.60), rgba(6,13,31,0.50))` + URL.
- Refuerzo de texto solo en oscuro sobre foto: `text-shadow` sutil (ej. `0 2px 12px rgba(0,0,0,0.45)`) en H1 del hero y títulos/subtítulos de GEO y Opiniones.
- No se toca `tools/build_pages.py`, `index.html`, ni el sistema de tema: el cambio es solo visual en `assets/css/styles.css`.
- No se toca `.hero-grid-bg` (trama de cuadrícula, no velo sobre foto).

## Capabilities

### New Capabilities

- `fondos-fotograficos`: fotos de fondo con velo por tema (claro 0.35→0.25, oscuro 0.60→0.50) y texto con sombra sutil en oscuro (hero, GEO, Opiniones).

### Modified Capabilities

- Ninguna (no hay specs previas en `openspec/specs/`).

## Impact

- Afectado: `assets/css/styles.css` (3 bloques oscuros + reglas de `text-shadow` en oscuro). Nota: el CSS actual tiene velo uniforme 0.35 en ambos temas; este cambio sube solo el oscuro y suma sombras de texto.
- Riesgo visual: bajo; el velo oscuro 0.60 sigue lejos del original 0.90. Se verifica contraste en ambos temas con recarga dura.
- Sin impacto en SEO, schemas, `llms.txt`, ni generador de páginas.
