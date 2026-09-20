## Purpose

Que la sección Diferenciador se lea con claridad sobre su fondo nocturno y luzca atractiva con cards blancas y plataformas identificables.

## ADDED Requirements

### Requirement: Subtítulo GEO visible
El sistema SHALL mostrar el subtítulo de la sección GEO en blanco pleno legible sobre la foto, en modo claro y oscuro.

#### Scenario: Subtítulo sobre fondo nocturno
- **WHEN** el visitante ve la sección Diferenciador en cualquier tema
- **THEN** el subtítulo se lee en blanco nítido con sombra sutil

### Requirement: Cards GEO blancas
El sistema SHALL mostrar las dos cards (SEO y GEO) con fondo blanco sólido y texto en azul marino.

#### Scenario: Cards blancas con texto oscuro
- **WHEN** el visitante ve las cards en cualquier tema
- **THEN** el fondo es blanco, los títulos y párrafos van en marino y los checks conservan su acento

#### Scenario: Destaque GEO conservado
- **WHEN** el visitante ve la card GEO
- **THEN** mantiene su acento diferencial (borde cyan) sobre el fondo blanco

### Requirement: Píldoras de plataformas blancas con marca
El sistema SHALL mostrar cada plataforma con píldora blanca y marca SVG inline.

#### Scenario: Seis plataformas identificables
- **WHEN** el visitante ve la fila de plataformas
- **THEN** Google, ChatGPT, Gemini, Perplexity, Claude y AI Overviews aparecen en píldoras blancas, cada una con su marca y nombre
