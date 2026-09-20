## Purpose

Mostrar las fotos de fondo del sitio (hero, GEO y Opiniones) protagonistas en modo claro y con presencia atenuada en modo oscuro, con texto siempre legible sobre ellas en ambos temas.

## ADDED Requirements

### Requirement: Modo claro muestra foto con velo ligero
El sistema SHALL mostrar las tres fotos de fondo con una capa `linear-gradient` ligera de opacidad máxima 0.35 en modo claro.

#### Scenario: Visita en modo claro
- **WHEN** el visitante recorre hero, GEO y Opiniones en modo claro
- **THEN** cada foto se ve protagonista con velo tenue (0.35→0.25) del tono del tema

### Requirement: Modo oscuro muestra foto con velo medio
El sistema SHALL mostrar las tres fotos de fondo con una capa `linear-gradient` de opacidad máxima 0.60 en modo oscuro, para que las fotos claras no laven el texto blanco.

#### Scenario: Visita en modo oscuro
- **WHEN** el visitante recorre hero, GEO y Opiniones en modo oscuro
- **THEN** cada foto se ve atenuada con velo medio (0.60→0.50) sin llegar a opacarse como el original (0.80–0.92)

#### Scenario: Comparación con el velo original
- **WHEN** se compara con el velo anterior (0.80–0.92)
- **THEN** la foto sigue percibiéndose nítida en ambos temas

### Requirement: Texto con sombra sutil en oscuro sobre foto
El sistema SHALL aplicar `text-shadow` sutil al H1 del hero y a los títulos/subtítulos de GEO y Opiniones en modo oscuro, como refuerzo de legibilidad sobre la foto.

#### Scenario: Título blanco sobre foto clara en oscuro
- **WHEN** el visitante ve un título blanco sobre la foto del hero o de Opiniones en modo oscuro
- **THEN** el texto se lee con nitidez gracias a la sombra, sin subir el velo sobre 0.60

#### Scenario: Subtítulo sobre foto en oscuro
- **WHEN** el visitante lee un subtítulo sobre foto en modo oscuro
- **THEN** el subtítulo mantiene contraste suficiente sin cambiar su color base
