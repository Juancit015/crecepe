## Purpose

Que Contacto se reconozca al instante por sus marcas (WhatsApp, correo, horario) y el Agendar invite en verde.

## Requirements

### Requirement: Iconos de contacto con marca
El sistema SHALL mostrar las tres pastillas de Contacto con identidad de marca: WhatsApp verde oficial, sobre original en marino y reloj a juego.

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

### Requirement: Franja de garantías sobre contacto
El sistema SHALL mostrar las 4 garantías (respuesta en menos de 24 h, 50% al inicio y 50% contra entrega, sin costos ocultos, soporte post-lanzamiento 30 días) en una barra de movimiento continuo ubicada debajo de la sección Opiniones, en ambos temas, en lugar de una franja estática sobre Contacto.

#### Scenario: Garantías bajo Opiniones
- **WHEN** el visitante termina de leer los testimonios en cualquier tema
- **THEN** encuentra las 4 garantías en la barra en movimiento antes de seguir bajando

#### Scenario: Sin franja estática sobre Contacto
- **WHEN** el visitante llega a Contacto
- **THEN** ve directamente los datos de contacto, sin franja previa de garantías

#### Scenario: Sin copy nuevo
- **WHEN** el visitante lee cada garantía
- **THEN** cada texto ya existe hoy en hero, FAQ o precios (no hay promesas nuevas)

### Requirement: Insignias de pago estilo propio
El sistema SHALL mostrar insignias "Yape · Plin · Transferencia" con estilo propio (sin logos oficiales) en la tarjeta de contacto y el footer.

#### Scenario: Pago visible al agendar
- **WHEN** el visitante mira la tarjeta de diagnóstico o el footer
- **THEN** distingue los 3 medios aceptados de un vistazo

### Requirement: Llamada directa al número
El sistema SHALL ofrecer enlace `tel:+51970771835` junto al número en contacto y footer, para llamar directo desde el móvil.

#### Scenario: Llamar desde el móvil
- **WHEN** el visitante pulsa "Llamar" en móvil
- **THEN** se abre el marcador con el número listo

#### Scenario: Escritorio intacto
- **WHEN** el visitante ve los enlaces en escritorio
- **THEN** todo se ve igual que hoy; el `tel:` ño estorba
