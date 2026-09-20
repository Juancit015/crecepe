## Context

Ver `proposal.md`. Estado (`styles.css`): `.navbar` transparente, `.scrolled` (línea 139, fondo blanco blur, la pone el JS a 40px); en oscuro scrolled es marino (línea 1921). Links `var(--text)` (línea 188), logo azul / blanco en oscuro (líneas 172–180). Menú móvil: panel blanco fullscreen (líneas 1604–1626), marino en oscuro (línea 1964).

## Goals / Non-Goals

**Goals:**
- Blanco sin scroll en claro, azul con scroll; blanco estable en oscuro; logo y hamburguesa a juego; menú móvil coherente con su panel.

**Non-Goals:**
- No se tocan el umbral de 40px, el blur, el layout ni el botón de tema (solo verificarlo).

## Decisions

- **Decisión 1: selector de estado `body:not(.dark-mode) .navbar:not(.scrolled)`.**
  Marca, `.nav-links a` y `.nav-toggle` en `#fff` con sombra; `logo-img` con `invert(1)` como el footer. Sin scroll = sobre foto en todas las páginas. Alternativa (JS que cambie clases de color) descartada: el estado ya existe en CSS.
- **Decisión 2: en oscuro no se agrega nada salvo verificar.**
  Scrolled marino + texto actual ya legible; el selector de la Decisión 1 no aplica en oscuro por `body:not(.dark-mode)`.
- **Decisión 3: el menú móvil abierto manda sobre el scroll.**
  `.nav-links.open a` conserva color de panel (regla posterior o de igual especificidad mayor): azul en claro, blanco en oscuro. Si no, enlaces blancos invisibles sobre panel blanco al abrir arriba del todo.

## Risks / Trade-offs

- [Riesgo] Icono sol/luna del toggle con texto blanco: verificar contraste; si pierde, teñirlo igual que los enlaces.

## Migration Plan

- Solo CSS. Verificar index + 1 subpágina en ambos temas, con/sin scroll y menú móvil abierto. `openspec validate nav-texto-adaptativo`.

## Open Questions

- Ninguna.
