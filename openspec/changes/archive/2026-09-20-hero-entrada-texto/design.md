## Context

Ver `proposal.md` y `specs/hero-entrada/spec.md`. El hero tiene badge, h1, descripción, acciones y trust en `.hero-content`, más card CEO aparte. Existe `.preload` que bloquea transiciones hasta el `load` y guarda global de `prefers-reduced-motion`.

## Goals / Non-Goals

**Goals:** entrada escalonada solo-CSS, segura si falla (estado final = visible).
**Non-Goals:** tocar copy, layout, foto con zoom, card CEO ni el reveal de scroll.

## Decisions

- **Keyframes `heroRise` (translateY + opacity) aplicados directo a cada elemento con delays 0/.1/.2/.3/.4s.** Sin clases JS: corre al pintar. Alternativa descartada: reutilizar `.reveal` (depende de scroll y del observer; el hero ya está en viewport al cargar).
- **Card CEO fuera del escalonado** (entra con su propio ritmo o queda fija; su animación actual no se toca).
- **Seguridad ante fallos:** los keyframes van de offset a estado natural, así sin animación todo queda visible.

## Risks / Trade-offs

- [Risk] Repintado al volver atrás con bfcache re-dispara la animación → Mitigación: aceptado (efecto breve y estándar).
