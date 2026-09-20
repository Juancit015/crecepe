## Why

Las secciones con imagen de fondo del sitio se ven estáticas: la foto hace scroll junto con el contenido y no hay sensación de profundidad. Un efecto parallax tipo reveal (la imagen queda fija detrás y el contenido la tapa al bajar, y la descubre al subir) da un acabado más pulido y moderno sin cambiar el diseño actual.

## What Changes

- Las imágenes de fondo de las secciones (GEO, Opiniones, proceso, page-heros de servicios, casos, privacidad, términos) quedan fijas detrás del flujo de la página con efecto reveal al hacer scroll.
- Al bajar, el contenido tapa la imagen; al subir, la imagen sale nuevamente.
- Excluidos: el hero principal del index (`hero-crecepe.avif`) y todas las imágenes dentro de cards.
- El efecto respeta `prefers-reduced-motion` (sin animación para quienes lo piden) y no altera velos, legibilidad ni temas claro/oscuro existentes.
- Sin nuevas dependencias: solo CSS (`background-attachment: fixed` con respaldo `position: sticky`) y un refuerzo JS con `IntersectionObserver` donde el CSS puro no alcance.

## Capabilities

### New Capabilities

- `parallax-fondos`: comportamiento de reveal parallax en imágenes de fondo del sitio (alcance, exclusiones, movimiento, accesibilidad y rendimiento).

### Modified Capabilities

- Ninguna: los requisitos de velos y legibilidad (`fondos-fotograficos`, `fondos-servicios`, `fondos-casos`, `textos-sobre-foto`) no cambian, solo se suma comportamiento de movimiento.

## Impact

- Afecta `assets/css/styles.css`, `assets/js/main.js` y las secciones con fondo en `index.html`, páginas de `servicios/`, `casos/`, `privacidad.html` y `terminos.html`.
- Riesgo principal: `background-attachment: fixed` falla en Safari iOS; se contempla respaldo con `sticky`/JS.
- Sin cambios de APIs ni dependencias.
