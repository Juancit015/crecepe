## Why

En la sección Diferenciador (fondo nocturno oscuro de ciudad) hay tres puntos de legibilidad y atractivo:
1. El subtítulo ("Cada proyecto incluye SEO para buscadores y GEO para sistemas de inteligencia artificial") se ve apagado sobre la foto.
2. Las dos cards (SEO / GEO) usan glass translúcido con blur y el texto pierde contraste contra el fondo oscuro.
3. Las menciones de plataformas (Google, ChatGPT, Gemini, Perplexity, Claude, AI Overviews) son píldoras de texto planas, poco atractivas.

## What Changes

Solo la sección GEO de la página principal (`index.html`, `assets/css/styles.css`):
- Subtítulo en blanco pleno con sombra para legibilidad sobre la foto.
- Cards en blanco sólido con texto oscuro marino (títulos, párrafos, checks y etiquetas internas adaptados).
- Píldoras de plataformas con fondo blanco y marca SVG simple inline (letra/símbolo genérico, sin assets externos): Google, ChatGPT, Gemini, Perplexity, Claude y AI Overviews.
- La variante `highlight` de la card GEO se conserva como acento (borde cyan) sobre el nuevo fondo blanco.

## Capabilities

### New Capabilities

- `geo-legible`: sección Diferenciador legible y atractiva — subtítulo visible, cards blancas y píldoras de plataformas blancas con marca.

### Modified Capabilities

- Ninguna (ninguna capacidad existente regula el estilo de la sección GEO).

## Impact

- Afectado: bloque `.geo-section` del `index.html` (SVG inline en 6 píldoras) y reglas `.geo-card`/`.geo-engines` en `styles.css`, en ambos temas (la sección es oscura en claro y oscuro).
- Sin assets nuevos, sin cambios de textos ni de schema.
