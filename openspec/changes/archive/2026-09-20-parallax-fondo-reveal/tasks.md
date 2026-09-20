## 1. Base CSS del reveal

- [x] 1.1 Crear la clase `.parallax-fondo` en `assets/css/styles.css` con `background-attachment: fixed`, `background-size: cover` y `background-position: center`, y verificar que una sección de prueba muestra el fondo fijo al hacer scroll en escritorio.
- [x] 1.2 Añadir media query `prefers-reduced-motion: reduce` que devuelva `.parallax-fondo` a scroll normal, y verificar con emulación de movimiento reducido que el fondo hace scroll con el contenido.
- [x] 1.3 Excluir explícitamente `.hero-photo-bg` del efecto y verificar que el hero principal del index se comporta como antes.

## 2. Aplicación a las secciones

- [x] 2.1 Aplicar `.parallax-fondo` a las secciones GEO y Opiniones del index y verificar el reveal (tapa al bajar, descubre al subir) en modo claro y oscuro.
- [x] 2.2 Aplicar `.parallax-fondo` a la sección proceso del index y a los page-heros de las 3 páginas de `servicios/`, 2 de `casos/`, `privacidad.html` y `terminos.html`, manteniendo sus `url()` y velos actuales, y verificar cada página con scroll arriba y abajo.
- [x] 2.3 Verificar que ninguna imagen dentro de cards cambió su comportamiento (cards de casos, servicios, avatares de opiniones, foto CEO).

## 3. Respaldo móvil y cierre

- [x] 3.1 Implementar en `assets/js/main.js` el respaldo con `IntersectionObserver` + `requestAnimationFrame` para navegadores sin `background-attachment: fixed` (Safari iOS), respetando `prefers-reduced-motion`, y verificar el reveal en emulación iOS sin tirones.
- [x] 3.2 Prueba manual final en móvil real y escritorio (Chrome, Safari): scroll fluido, texto legible sobre fondos en ambos temas, sin regresión del LCP del hero. Validada por el usuario + fix de cascada (`!important`) para el Diferenciador/GEO.
