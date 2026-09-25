## Context

Ver `proposal.md` (Why). Estado: `.svc-layout` desktop es grid `1fr 340px` con aside sticky (`top: 110px`); en móvil ya es 1 columna con card incrustada entre QA y FAQ vía `display: contents` + `order`. El contenido desktop queda en ~750px frente a los 1140px del home.

## Goals / Non-Goals

**Goals:**
- Ficha desktop a ancho completo, misma lectura que el home.
- Card incrustada entre QA y FAQ también en desktop, reutilizando el punto móvil.

**Non-Goals:**
- Cambios de copy, secciones, schemas o móvil; rediseño de la card (sigue paridad Planes).

## Decisions

- **`.svc-layout` a 1 columna también en desktop** (grid de 1fr o block): el camino de menor resistencia; el aside pasa a bloque en flujo. Alternativa descartada: mantener sidebar pero más angosto (no resuelve lo pedido).
- **Reutilizar el punto QA → card → FAQ en desktop**: dos caminos:
  - A (recomendado): extender el `display: contents` + `order` al desktop (quitar el scope del media, o replicar fuera de él). Cero markup, un solo mecanismo en ambos modos.
  - B: mover el aside en el DOM ×3 fichas (markup + auditar `build_pages.py`). Solo si A falla visualmente.
- **Card desktop contenida y centrada** (`max-width` ~560-640px, a decidir comparando con el home): a ancho completo una card de 1140px se vería rota; contenida respira como las de Planes.
- **Jubilar sticky desktop y columna**: retirar `position: sticky` del aside base; al archivar se concilian `servicios-ficha` (sticky) y `ficha-compra` (espejo desktop) con REMOVED/MODIFIED.

## Hallazgo apply (specs en conflicto para el archive)

- `servicios-ficha` requirement "Aside de compra sticky en desktop": MUERE (sticky retirado) → REMOVED al sincronizar.
- `ficha-compra` "Aside espejo de la card destacada": SIGUE válido (la card se ve igual, solo cambia posición y max-width 600px) → sin cambios; el requirement "Card móvil indistinguible" y "Card contenida" siguen válidos.

## Risks / Trade-offs

- [Riesgo] Se pierde visibilidad persistente del precio en desktop (el sticky convertía) → Mitigación: la card queda en el punto caliente (tras QA, antes de FAQ); el nav lleva CTA "Diagnóstico gratis" persistente. Decisión consciente del usuario.
- [Riesgo] `display: contents` en desktop afecta el grid de 2 columnas del layout → Mitigación: al ser 1 columna ya no hay grid que romper; verificar igual.
- Caché de GitHub Pages (10 min): Ctrl+F5 tras el push.
