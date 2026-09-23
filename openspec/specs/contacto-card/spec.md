## Purpose

Que la card de "Diagnóstico gratuito" se lea perfecta sobre su fondo oscuro: título en blanco y botón de correo con color por tema (azul sólido en claro, fantasma cyan en oscuro).

## Requirements

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

### Requirement: Card sólida sin badges de pago
El sistema SHALL mostrar la tarjeta con fondo sólido (`#ffffff` en claro, `#0F1D3A` en oscuro), sin badges de pago, y con párrafo, `small` y link legibles en ambos temas.

#### Scenario: Sin badges
- **WHEN** el visitante ve la tarjeta
- **THEN** no hay badges de Yape, Plin ni Transferencia

#### Scenario: Texto pequeño legible
- **WHEN** el visitante lee "Propuesta personalizada en menos de 24 horas…" en cualquier tema
- **THEN** el texto tiene contraste suficiente sobre el fondo sólido (link "llámame directo" blanco con hover cyan en oscuro)

### Requirement: Contacto con persona y zona, sin domicilio exacto

La tarjeta de contacto MUST mostrar el nombre de quien atiende ("Habla con Juan") y la zona de atención ("Paiján, La Libertad · trabajo remoto para todo el Perú"), y MUST NOT mostrar la dirección exacta (calle/número) ni mapa con ubicación precisa en la parte visible.

#### Scenario: Confianza sin exponer domicilio

- **WHEN** un visitante abre la sección de contacto
- **THEN** ve el nombre de Juan, WhatsApp, correo, horario y zona de atención, sin calle ni mapa exacto

### Requirement: Dirección exacta solo en schema

La dirección exacta (calle/número) MUST NOT aparecer en la parte visible de la página y SHALL mantenerse únicamente dentro del JSON-LD, conservando la consistencia NAP para SEO local sin exposición visual.

#### Scenario: NAP en schema

- **WHEN** se valida el schema ProfessionalService
- **THEN** la dirección completa sigue presente en el JSON-LD aunque no sea visible en la página
