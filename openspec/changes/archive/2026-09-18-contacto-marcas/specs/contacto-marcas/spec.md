## Purpose

Que Contacto se reconozca al instante por sus marcas (WhatsApp, correo, horario) y el Agendar invite en verde.

## ADDED Requirements

### Requirement: Iconos de contacto con marca
El sistema SHALL mostrar las tres pastillas de Contacto con identidad de marca: WhatsApp verde oficial, email estilo Gmail y reloj a juego.

#### Scenario: WhatsApp original
- **WHEN** el visitante ve la fila de WhatsApp
- **THEN** la pastilla es verde `#25D366` con el glifo oficial en blanco

#### Scenario: Email original
- **WHEN** el visitante ve la fila de correo
- **THEN** la pastilla blanca muestra el sobre original en marino (el intento Gmail se descartó por el usuario)

#### Scenario: Reloj a juego
- **WHEN** el visitante ve la fila de horario
- **THEN** la pastilla lleva un reloj en marino sobre fondo blanco, con el mismo formato que las otras

### Requirement: Botón Agendar verde
El sistema SHALL mostrar "Agendar por WhatsApp" en verde WhatsApp con hover más oscuro.

#### Scenario: Agendar verde
- **WHEN** el visitante ve la tarjeta de diagnóstico
- **THEN** el botón es verde con texto blanco y al hover oscurece
