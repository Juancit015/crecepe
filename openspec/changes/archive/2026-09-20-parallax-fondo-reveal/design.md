## Context

Ver `proposal.md` (Why) y `specs/parallax-fondos/spec.md` (requisitos). Estado actual: los fondos se implementan de dos formas: (1) reglas CSS con `background: linear-gradient(...), url(...)` en `assets/css/styles.css` (GEO línea 722, Opiniones 1664/1669, `.hero-photo-bg` 302/2203) y (2) estilos inline `url('...') center/cover no-repeat` en page-heros de `index.html`, `servicios/`, `casos/`, `privacidad.html` y `terminos.html`. Ya existe `reveal on scroll` con `IntersectionObserver` en `assets/js/main.js`. Restricción clave: `background-attachment: fixed` no funciona en Safari iOS y puede causar tirones con imágenes AVIF pesadas en móvil.

## Goals / Non-Goals

**Goals:**
- Reveal parallax en todos los fondos de sección con una sola clase reutilizable.
- Respaldo funcional en iOS sin duplicar imágenes ni romper velos existentes.
- Cero regresiones en hero principal, cards, temas y LCP del hero.

**Non-Goals:**
- Cambiar velos, paleta, tipografías o layout de las secciones.
- Parallax con velocidad variable por capa (una sola velocidad fija: fondo quieto).
- Tocar `hero-crecepe.avif`, su preload LCP o `.hero-photo-bg`.

## Decisions

- **Clase `.parallax-fondo` con `background-attachment: fixed !important` como base.** Es CSS puro, sin JS, y produce exactamente el reveal pedido (fondo quieto + contenido que tapa/destapa). El `!important` es obligatorio: los `background` shorthand de las secciones (`.geo-section`, `.opiniones-section.has-bg`, reglas dark-mode) resetean el attachment y por orden/especificidad ganarían sin él — esto se detectó en implementación porque el Diferenciador (GEO) quedaba sin efecto. El guard del hero y el `prefers-reduced-motion` también llevan `!important` y van después, así la cascada queda: base < hero < reduced-motion. Alternativa descartada: `position: sticky` por sección, que exige reestructurar el HTML de cada página.
- **Respaldo iOS con `IntersectionObserver` + `background-position-y` en `main.js`.** Se detecta soporte (`CSS.supports('background-attachment: fixed')` más heurística táctil/iOS) y solo entonces se activa el ajuste de posición por scroll con `requestAnimationFrame`. Alternativa descartada: librería externa (peso innecesario para un efecto de una sola velocidad).
- **`prefers-reduced-motion` desactiva todo.** Media query en CSS para la base y guarda en JS para el respaldo. Sin excepción.
- **Se excluye `.hero-photo-bg` por selector, no por lista de páginas.** La regla parallax nunca aplica a `.hero-photo-bg`; así futuros fondos con la clase la heredan y el hero queda protegido aunque cambie su imagen.

## Risks / Trade-offs

- [Risk] `background-attachment: fixed` repinta toda la imagen en cada frame en algunos Android de gama baja → Mitigación: limitar el efecto a secciones en viewport vía `content-visibility` existente y verificar en dispositivo real antes de cerrar.
- [Risk] El respaldo JS con `background-position-y` puede verse menos suave que el fijo nativo → Mitigación: actualizar solo con `requestAnimationFrame` y paso proporcional al scroll, sin transiciones CSS que luchen con el scroll.
- [Risk] Fondos inline en page-heros no comparten selector → Mitigación: añadir la clase `.parallax-fondo` junto al estilo inline en cada page-hero (8 archivos), manteniendo el `url()` donde está.

## Migration Plan

1. Desplegar CSS + JS + clases como cambio puramente visual; sin migraciones de datos.
2. Rollback: quitar la clase `.parallax-fondo` (o revertir el commit) devuelve el scroll normal al instante, ya que los fondos y velos originales no se tocan.

## Open Questions

- Ninguna que bloquee: la suavidad final en el Android de gama baja del público se valida en la implementación con prueba manual.
