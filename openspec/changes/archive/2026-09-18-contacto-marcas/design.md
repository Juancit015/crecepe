## Context

Ver `proposal.md`. Estado (`index.html` líneas 974–1017, `styles.css` 1170–1192): 3 `.contact-item` con `.ci-icon` translúcida cian; glifo WhatsApp oficial monocromo; sobre y reloj de línea; botón Agendar con `.btn-primary` azul.

## Goals / Non-Goals

**Goals:**
- Pastillas con marca + botón verde, solo en Contacto.

**Non-Goals:**
- No se tocan enlaces, textos, dial flotante, footer ni `.btn-primary` global.

## Decisions

- **Decisión 1: variantes por pastilla, no cambio global.**
  `.ci-icon--wa { background: #25D366; color: #fff; border: none; }`, `.ci-icon--mail { background: #fff; }` con SVG Gmail multicolor, `.ci-icon--clock { background: #fff; color: #0A1F44; }`. El glifo WhatsApp actual se reutiliza tal cual (ya es el oficial).
- **Decisión 2: clase `.btn-whatsapp` nueva.**
  `background: #22a85b (hover #1c8f4d); color: #fff;` Solo en el Agendar de Contacto. Alternativa (teñir `.btn-primary` dentro de `.contact-card`) descartada: acoplaría el componente global a una sección.
- **Decisión 3: sobre original en marino (Gmail descartado).**
  El intento de Gmail multicolor no convenció al usuario y se revirtió al sobre de línea original en marino sobre pastilla blanca, a juego con el reloj.

## Risks / Trade-offs

- [Riesgo] Verde WhatsApp + fondo oscuro de la sección: contraste blanco-sobre-verde verificado (pasa AA en 22px+bold; el botón es texto 1rem semibold sobre `#22a85b`, revisar al implementar).

## Migration Plan

- Editar `index.html` (clases + 2 SVG) y `styles.css` (3 variantes + `.btn-whatsapp`). Verificar ambos temas y móvil. `openspec validate contacto-marcas`.

## Open Questions

- Ninguna.
