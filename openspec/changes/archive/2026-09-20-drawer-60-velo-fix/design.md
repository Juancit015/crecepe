## Context

Ver `proposal.md` y `specs/drawer-velo/spec.md`. DOM real: `.nav-links` (panel) dentro de `.navbar-inner` dentro de `.navbar` (`fixed`, `z-index: 1000` = stacking context); `.nav-backdrop` hermano fuera. El intento anterior (velo 1001, panel 1002) falló porque nada dentro del contexto sale de él.

## Goals / Non-Goals

**Goals:** panel interactivo siempre, fondo + logo dim, drawer 60%, solo CSS.
**Non-Goals:** mover el panel en el DOM, tocar JS, cambiar apertura/cierre.

## Decisions

- **Velo 999 + atenuar logo/hamburguesa con `opacity`.** El velo bajo la navbar deja el panel (contexto 1000) intacto; el dim del logo se simula con opacidad en hojas. Alternativa descartada: subir el velo (ya se probó y tapa todo) y sacar el panel del DOM (refactor grande para esto).
- **`opacity` solo en `.logo` y `.nav-toggle`.** Son hojas sin descendientes fijos: seguro. Nunca en `.navbar` ni `.navbar-inner` (atraparían o atenuarían al panel, que es hijo).
- **Ancho `min(60vw, 340px)`.** Se conserva el tope para tablets.
- **`prefers-reduced-motion` ya cubierto** por la guarda global (la transición de opacidad se anula sola).

## Risks / Trade-offs

- [Risk] La hamburguesa atenuada sigue visible tras el panel → Mitigación: queda bajo el panel (el panel la tapa donde se solapan) y sigue cerrando el menú donde se ve.
