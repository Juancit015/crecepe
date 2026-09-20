## Purpose

Garantizar que todo texto sobre fotos de fondo se lea con nitidez en modo claro, usando colores claros de la paleta existente sin alterar el modo oscuro.

## ADDED Requirements

### Requirement: Título del hero legible en modo claro
El sistema SHALL mostrar el H1 del hero en blanco con resaltado `.hl` en cian en modo claro, reservando los colores oficiales solo para la palabra "Google".

#### Scenario: Visita del hero en modo claro
- **WHEN** el visitante carga el hero en modo claro
- **THEN** el título se lee en blanco con "IA" en cian sobre la foto oscura

#### Scenario: Palabra Google intacta
- **WHEN** el visitante mira el título en cualquier tema
- **THEN** la palabra "Google" conserva sus colores oficiales letra por letra

### Requirement: Textos secundarios del hero legibles en modo claro
El sistema SHALL mostrar la descripción y la línea de confianza del hero en tono claro con sombra sutil en modo claro.

#### Scenario: Lectura de descripción y confianza en modo claro
- **WHEN** el visitante lee la descripción o las garantías bajo los botones en modo claro
- **THEN** el texto claro se distingue de la foto oscura sin cambiar su contenido ni posición

### Requirement: Botón Ver servicios con borde marino y hover marino
El sistema SHALL mostrar el botón "Ver servicios" del hero con fondo transparente, borde azul marino y texto blanco en modo claro, limitado a esa instancia.

#### Scenario: Botón visible sobre foto oscura
- **WHEN** el visitante ve los botones del hero en modo claro
- **THEN** "Ver servicios" aparece sin fondo con borde marino y texto blanco junto al botón primario

#### Scenario: Hover con fondo marino en ambos temas
- **WHEN** el visitante pone el cursor sobre "Ver servicios" en modo claro u oscuro
- **THEN** el fondo se vuelve azul marino fijo y el texto permanece blanco

#### Scenario: Otros botones outline intactos
- **WHEN** el visitante ve otro `.btn-outline` fuera del hero
- **THEN** conserva su estilo transparente con borde y texto azul marino

### Requirement: Insignia y título GEO legibles en modo claro
El sistema SHALL mostrar la insignia "Diferenciador" en blanco sobre pastilla oscura y el resaltado del título GEO en cian en modo claro.

#### Scenario: Sección GEO en modo claro
- **WHEN** el visitante llega a la sección GEO en modo claro
- **THEN** la insignia blanca y el resaltado cian se leen sobre la foto nocturna

#### Scenario: Modo oscuro intacto
- **WHEN** el visitante activa el modo oscuro
- **THEN** insignia, títulos, botones y textos conservan exactamente su apariencia actual
