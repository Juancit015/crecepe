## Purpose

Dar a las imágenes de fondo del sitio un efecto reveal tipo parallax al hacer scroll: la foto queda fija detrás y el contenido la tapa al bajar y la descubre al subir, excluyendo el hero principal y las imágenes dentro de cards.

## ADDED Requirements

### Requirement: Fondos con reveal al hacer scroll
El sistema SHALL mostrar las imágenes de fondo de las secciones GEO, Opiniones, proceso y de los page-heros de servicios, casos, privacidad y términos con efecto reveal: la imagen permanece fija mientras el contenido hace scroll sobre ella.

#### Scenario: Contenido tapa la imagen al bajar
- **WHEN** el visitante hace scroll hacia abajo sobre una sección con fondo (GEO, Opiniones, proceso o page-hero)
- **THEN** el contenido sube y tapa progresivamente la imagen, que permanece fija detrás

#### Scenario: Imagen sale de nuevo al subir
- **WHEN** el visitante hace scroll hacia arriba después de haber tapado la imagen
- **THEN** el contenido baja y la imagen sale nuevamente a la vista sin saltos ni parpadeos

### Requirement: Hero principal y cards excluidos
El sistema SHALL mantener sin efecto parallax el hero principal del index (`hero-crecepe.avif` vía `.hero-photo-bg`) y todas las imágenes dentro de cards (cards de casos, servicios, opiniones con avatar y foto del CEO).

#### Scenario: Hero principal intacto
- **WHEN** el visitante hace scroll sobre el hero principal del index
- **THEN** el hero se comporta exactamente como antes, sin imagen fija ni reveal

#### Scenario: Cards intactas
- **WHEN** el visitante hace scroll sobre una card con imagen
- **THEN** la imagen de la card hace scroll normal junto con su card, sin fijarse

### Requirement: Movimiento reducido respetado
El sistema SHALL desactivar el efecto parallax cuando el visitante tenga activado `prefers-reduced-motion`, mostrando las imágenes con scroll normal.

#### Scenario: Visitante con movimiento reducido
- **WHEN** el visitante tiene `prefers-reduced-motion: reduce` y recorre una sección con fondo
- **THEN** la imagen hace scroll normal con el contenido, sin fijarse ni animarse

### Requirement: Legibilidad y temas sin cambios
El sistema SHALL conservar los velos, contrastes y comportamiento de temas claro/oscuro actuales sobre las imágenes de fondo; el parallax solo cambia el movimiento, no la apariencia.

#### Scenario: Texto legible durante el reveal
- **WHEN** el contenido tapa o descubre la imagen durante el scroll en cualquier tema
- **THEN** el texto se mantiene legible con los mismos velos y sombras actuales, sin destellos

### Requirement: Rendimiento sin tirones en móvil
El sistema SHALL mantener scroll fluido (sin tirones perceptibles) en dispositivos móviles al aplicar el parallax, usando respaldo sin `background-attachment: fixed` donde el navegador no lo soporte (Safari iOS).

#### Scenario: Scroll en Safari iOS
- **WHEN** el visitante recorre una sección con fondo en Safari iOS
- **THEN** el efecto reveal funciona igual mediante el mecanismo de respaldo, sin tirones ni imagen congelada
