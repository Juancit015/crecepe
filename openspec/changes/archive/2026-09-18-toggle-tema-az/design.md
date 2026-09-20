## Context

Ver `proposal.md`. Estado: `.theme-toggle` entre hamburguesa y links (`index.html` línea ~294), círculo 42px con borde+fondo (`styles.css` líneas 1672–1700, más override oscuro 1693–1700). En AZ (`darkModeToggle`) es icono suelto al final de la fila sin estilos propios. La navbar se replica con `tools/build_pages.py`.

## Goals / Non-Goals

**Goals:**
- Toggle al final, plano, heredando color; propagado a subpáginas.

**Non-Goals:**
- No se tocan iconos sol/luna, lógica JS de tema ni hamburguesa.

## Decisions

- **Decisión 1: mover el nodo en los 8 HTML sin regenerar.**
  El botón se reubica tras `.nav-links` en index + 7 subpáginas (bloque byte-idéntico, movimiento mecánico verificado por diff). (Ajuste durante implementación: correr `build_pages.py` borraba los fondos inline + `has-bg` de servicios — se revirtió y no se regenera. El generador necesita una tarea aparte para preservar estilos inline del héroe.)
- **Decisión 2: desvestir `.theme-toggle`, no reestilizar.**
  `background: none; border: none; color: inherit;` + conservar tamaño, z-index y hover de escala. El color lo hereda de la nav (incluye el blanco/azul adaptativo). Se retiran el bloque oscuro específico si queda vacío. Alternativa (nuevo estilo propio) descartada: el usuario pidió plano como AZ.

## Risks / Trade-offs

- [Riesgo] `build_pages.py` regenera subpáginas completas: verificar con `git diff` que solo cambie la navbar.

## Migration Plan

- Mover botón en index, regenerar, ajustar CSS, verificar index + 1 subpágina en ambos temas y móvil. `openspec validate toggle-tema-az`.

## Open Questions

- Ninguna.
