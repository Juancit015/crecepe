## ADDED Requirements

### Requirement: Recorte móvil de GEO contiene a la mujer
El archivo `geo-fondo-movil.avif` (600×800, servido a dispositivos táctiles) MUST contener el rostro de la mujer sonriente, con la ventana de recorte centrada en su posición del original (~60% horizontal). Queda prohibido el recorte central ciego que solo deja su hombro.

#### Scenario: Mujer visible en tablet
- **WHEN** el visitante abre el Diferenciador en tablet (~768px, táctil)
- **THEN** la mujer se ve dentro del encuadre, Ño solo su hombro

#### Scenario: Mujer visible en móvil
- **WHEN** el visitante abre el Diferenciador en móvil (~375px)
- **THEN** la mujer se ve dentro del encuadre

#### Scenario: Desktop intacto
- **WHEN** el visitante abre el Diferenciador en desktop con mouse
- **THEN** se sirve el panorama original sin cambios
