## MODIFIED Requirements

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
