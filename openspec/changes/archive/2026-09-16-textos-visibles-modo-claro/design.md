## Context

Ver `proposal.md` para el porqué. Estado actual en modo claro (`assets/css/styles.css`):
- Hero sobre foto oscura (brillo medio 52/255, velo blanquecino 0.35 que no la aclara lo suficiente): H1 `--primary` #0A1F44, `.hl` `--accent` #0B2FD4, descripción y confianza `--text` #1E293B, botón `.btn-outline` transparente con borde/texto marino. Todo oscuro sobre oscuro.
- GEO sobre foto nocturna con velo oscuro: insignia `color: #08218F` sobre `rgba(11,47,212,0.1)` (pastilla casi invisible), título blanco pero `span` en `--accent` #0B2FD4.
- Modo oscuro correcto: no se toca. Palabra "Google", tarjeta del especialista e insignia del hero ya legibles: no se tocan.

## Goals / Non-Goals

**Goals:**
- Texto claro sobre foto oscura en modo claro, reutilizando paleta (blanco, cian `accent-light`, pastilla oscura) sin nuevos colores.
- Alcance mínimo: hero + GEO, solo modo claro.

**Non-Goals:**
- No se tocan velos (capacidad `fondos-fotograficos`), modo oscuro, colores de marca de "Google", tarjeta del especialista, ni `.btn-outline` fuera del hero.

## Decisions

- **Decisión 1: textos del hero en claro como en oscuro (blanco + cian).**
  H1 `#fff`, `.hl` `accent-light`, descripción y `.hero-trust div` en `rgba(255,255,255,0.85)`, iconos trust en cian, más la misma sombra `0 2px 12px rgba(0,0,0,0.45)` ya usada en oscuro. Alternativa (halo claro detrás del texto marino) descartada: el usuario pidió cambio de color y el blanco sobre foto oscura da más contraste.
- **Decisión 2: botón "Ver servicios" con borde marino y hover marino, alcance `.hero-actions .btn-outline`.**
  En claro: fondo transparente, borde `var(--primary)`, texto `#fff`. Hover en ambos temas con regla propia `.hero-actions .btn-outline:hover { background: #0A1F44; border-color: #0A1F44; color: #fff; }`: marino fijo (no la variable, que en oscuro es blanca) y texto siempre blanco. Su especificidad (0,3,0) supera al hover global (0,2,0). De paso corrige el hover en oscuro, hoy fondo blanco con texto blanco. Alcance limitado al hero para no afectar otros `.btn-outline`.
- **Decisión 3: insignia GEO como pastilla oscura legible.**
  Texto `#fff`, fondo `rgba(8,15,35,0.55)`, borde `rgba(0,194,255,0.4)`; título `span` en `accent-light`. Alternativa (pastilla clara opaca) descartada: rompería la estética nocturna de la sección.

## Risks / Trade-offs

- [Riesgo] H1 blanco sobre la zona más clara de la foto del hero → Mitigación: sombra de texto incluida desde el inicio en esta misma tarea.
- [Riesgo] Insignia GEO con nuevo fondo parezca de otro componente → Mitigación: reutiliza tonos ya presentes en `.geo-card.highlight` (pastilla oscura + cian).
- [Trade-off] Hero claro y oscuro quedan visualmente parecidos (texto blanco en ambos) → Aceptado: la foto manda en los dos temas.

## Migration Plan

- Cambio solo-CSS en reglas de modo claro, partiendo del estado actual. Recarga dura (Ctrl+Shift+R) en claro, captura de hero + GEO comparando antes/después. `python3 tools/build_pages.py` no necesario.

## Open Questions

- Ninguna que bloquee specs o tareas.
