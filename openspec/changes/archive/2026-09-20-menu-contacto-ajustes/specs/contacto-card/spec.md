## Purpose

Que la card de "Diagnóstico gratuito" se lea perfecta sobre su fondo oscuro: título en blanco y botón de correo con color por tema (azul sólido en claro, fantasma cyan en oscuro).

## ADDED Requirements

### Requirement: Título blanco de la card
El sistema SHALL mostrar el título "Diagnóstico gratuito" en blanco en ambos temas.

#### Scenario: Título sobre fondo oscuro
- **WHEN** el visitante ve la card de contacto en cualquier tema
- **THEN** el título se lee blanco sobre el fondo oscuro de la card

### Requirement: Botón de correo por tema
El sistema SHALL mostrar "Prefiero escribir un correo" en azul oscuro sólido con texto blanco en modo claro, y transparente con borde y texto cyan en modo oscuro.

#### Scenario: Botón en modo claro
- **WHEN** el visitante ve el botón de correo en modo claro
- **THEN** el botón es azul oscuro sólido con texto blanco

#### Scenario: Botón en modo oscuro
- **WHEN** el visitante ve el botón de correo en modo oscuro
- **THEN** el botón es transparente con borde y texto cyan
