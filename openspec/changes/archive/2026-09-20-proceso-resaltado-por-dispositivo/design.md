## Context

Ver `proposal.md` (Why) y `specs/proceso-resaltado/spec.md` (requisitos). Estado actual: el hover vive en `@media (hover: hover)` y el scroll-spy corre en todos los dispositivos; en desktop ambos pueden encenderse a la vez. El spy usa `IntersectionObserver` con franja central (`rootMargin: -45%`) y suelta `.active` al salir.

## Goals / Non-Goals

**Goals:**
- Una sola fuente de resaltado por dispositivo, sin tocar copy, layout ni espaciados.
- Reutilizar la detección por hover ya usada en el proyecto.

**Non-Goals:**
- Cambiar la apariencia del resaltado (mismo glow y cyan actuales).
- Tocar el parallax, el reveal o cualquier otra sección.

## Decisions

- **Detección por capacidad, no por tamaño:** CSS con `@media (hover: hover)` / `(hover: none)` y JS con `matchMedia('(hover: hover)')`. Alternativa descartada: breakpoints por ancho (una laptop táctil o un iPad con mouse caerían del lado equivocado) y `pointer: coarse` (menos soporte y no distingue trackpads).
- **Spy condicionado en JS, no solo en CSS:** el observer no se crea si hay hover, para no gastar ciclos ni pelear clases. Alternativa descartada: dejar el spy corriendo y pisarlo con CSS (trabajo oculto en desktop).
- **Salida limpia al cambiar de contexto:** si el media cambia en caliente (p. ej. conectar mouse), se recalcula una vez con listener de `change` en el `matchMedia`.

## Risks / Trade-offs

- [Risk] Media `hover` híbrido (laptop con touch) reporta `hover: hover` → queda en modo desktop, correcto porque hay mouse → Sin mitigación extra.
- [Risk] El `change` listener casi nunca dispara → Mitigación: implementarlo simple, sin re-observar de más.

## Migration Plan

1. Cambio puramente visual e interactivo; sin migraciones.
2. Rollback: revertir el commit devuelve el comportamiento actual.
