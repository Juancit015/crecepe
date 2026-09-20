## Context

- Navbar actual (`index.html:280-310`): logo + hamburguesa (derecha) + tema fuera; panel `#navLinks` con 7 links + CTA.
- JS (`assets/js/main.js:146-189`): toggle por ids (`navToggle`, `navLinks`), cierre al pulsar link, clic fuera, Escape y resize >768px.
- Referencia AZ: toggler a la izquierda del logo; tema + sociales dentro del colapso. Aquí: mismo esquema pero sin sociales.
- Reglas de color por tema/scroll ya existen (`styles.css:250-257`, `:2063`); el panel abierto ya ignora el scroll.

## Goals / Non-Goals

**Goals:**
- Móvil: barra con solo ☰ (izquierda) + logo; panel con links + CTA + tema.
- Conservar animación a X, cierre actual y colores por tema/scroll.
- Desktop pixel-igual.

**Non-Goals:**
- Agregar redes, cambiar links/destinos, tocar Bootstrap (ño se usa) ni otros breakpoints.

## Decisions

- **Reordenar solo en móvil por CSS** (`order` en el media query) o mover el botón en HTML: se elige mover `#navToggle` antes del logo en HTML (más simple y semántico; en desktop se reordena con `order` o se deja primero sin efecto visual si el layout lo permite — verificar en el apply).
- **Tema dentro de `#navLinks`** como última fila ("Tema: [toggle]" o solo el botón con label). El JS usa ids, así que al mover el botón el listener sigue funcionando sin cambios.
- **Fila del tema en el panel**: botón + texto "Modo oscuro/claro" para que se entienda fuera de la barra; hereda colores del panel (ya cubiertos por reglas existentes).
- **Sin cambios JS previstos**: ids intactos; solo verificar cierre al pulsar link y clic-fuera con el botón dentro del panel (el clic en el tema ño debe cerrar el menú — revisar `main.js:165-167`: como el toggle estará dentro de `navLinks`, el clic-fuera ño lo toca; el cierre por link solo afecta a `a`, ño al `button`).

- **Panel lámina, ño fullscreen**: el overlay actual (`position: fixed; inset: 0`) se cambia por un desplegable bajo la navbar (altura auto con `max-height` ~50-60vh, ancho completo o casi, con sombra inferior), animado con colapso (max-height/transform) en vez del fundido actual. La X, los cierres y los colores por tema se conservan; el `body overflow hidden` puede sobrar con media pantalla (evaluar en el apply).
- **Nota**: `proposal.md` ño se tocó (revisión rechazada por el dueño); el alcance media-pantalla vive en spec, design y tasks.

## Risks / Trade-offs

- Tema a 2 toques en móvil (aceptado por el dueño a cambio de barra limpia).
- Riesgo bajo de regresión en desktop: el reorden debe acotarse al breakpoint móvil; verificar desktop tras el cambio.
