## Context

- `.theme-toggle { color: inherit }` (`styles.css:1886-1890`): hereda el color del body (azul oscuro en claro), por eso la luna siempre se ve azul aunque la navbar esté transparente sobre la foto.
- Los enlaces ya tienen su regla adaptativa (`body:not(.dark-mode) .navbar:not(.scrolled) .nav-links a` → blancos); el botón ño tiene equivalente.
- El botón vive en la barra (desktop) y en el drawer marino (móvil); en el drawer ya es blanco por `.nav-theme-row`.

## Goals / Non-Goals

**Goals:**
- Luna blanca sin scroll + azul con scroll en modo claro, en las 8 páginas, desktop y móvil (barra).
- Cero cambios en oscuro y en el drawer.

**Non-Goals:**
- Tocar HTML, JS, iconos, drawer ni el comportamiento del toggle.

## Decisions

- **Una regla espejo**: `body:not(.dark-mode) .navbar:not(.scrolled) .theme-toggle { color: #fff; }` junto a las de enlaces/hamburguesa. Con scroll la regla deja de aplicar y vuelve al heredado azul. Alternativa (variable por estado) descartada: el patrón espejo ya existe y es de una línea.
- **Sin riesgo para el drawer**: su botón hereda `#fff` de `.nav-theme-row`; la nueva regla también da blanco ahí (misma conclusión por especificidad mayor), así que ño hay conflicto en ningún estado.

## Risks / Trade-offs

- Riesgo mínimo: una sola declaración de color acotada a claro + sin scroll; el resto de estados ño se toca.
