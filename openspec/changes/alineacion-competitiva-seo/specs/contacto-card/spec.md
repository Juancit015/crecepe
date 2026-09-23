## MODIFIED Requirements

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
