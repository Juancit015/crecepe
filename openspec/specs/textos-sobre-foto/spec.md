## Purpose

Garantizar que todo texto sobre fotos de fondo se lea con nitidez en modo claro, usando colores claros de la paleta existente sin alterar el modo oscuro.

## Requirements

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

### Requirement: Botones del hero estilo glass en modo claro
El sistema SHALL mostrar ambos botones del hero en modo claro con fondo translúcido oscuro, borde grisáceo de 2px, texto blanco, blur y transición spring; al hover el fondo se vuelve marino manteniendo el texto blanco, con elevación.

#### Scenario: Par de botones en modo claro
- **WHEN** el visitante ve el hero en modo claro sin cursor sobre los botones
- **THEN** Agendar y Ver servicios muestran texto blanco con contorno grisáceo sobre la foto

#### Scenario: Hover en modo claro
- **WHEN** el visitante pone el cursor sobre cualquier botón del hero en modo claro
- **THEN** el fondo se vuelve azul marino con texto blanco y el botón se eleva

### Requirement: Botón Agendar cian en modo oscuro
El sistema SHALL mostrar el botón Agendar en modo oscuro con fondo y borde cian translúcidos y texto cian; al hover el fondo se vuelve cian sólido con texto blanco.

#### Scenario: Agendar en modo oscuro
- **WHEN** el visitante ve el hero en modo oscuro sin cursor sobre Agendar
- **THEN** el botón muestra texto y contorno cian sobre la foto

#### Scenario: Hover de Agendar en modo oscuro
- **WHEN** el visitante pone el cursor sobre Agendar en modo oscuro
- **THEN** el fondo se vuelve cian sólido con texto blanco

### Requirement: Botón Ver servicios glass claro en modo oscuro
El sistema SHALL mostrar el botón Ver servicios en modo oscuro con fondo y borde blanquecinos translúcidos y texto blanco; al hover el fondo se vuelve blanco con texto marino.

#### Scenario: Ver servicios en modo oscuro
- **WHEN** el visitante ve el hero en modo oscuro sin cursor sobre Ver servicios
- **THEN** el botón muestra texto y contorno blanquecinos sobre la foto

#### Scenario: Hover de Ver servicios en modo oscuro
- **WHEN** el visitante pone el cursor sobre Ver servicios en modo oscuro
- **THEN** el fondo se vuelve blanco con texto azul marino

### Requirement: Insignia y título GEO legibles en modo claro
El sistema SHALL mostrar la insignia "Diferenciador" en blanco sobre pastilla oscura y el resaltado del título GEO en cian en modo claro.

#### Scenario: Sección GEO en modo claro
- **WHEN** el visitante llega a la sección GEO en modo claro
- **THEN** la insignia blanca y el resaltado cian se leen sobre la foto nocturna

#### Scenario: Modo oscuro intacto
- **WHEN** el visitante activa el modo oscuro
- **THEN** insignia, títulos, botones y textos conservan exactamente su apariencia actual

### Requirement: Héroes legales en blanco sobre foto
El sistema SHALL mostrar migajas, título y línea de actualización de las páginas legales en blanco con sombra sutil, igual que en las páginas de servicios.

#### Scenario: Términos igual que servicios
- **WHEN** el visitante abre Términos en cualquier tema
- **THEN** "Inicio / Términos", el título y "Última actualización" se leen en blanco sobre la foto como en servicios

#### Scenario: Privacidad igual que servicios
- **WHEN** el visitante abre Privacidad en cualquier tema
- **THEN** "Inicio / Privacidad", el título y "Última actualización" se leen en blanco sobre la foto como en servicios

### Requirement: Descripción del hero y subtítulo de Opiniones visibles
El sistema SHALL mostrar la descripción del hero y el subtítulo de Opiniones con mayor tamaño, peso y brillo sobre sus fotos, en ambos temas.

#### Scenario: Descripción del hero con presencia
- **WHEN** el visitante lee la descripción bajo el H1 en cualquier tema
- **THEN** el texto se lee más grande y marcado que antes, sin mover botones ni garantías

#### Scenario: Subtítulo de Opiniones legible
- **WHEN** el visitante lee "Proyectos de AZ Consulting donde participé como colaborador" en cualquier tema
- **THEN** el texto destaca sobre la foto: pleno en modo claro (velo claro) y blanco en modo oscuro
