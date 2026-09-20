## Context

Ver `proposal.md` para el porqué. Estado actual (`index.html` líneas 499–544, `styles.css` líneas 656–730):
- `.geo-section`: fondo foto nocturna en ambos temas; `.section-subtitle` hereda color tenue.
- `.geo-card`: `rgba(255,255,255,0.06)` + `blur(8px)`, texto blanco translúcido; `.highlight` con gradiente azul y borde cyan.
- `.geo-engines span`: píldoras `rgba(255,255,255,0.08)` solo texto.

## Goals / Non-Goals

**Goals:**
- Subtítulo blanco pleno, cards blancas con texto marino, píldoras blancas con marca inline.

**Non-Goals:**
- No se cambian textos, orden, layout de grilla ni el fondo fotográfico; no se toca modo claro/oscuro fuera de GEO.

## Decisions

- **Decisión 1: cards blancas sólidas, texto marino fijo.**
  `.geo-card { background: #fff; color: #0A1F44; }` con párrafos/items/checks en marino y `backdrop-filter` retirado; `.highlight` conserva borde cyan (y opcional franja superior) como acento. Marino fijo porque la sección es oscura en ambos temas. Alternativa (subir opacidad del glass) descartada: el usuario pidió blanco explícito.
- **Decisión 2: subtítulo blanco + sombra reutilizando el patrón del hero.**
  `color: #fff; text-shadow: 0 2px 12px rgba(0,0,0,0.45)`, igual que `hero-description` en claro.
- **Decisión 3: marcas SVG genéricas inline, sin assets.**
  Cada píldora lleva un mini-SVG (inicial o símbolo simple con el color de la marca) + nombre; fondo blanco, texto marino. Decisión acordada con el usuario. Alternativa (logos oficiales como imagen) descartada: peso extra y uso de marcas.

## Risks / Trade-offs

- [Riesgo] Las `.geo-tag` internas ("Buscadores", "IA Generativa") van sobre blanco: ajustar su fondo a marino translúcido para que no se pierdan.

## Migration Plan

- Editar `index.html` (6 SVG inline) y `styles.css` (cards, subtítulo, píldoras, tags internos). Recorrido visual en ambos temas, desktop + móvil. `openspec validate geo-cards-blancas`.

## Open Questions

- Ninguna que bloquee specs o tareas.
