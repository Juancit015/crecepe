## Context

- Garantías dispersas: `hero-trust` (`index.html:355-363`: 24h, Yape/Plin, 30 días), FAQ pago 50/50 y "sin costos ocultos" (`:177`, `:562`, `:854`), línea de precios (`:635`).
- Contacto (`:976-1035`): items WhatsApp/correo/horario + tarjeta de diagnóstico; footer (`:1046-1079`): columnas + `footer-bottom`.
- Iconos del sitio: SVG inline `stroke="currentColor"`; insignias de pago serán pastillas de texto (sin logos oficiales por reglas de marca).

## Goals / Non-Goals

**Goals:**
- Franja de 4 garantías sobre `#contacto`, legible en ambos temas, con copy existente.
- Insignias Yape/Plin/Transferencia en tarjeta de contacto y footer.
- `tel:+51970771835` en contacto y footer (+ "Llamar" en la tarjeta si cabe sin ruido).

**Non-Goals:**
- Nuevas promesas, logos oficiales de marcas de pago, JS, drawer ni cambios fuera de contacto/footer.

## Decisions

- **Ubicación de la franja**: justo antes de `#contacto` (dentro de su `section`, arriba del `contact-grid`), 4 ítems en grid (2x2 en móvil) con icono check/reloj/candado/escudo del set actual. Alternativa (bajo el hero) descartada: ahí ya vive `hero-trust` y duplicaría.
- **Insignias**: pastillas `.pay-badge` (borde + texto, colores neutros del tema, ño morado Yape ño celeste Plin para evitar imitar marca). En footer, versión mini en `footer-bottom`.
- **Llamada**: el número visible se desdobla en "WhatsApp · Llamar" (dos anchors: `wa.me` + `tel:`) en el item de contacto y en el footer; en la tarjeta se agrega link "o llámame directo" bajo el CTA de WhatsApp solo si ño recarga (decisión final en el apply con captura).
- **Textos de garantías** (del sitio, sin inventar): "Respuesta en menos de 24 h" / "50% al inicio y 50% contra entrega" / "Sin costos ocultos" / "Soporte post-lanzamiento 30 días".

## Risks / Trade-offs

- La franja suma altura antes del contacto: se compensa con formato compacto (una fila en desktop).
- Si el dueño quiere logos oficiales después, será otro change (descarga + licencia).
