## MODIFIED Requirements

### Requirement: Título blanco de la card
El sistema SHALL mostrar el título "Diagnóstico gratuito" en navy en modo claro y en blanco en modo oscuro, sobre fondo sólido de la card.

#### Scenario: Título sobre fondo oscuro
- **WHEN** el visitante ve la card de contacto en modo oscuro
- **THEN** el título se lee blanco sobre el fondo navy sólido (reversión del glass a pedido)

### Requirement: Botón de correo por tema
El sistema SHALL mostrar "Prefiero escribir un correo" en azul oscuro sólido con texto blanco en modo claro, y transparente con borde y texto cyan en modo oscuro.

#### Scenario: Botón en modo claro
- **WHEN** el visitante ve el botón de correo en modo claro
- **THEN** el botón es azul oscuro sólido con texto blanco

#### Scenario: Botón en modo oscuro
- **WHEN** el visitante ve el botón de correo en modo oscuro
- **THEN** el botón es transparente con borde y texto cyan

## ADDED Requirements

### Requirement: Card sólida sin badges de pago
El sistema SHALL mostrar la tarjeta con fondo sólido (`#ffffff` en claro, `#0F1D3A` en oscuro), sin badges de pago, y con párrafo, `small` y link legibles en ambos temas.

#### Scenario: Sin badges
- **WHEN** el visitante ve la tarjeta
- **THEN** no hay badges de Yape, Plin ni Transferencia

#### Scenario: Texto pequeño legible
- **WHEN** el visitante lee "Propuesta personalizada en menos de 24 horas…" en cualquier tema
- **THEN** el texto tiene contraste suficiente sobre el fondo sólido
