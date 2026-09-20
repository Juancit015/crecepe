## Context

Ver `proposal.md`. Estado: `.case-preview` 210px con `<img cover>` + `.case-actions` debajo en el cuerpo. Transiciones existentes del proyecto ~0.3–0.45s.

## Goals / Non-Goals

**Goals:**
- Cartel superior animado + foto oscurecida, accesible sin mouse.

**Non-Goals:**
- No se cambian destinos, resto de la card ni otras secciones.

## Decisions

- **Decisión 1: overlay absoluto solo con descripción.**
  `.case-overlay` baja con `translateY` y lleva únicamente el `<p>`; los `.case-actions` vuelven al cuerpo (se revierte la mudanza). Sin botones dentro, el cartel respira y no aprieta.
- **Decisión 2: velo ligero + foto apenas oscurecida.**
  Velo `linear-gradient(rgba(6,13,31,0.5), rgba(6,13,31,0.38))` y foto con `brightness(0.7) scale(1.04)` (valor real implementado; el 0.55 del plan inicial quedó descartado por oscuro). Misma curva 0.4s.
- **Decisión 3: táctil visible, teclado con foco.**
  `@media (hover: none) { .case-overlay { transform: none; } }`; `:focus-within` lo abre sin mouse. Reduced-motion lo deja instantáneo por el bloque global.

## Risks / Trade-offs

- [Riesgo] Ninguno relevante: solo texto centrado sobre velo ligero.

## Migration Plan

- Reestructurar 2 previews + CSS. Verificar hover, teclado, táctil (devtools) y ambos temas. `openspec validate overlay-casos`.

## Open Questions

- Ninguna.
