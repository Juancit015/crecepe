## Context

Ver `proposal.md` para el porqué. Historia del estado en `assets/css/styles.css`:
- Original: velos pesados (0.80–0.92) que opacaban las fotos.
- Intermedio: velo ligero uniforme 0.35→0.25 en ambos temas — bien en claro, pero en oscuro el texto blanco (`--primary: #FFFFFF`) sobre fotos claras (hero, oficina de Opiniones) pierde contraste. Evidencia en `~/Pictures/Screenshots/` del 16-09 (sección GEO y Opiniones).
- Destino: velo asimétrico por tema (claro 0.35→0.25, oscuro 0.60→0.50) + `text-shadow` sutil al texto sobre foto en oscuro.
- El cambio es solo CSS, sin tocar `index.html` ni `tools/build_pages.py`. Las subpáginas no usan estos fondos, solo el index.

## Goals / Non-Goals

**Goals:**
- Foto protagonista en claro, atenuada sin opacarse en oscuro, con `background-size: cover; position: center` intactos y animación `heroZoom` intacta.
- Texto legible sobre foto en ambos temas: velo como base + sombra como refuerzo en oscuro.
- Verificación visual en claro + oscuro a desktop y móvil.

**Non-Goals:**
- No se rediseña hero, ni `.hero::before`, ni `.hero-grid-bg` (base/trama, no velo sobre foto).
- No se cambian imágenes, rutas, colores base de texto, ni estructura HTML.
- No volver a opacidades ≥0.80 en ningún tema.

## Decisions

- **Decisión 1: velo asimétrico por tema, conservando el tono de cada bloque.**
  Alternativas: uniforme 0.35 (probado: texto se lava en oscuro) y uniforme 0.60 (opacaría el claro, repite el problema original). Se elige asimétrico.
  Valores concretos:
  - Claro (se mantiene): hero `rgba(238,243,255,0.35→0.25)`; GEO `rgba(8,15,35,0.35→0.25)`; Opiniones `rgba(244,247,254,0.35→0.25)`.
  - Oscuro (nuevo): hero `linear-gradient(rgba(8,15,35,0.60), rgba(8,15,35,0.50))`; GEO y Opiniones `linear-gradient(rgba(6,13,31,0.60), rgba(6,13,31,0.50))`.
- **Decisión 2: `text-shadow` sutil solo en oscuro sobre foto.**
  Regla orientativa: `text-shadow: 0 2px 12px rgba(0,0,0,0.45)` en `.hero h1` y `.section-title` / `.section-subtitle` de GEO y Opiniones bajo `body.dark-mode`. Alternativa (subir velo oscuro a 0.75+) descartada: devuelve el problema original. La sombra no altera colores ni layout.
- **Decisión 3: no tocar `.hero::before` ni `.hero-grid-bg`.**
  Son fondo base degradado y trama de cuadrícula, no el velo sobre la foto.

## Risks / Trade-offs

- [Riesgo] Velo oscuro 0.60 aún insuficiente sobre la zona más clara de una foto → Mitigación: la sombra de texto cubre ese resto; nunca subir sobre 0.60 sin nueva revisión.
- [Riesgo] Diferencia visible claro/oscurito al conmutar tema → Mitigación: es intencional y esperable en dark mode; el tono por bloque se conserva.
- [Trade-off] Dos intensidades en vez de una → Aceptado: cada tema tiene su binomio foto/texto (oscuro: foto clara + texto blanco; claro: foto + texto oscuro).

## Migration Plan

- Cambio solo-CSS: editar los 3 bloques oscuros (0.35→0.60) y agregar las reglas de sombra bajo `body.dark-mode`, partiendo del estado actual.
- Despliegue: editar CSS, recarga dura (Ctrl+Shift+R) en claro + oscuro, captura de hero/GEO/Opiniones comparando con las referencias del 16-09. `python3 tools/build_pages.py` no necesario.

## Open Questions

- Ninguna que bloquee specs o tareas.
