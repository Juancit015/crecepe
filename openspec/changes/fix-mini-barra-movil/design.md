## Context

Ver `proposal.md` (Why). Estado: la barra móvil vive en `@media (max-width: 992px)` (`styles.css` ~2591-2615): `.svc-aside` pasa a `position: fixed`, grid de 2 columnas (precio+plazo a la izquierda, CTA a la derecha), con badge/h3/mini/nota en `display: none`. En desktop se ve bien (captura 19:18); en angosto sale el bloque gigante (captura 19:28). La causa no está confirmada: el diagnóstico es la primera tarea.

## Hallazgo 1.1 (causa real: H5, no estaba en la lista)

El bloque móvil fija `position: fixed; left/right/bottom` pero **hereda `top: 110px`** de la regla base del sticky. `fixed` + `top` + `bottom` = caja estirada a toda la pantalla. Fix: `top: auto;` en la regla móvil. Una línea.

## Goals / Non-Goals

**Goals:**
- Confirmar la causa reproduciendo con caché limpia y fijarla donde esté.
- Barra de ≤92px en una fila, con `scrolled-past`/`buybar-down`/`buybar-hidden` intactos.

**Non-Goals:**
- Cambios en desktop, en el copy o en el markup salvo que el diagnóstico lo exija.

## Decisions

- **Diagnosticar antes de tocar CSS.** Hipótesis ordenadas por probabilidad:
  - H1 (caché): el HTML en caché apunta a un `?v` anterior al compacto (`?v=11` mostraba h3/mini en móvil). Reproducir con Ctrl+F5 decide esto en 1 minuto.
  - H2 (contenido no oculto): badge/h3/mini/nota visibles estiran el bloque; verificar regla `display: none` y especificidad.
  - H3 (grid estirado): CTA `.btn-lg` o `align-items` dando alto extra; revisar alto computado por fila.
  - H4 (breakpoint intermedio): regla posterior de 768px pisando el padding de la barra.
- **Fijar solo lo que el diagnóstico señale** (CSS mínimo en el bloque 992px). Si H1 se confirma, no hay fix de código: solo verificar y documentar.
- Sin JS: el mecanismo smart-hide ya existe y funciona.

## Risks / Trade-offs

- [Riesgo] No reproducible en limpio (era caché) → Mitigación: se documenta y se cierra sin código; costo mínimo.
- [Riesgo] El fix altera desktop → Mitigación: todo cambio dentro del `@media (max-width: 992px)`; verificar desktop después.
- Caché de GitHub Pages (10 min): verificar con Ctrl+F5 tras el push.
