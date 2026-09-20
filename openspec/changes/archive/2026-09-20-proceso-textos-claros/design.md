## Context

- `#proceso` trae foto oscura inline con velo marino (`index.html:646`); su header usa estilos base: badge marino (`styles.css:56-60`), título `var(--primary)` marino (`:70-73`) con `span` en accent, subtítulo gris (`:80-85`).
- En oscuro el header se lee bien (títulos claros del tema); el problema es solo claro sobre foto.
- Patrón existente: `.geo-section` (`:680`) y opiniones usan blanco + cian + sombra sobre foto.

## Goals / Non-Goals

**Goals:**
- Header Proceso legible en claro: badge cian, título blanco con resaltado cian, subtítulo blanco, todo con sombra sutil.
- Oscuro pixel-igual.

**Non-Goals:**
- Tocar cards de pasos, foto, velo, HTML ni otras secciones.

## Decisions

- **Reglas acotadas a claro + `#proceso`**: `#proceso .section-badge` (texto cian, borde cian, fondo translúcido oscuro), `#proceso .section-title` blanco con `span` cian, `#proceso .section-subtitle` blanco 90%, cada uno con `text-shadow: 0 2px 12px rgba(0,0,0,0.45)`. Se usa `body:not(.dark-mode)` como prefijo para ño rozar el oscuro, siguiendo el patrón de navbar adaptativa.
- **Ño tocar base global**: `.section-*` se comparte con secciones sin foto; todo va escopado a `#proceso`.

## Risks / Trade-offs

- Riesgo mínimo: 3 declaraciones acotadas; si Gemini cambia la foto por una clara, el blanco se perdería — hoy la foto es oscura y el velo marino lo garantiza.
