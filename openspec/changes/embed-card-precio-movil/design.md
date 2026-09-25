## Context

Ver `proposal.md` (Why). Estado: tras `sticky-compacto-movil`, en el media 992px el aside es card compacta con `order` primero + sticky. En DOM: `.svc-main` (intro→Qué incluye→Ficha→Prueba→Pasos→Fit→QA→FAQ) y luego el aside, dentro del grid `.svc-layout` de 1 columna en móvil. No se puede intercalar el aside entre QA y FAQ con `order` normal (están en contenedores distintos).

## Goals / Non-Goals

**Goals:**
- Card completa fija entre QA y FAQ solo con CSS, sin tocar las 3 fichas.
- Cero flotantes de compra en móvil; desktop intacto.

**Non-Goals:**
- Cambios de markup, JS, copy o desktop; mover el FAQ o reestructurar secciones.

## Decisions

- **`display: contents` en `.svc-main` + `order` solo en el media 992px**: los hijos de `.svc-main` pasan a ser ítems del grid `.svc-layout`; con FAQ (h2 + `.faq-list`) en `order: 10` y el aside en `order: 9`, el orden visual queda …QA → card → FAQ. Verificar antes que `.svc-main` no aporta caja visual (fondos/bordes/padding) que se perdería al disolverlo.
- **Card completa en móvil** (badge, mini-lista y nota visibles): al ser bloque estático en flujo no hay riesgo de tapar contenido, así que recupera la versión completa estilo Planes. Se retiran las reglas de versión compacta del change anterior.
- **Sin sticky ni fixed en el aside móvil** (`position: static`): vive en su sección como las cards de Planes. Se retira el `top: 76px`/`z-index` del change anterior.
- **Alternativa descartada**: mover el aside en el DOM ×3 fichas — funciona, pero toca markup y hay que auditar `build_pages.py`; el CSS puro logra lo mismo y es reversible en un commit.

## Risks / Trade-offs

- [Riesgo] `.svc-main` aporta padding/fondo que se pierde con `display: contents` → Mitigación: auditar sus reglas; si aporta caja, replicar el espaciado en los hijos o abortar a la alternativa con markup.
- [Riesgo] `display: contents` y accesibilidad en navegadores viejos → Mitigación: irrelevante en 2026 para layout puro.
- [Riesgo] Selectores de QA/FAQ varían entre fichas → Mitigación: verificar clases en las 3 fichas antes del CSS; si difieren, selectores por ficha o clase común.
- Caché de GitHub Pages (10 min): Ctrl+F5 tras el push.
