## Context

Ver `proposal.md` (Why). Estado actual (change `marquesinas-confianza-servicios`, implementado sin archivar): ambas pistas llevan el set 2 veces y animan `translateX(0 → -50%)` en `alternate` (`ease-in-out`, 30s especialidades / 24s garantías). El usuario reporta que se siente como que "se paran" y pide loop de una sola dirección, más lento, con pausa en hover.

## Goals / Non-Goals

**Goals:**
- Loop unidireccional perfecto (sin salto visible al reiniciar) solo con CSS.
- Velocidad explícita y más calmada por barra; pausa en hover con reanudación suave.
- Agregar "Soluciones Digitales" sin romper la simetría de la pista.

**Non-Goals:**
- No se tocan ubicación, fondos, contenido existente ni `prefers-reduced-motion`.
- No se agrega JavaScript.

## Decisions

- **Loop `linear` infinito `0 → -50%` sobre pista duplicada**: con `linear` (no `ease-in-out`) la velocidad es constante y el reinicio cae justo donde empieza el set duplicado, así el loop es invisible. La estructura duplicada actual se reutiliza tal cual.
- **Duraciones 40s (especialidades) y 30s (garantías)**: más lentas que el máximo actual; cada barra con su ritmo porque sus anchos difieren. Alternativa descartada: igualar duraciones (se verían a distinta velocidad real al tener distinto ancho).
- **Pausa con `animation-play-state: paused` en `:hover` de la barra**: congela y reanuda desde el punto exacto sin JS. Se aplica por barra independiente.
- **"Soluciones Digitales" en ambos grupos de la pista**: mantiene la simetría exacta que exige el `-50%`. El texto ya existe en el encabezado de Servicios.

## Risks / Trade-offs

- [Risk] Si un grupo futuro deja de ser espejo exacto del otro, el loop saltaría → Mitigación: los tasks exigen verificar simetría de grupos al agregar el ítem.
- [Trade-off] `linear` elimina la suavidad de arranque/parada del `ease-in-out`: se acepta porque lo pedido es velocidad constante que nunca se detiene.

## Migration Plan

- Sin migración: cambio visual puro. Rollback = revert del commit.

## Open Questions

- (none)
