## Context

Ver `proposal.md`. Estado (`index.html` líneas 729–730 y 748–749, `styles.css` 1029–1040): 2 `.case-link` inline seguidos, sin contenedor; estilo texto con hover de gap. `.case-body` es flex column presumably (`margin-top: auto` en el link sugiere columna).

## Goals / Non-Goals

**Goals:**
- 2 botones táctiles (44px), primario + borde, en ambos temas y desktop/móvil.

**Non-Goals:**
- No se cambian destinos, textos, iconos ni el resto de la card.

## Decisions

- **Decisión 1: contenedor `.case-actions` + píldoras.**
  `<div class="case-actions">` con `display: flex; flex-wrap: wrap; gap: 10px; margin-top: auto;` (el `auto` se muda del link al contenedor para mantener el anclaje abajo). `.case-link` con `padding: 12px 22px; border-radius: 50px;` (≈44px de alto con font 0.95rem). Alternativa (solo gap sin botones) descartada: no resuelve el área táctil.
- **Decisión 2: primario sólido vs borde, reutilizando tokens.**
  Primer link: `background: var(--accent); color: #fff;`; segundo: `border: 1px solid` + color actual. Hover conserva desplazamiento de flecha. En oscuro heredan el comportamiento de enlaces actuales (verificar contraste del borde).
- **Decisión 3: sin clases nuevas en el HTML salvo el contenedor.**
  Los links conservan `.case-link`; la variante secundaria se selecciona con `.case-actions .case-link + .case-link` o `:last-child`. Supuesto: orden estable (caso completo primero).

## Risks / Trade-offs

- [Riesgo] `.case-body` debe seguir siendo flex column para que `margin-top: auto` ancle los botones abajo; verificar al implementar.

## Migration Plan

- Editar 2 cards en index + CSS. Verificar desktop/móvil en ambos temas (área táctil, wrap). `openspec validate botones-casos`.

## Open Questions

- Ninguna.
