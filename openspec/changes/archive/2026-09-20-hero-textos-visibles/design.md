## Context

- H1 actual (`index.html:333-335`): "Tu negocio vendiendo solo, todos los días" — la coma parte el mensaje; se interpreta que "un hero nunca lleva ','" pide quitarla.
- Subtítulo actual (`index.html:337-339`): "...para que ahorres tiempo y ganes dinero." — se extiende con 3 palabras de cierre.
- `.hero-description` (`styles.css:361`): 1.15rem, color `--text`, sin peso; `.opiniones-section .section-subtitle` solo tiene base gris + sombra en oscuro (`:2007`), apagado sobre foto en ambos temas.

## Goals / Non-Goals

**Goals:**
- H1 sin coma, subtítulo +3 palabras, ambos subtítulos con más presencia en claro y oscuro.
- Solo texto y estilos de esos dos elementos.

**Non-Goals:**
- Tocar H1 de otras páginas, botones, garantías, layout o fotos.

## Decisions

- **H1**: "Tu negocio <span class=hl>vendiendo solo</span> todos los días" (solo se quita la coma; el resaltado queda).
- **Cierre propuesto** (dueño confirma en el apply): "...ganes dinero mientras duermes tranquilo." (+3: mientras/duermes/tranquilo; eco del lenguaje ya usado en servicios). Alternativa: "...ganes dinero cada día sin pausa."
- **Visibilidad hero**: `.hero-description` a 1.25rem, `font-weight: 500` y color pleno (`--text` ya es pleno; si en claro se ve grisáceo por variable, fijar `#fff` con sombra como GEO). Ajuste mínimo que no mueve botones: solo font-size/weight/color, sin tocar márgenes.
- **Visibilidad opiniones**: nueva regla `.opiniones-section .section-subtitle` con 1.15rem + peso 500; color por tema (en claro el velo sobre la foto es claro, así que va `var(--text)` pleno; en oscuro `#fff` con la sombra ya existente). Corrección al plan inicial (blanco en ambos): el blanco en claro sería ilegible.

## Risks / Trade-offs

- Subir el tamaño puede empujar los botones unos px hacia abajo: aceptable, el hero es flexible; no se tocan márgenes para minimizarlo.
- Si el dueño prefiere otro cierre, se cambia en el apply antes de editar.
