## Context

Ver `proposal.md` para el porqué. Estado actual (`assets/css/styles.css`):
- Base `.section-badge` (línea 56): fondo `rgba(11,47,212,0.1)`, texto `var(--accent-dark)`, sin borde. La usan los 7 badges del index (Servicios, Diferenciador, Planes, Proceso, Casos reales, Opiniones, FAQ).
- Override GEO en claro (línea 1826): `body:not(.dark-mode) .geo-section .section-badge` con fondo oscuro translúcido, texto blanco y `border: 1px solid rgba(0,194,255,0.4)` — el borde cyan que el usuario quiere generalizar.
- Oscuro global (línea 1913): `body.dark-mode .section-badge` con fondo cyan translúcido y texto claro, sin borde.

## Goals / Non-Goals

**Goals:**
- Borde cyan `1px solid rgba(0,194,255,0.4)` en los 7 badges, en ambos temas, reutilizando el valor ya usado en GEO.

**Non-Goals:**
- No se cambian fondos, colores de texto, tipografía ni espaciados de los badges; no se toca HTML.

## Decisions

- **Decisión 1: borde en la regla base + regla oscura.**
  Agregar el borde a `.section-badge` (cubre el claro) y a `body.dark-mode .section-badge` (cubre el oscuro). Dos líneas, sin selectores nuevos. Alternativa (una clase utilitaria `.badge-cyan` aplicada en cada HTML) descartada: exige editar 7 lugares del index y futuros olvidos; el CSS en la base lo hereda todo.
- **Decisión 2: simplificar el override de GEO en claro.**
  Quitarle solo la declaración `border` (redundante tras la Decisión 1) pero conservar su fondo y color, que sí aportan contraste sobre la foto. Alternativa (dejarlo intacto) descartada: duplicaría el valor y confundiría el próximo mantenimiento.

## Risks / Trade-offs

- [Riesgo] Mínimo: el borde suma 2px al alto del badge en secciones donde antes no existía; imperceptible y uniforme.

## Migration Plan

- Cambio solo-CSS. Recarga dura y recorrido visual de las 7 secciones en ambos temas. `python3 tools/build_pages.py` no necesario (sin cambios de HTML).

## Open Questions

- Ninguna que bloquee specs o tareas.
