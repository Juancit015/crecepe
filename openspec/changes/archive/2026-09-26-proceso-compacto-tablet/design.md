## Context

Proceso a ≤768px hoy combina dos decisiones viejas: `proceso-aire-movil` (52px entre pasos, padding-left 64px, pensado para dar aire en teléfono) y `.pricing-toggle` full-width con `space-between` (flecha al extremo derecho). A 768px de ancho esos 52px y el `space-between` se ven desproporcionados frente a Servicios/Planes/Casos ya compactados. Restricciones: solo CSS, Ño regenerar `tools/build_pages.py`, `?v` vía sed, `styles.min.css` con clean-css, claro/oscuro y `prefers-reduced-motion` intactos.

## Goals / Non-Goals

**Goals:**
- Proceso compacto y uniforme a 481–768px, con flecha de "Ver detalle" junto a la etiqueta.
- Cero cambios en teléfono (≤480px) y desktop (>768px).

**Non-Goals:**
- Cambios en HTML/JS, contenido de los pasos, JSON-LD o generador.
- Tocar el acordeón de Planes (usa el mismo `.pricing-toggle` fuera de `#proceso`).

## Decisions

- **Media 481–768px con selectores `#proceso`** (o `.process-*`): recorta el aire solo en tablet-portrait sin tocar el aire de teléfono que `proceso-aire-movil` garantiza; se coloca al final del archivo para ganar la cascada a las reglas ≤768px existentes. Alternativa (editar directo el bloque ≤768px) descartada: cambiaría también teléfonos y rompería el spec vigente.
- **Toggle con `width:auto; justify-content:flex-start` solo dentro de `#proceso`**: pega la flecha a la etiqueta manteniendo `min-height:44px` para el área táctil. Alternativa (centrar botón) descartada: el patrón del sitio alinea estos controles a la izquierda.
- **Compactación por escala**: reducir `padding-bottom` de pasos (52px→~28px), `padding-left` del timeline (64px→~48px) y márgenes del header de sección; puntos y línea se mantienen por legibilidad sobre foto. Sin recortes de contenido.

## Risks / Trade-offs

- [`.pricing-toggle` compartido con Planes] → Mitigación: scope estricto `#proceso .pricing-toggle`; verificar Planes a 768px sin cambios.
- [Solape con medias 768/992 de otras reglas] → Mitigación: bloque al final del CSS; verificar 360/768/820/1024.
- [Foto de fondo de Proceso en claro/oscuro] → Mitigación: solo se toca espaciado y layout del botón, no colores.

## Migration Plan

- Solo CSS + `?v` bump + CHANGELOG en un commit; rollback = revert de ese commit.
- Verificación con capturas 768 y 820 (tablet) + 360 (teléfono intacto) en claro y oscuro antes de commitear.
