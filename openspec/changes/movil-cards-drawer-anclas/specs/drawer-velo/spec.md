## MODIFIED Requirements

### Requirement: Drawer al 60 por ciento
El sistema SHALL mostrar el panel con ancho 69% del viewport (con tope 390px).

#### Scenario: Ancho en móvil 360px
- **WHEN** el visitante abre el drawer en un teléfono de 360px
- **THEN** el panel mide ~248px de ancho

## ADDED Requirements

### Requirement: Ancla con título visible en móvil
El sistema SHALL dejar el título de la sección destino totalmente visible bajo la navbar fija al navegar desde un link del drawer en móvil.

#### Scenario: Salto desde la hamburguesa
- **WHEN** el visitante toca una sección en la hamburguesa en móvil
- **THEN** la página hace scroll a la sección y su título se ve completo, sin quedar tapado a la mitad por la navbar
