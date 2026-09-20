## ADDED Requirements

### Requirement: Franja de garantías sobre contacto
El sistema SHALL mostrar sobre la sección Contacto una franja de 4 garantías con icono (respuesta 24h, 50% inicio / 50% entrega, sin costos ocultos, soporte 30 días) en ambos temas.

#### Scenario: Garantías juntas al decidir
- **WHEN** el visitante llega a Contacto en cualquier tema
- **THEN** ve las 4 garantías agrupadas con icono antes de los datos de contacto

#### Scenario: Sin copy nuevo
- **WHEN** el visitante lee cada garantía
- **THEN** cada texto ya existe hoy en hero, FAQ o precios (ñoo hay promesas nuevas)

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
