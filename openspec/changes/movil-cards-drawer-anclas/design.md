## Context

Ver `proposal.md` (Why). Estado actual: `.service-photo` en móvil mide 118px fijos con `align-items: start` en la card (hueco bajo la foto desde que la columna de texto creció con los bullets); el drawer usa `width: min(60vw, 340px)`; y no hay `scroll-margin-top` en ningún viewport (en PC el padding de 64px de sección disimula el aterrizaje, en móvil no alcanza).

## Goals / Non-Goals

**Goals:**
- Foto a altura completa de la card en móvil, sin deformar (recorte con `object-fit`).
- Drawer 15% más ancho solo en móvil.
- Títulos de sección totalmente visibles al navegar desde la hamburguesa.

**Non-Goals:**
- Cambios en desktop, markup, JS, fotos nuevas o comportamiento del velo.

## Decisions

- **Foto fija original** (`height: 118px`): el estirado a altura completa se probó y se revirtió a pedido del dueño (se veía muy alta); queda pendiente su idea para el hueco bajo la foto.
- **`min(69vw, 390px)`**: 60vw × 1.15 y tope 340px × 1.15, mismo patrón del spec original.
- **`scroll-margin-top` en `section[id]` solo móvil** (valor = altura de navbar móvil + respiro, a medir en apply): respeta el scroll suave existente y no mueve el layout. Alternativa descartada: `scroll-padding-top` global — afectaría desktop, que ya funciona.

## Risks / Trade-offs

- [Riesgo] El recorte de la foto puede cortar rostros/objetos según la altura de cada card → Mitigación: `object-position: center` y revisión visual en las 3 cards; las fotos actuales son escenas abiertas que toleran recorte.
- [Riesgo] Drawer más ancho tapa más contenido → Mitigación: 69% aún deja ~1/3 visible para cerrar por toque fuera; el velo y el cierre no cambian.
