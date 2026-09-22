## MODIFIED Requirements

### Requirement: Fondos con reveal al hacer scroll
El sistema SHALL mostrar las imágenes de fondo de las secciones GEO, Opiniones, proceso y de los page-heros de servicios, casos, privacidad y términos con efecto reveal en desktop (con puntero fino): la imagen permanece fija mientras el contenido hace scroll sobre ella. En dispositivos táctiles las imágenes hacen scroll normal con el contenido y las secciones GEO, Opiniones, proceso y Contacto usan recortes verticales dedicados.

#### Scenario: Contenido tapa la imagen al bajar
- **WHEN** el visitante hace scroll hacia abajo sobre una sección con fondo (GEO, Opiniones, proceso o page-hero) en desktop
- **THEN** el contenido sube y tapa progresivamente la imagen, que permanece fija detrás

#### Scenario: Imagen sale de nuevo al subir
- **WHEN** el visitante hace scroll hacia arriba después de haber tapado la imagen en desktop
- **THEN** el contenido baja y la imagen sale nuevamente a la vista sin saltos ni parpadeos

#### Scenario: Recortes verticales en táctil
- **WHEN** el visitante recorre GEO, Opiniones, proceso o Contacto en un dispositivo táctil
- **THEN** ve el recorte vertical dedicado de cada fondo (encuadre completo, sin zoom), con los mismos velos de desktop

#### Scenario: Scroll normal en táctil
- **WHEN** el visitante recorre una sección con fondo en un dispositivo táctil
- **THEN** la imagen se mueve junto con el contenido, sin fijarse, sin zoom de golpe y sin reacomodos al soltar el scroll

### Requirement: Rendimiento sin tirones en móvil
El sistema SHALL mostrar las imágenes de fondo con scroll normal en dispositivos móviles, sin aplicar `background-attachment: fixed` ni mecanismos de respaldo que fijen la imagen.

#### Scenario: Scroll en Safari iOS
- **WHEN** el visitante recorre una sección con fondo en Safari iOS
- **THEN** la imagen hace scroll normal con el contenido, sin tirones ni imagen congelada

#### Scenario: Scroll en móvil sin zoom
- **WHEN** el visitante recorre Diferenciador, Opiniones, proceso o Contacto en móvil
- **THEN** no hay zoom de golpe, tirones, imagen congelada ni encuadre panorámico recortado durante ni después del scroll
