## Context

Ver `proposal.md` (Why). Mapa medido en `assets/css/styles.css` (gana la última regla a igual especificidad):

| Breakpoint | Servicios hoy | Casos hoy |
|---|---|---|
| Base desktop | 200 (l.2068) | 210 (l.1311) |
| 993–1100 | 128 (l.3229) | 210 |
| 993–1100 alto (≥900) | 160 (l.3261) | 210 |
| 769–992 | 200 (base) | 210 |
| 481–768 | 140 (l.3058) | 156 (l.2965) |
| 769–1024 | 140 (l.3058) | 210 |
| Móvil ≤480 | 180 (l.2987) | 156 (l.2965) |
| Desktop-bajo (1201–1440, h≤800) | 160 (l.3315) | 180 (l.3328) |

## Goals / Non-Goals

**Goals:**

- Paridad de alturas en los 6 casos de la tabla.
- Cero cambios en Casos, overlays, textos y botones.

**Non-Goals:**

- Cambiar anchos, grids, imágenes, recorte `cover` o cualquier otro componente.

## Decisions

- **Una línea por caso, sin reestructurar queries.** Solo cambian valores `height`, salvo la regla 481–1024 (l.3058) que cubre dos valores de referencia distintos y se parte en 481–768 (156) y 769–1024 (210).
- **La regla ≤768 (l.2987: 180→156) solo afecta a ≤480 en la práctica**, porque 481–768 la pisa la regla partida; Ño se crea query nueva para móvil.
- **Móvil queda en 156 (baja de 180), Ño en 150.** 156 es el valor real de Casos en ≤768 (l.2965 pisa a l.2460); igualar a 150 rompería la paridad que pide el cambio.
- **Márgenes negativos (`margin: -36px -30px...`) intactos.** Solo cambia `height`; el sangrado de la foto dentro de la card Ño se toca.
- **Desktop-bajo 160→180.** Paridad con Casos (180) aunque la sección pida densidad reducida; 20px extra Ño rompen el ahorro.

## Risks / Trade-offs

- [Riesgo] Cards de Servicios crecen y descuadran el ritmo vertical con el resto → Mitigación: captura lado a lado Servicios/Casos en los 3 anchos; el crecimiento máximo es +10px salvo 993–1100 (+82px: verificar que la 3ª card Ño salte de fila).
- [Riesgo] Partir la regla 481–1024 introduce un salto a 769px → Mitigación: el salto replica el que Casos ya tiene (156→210); coherente por diseño.
- [Riesgo] `?v=` stale si se olvida el bump → Mitigación: tarea 2.1 lo exige con verificación de cero restos.

## Migration Plan

Ño aplica (sitio estático). Orden: alturas → captures 375/768/desktop → minificado + `?v=` → commit + push. Rollback: `git revert`.

## Open Questions

Ninguna: valores medidos, técnica definida, criterios por captura.
