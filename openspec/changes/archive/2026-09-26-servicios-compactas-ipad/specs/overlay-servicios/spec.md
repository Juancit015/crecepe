## MODIFIED Requirements

### Requirement: Overlays ampliados y barra fuera
El sistema SHALL mostrar descripciones de 2 líneas en overlays de casos y servicios (logro + detalle), ninguna barra superior al hover, ningún texto sobre la foto en móvil, y texto de servicios siempre visible en tablet sin depender de hover.

#### Scenario: Descripción ampliada en casos
- **WHEN** el visitante abre el cartel de un caso
- **THEN** lee 2 líneas de descripción (logro + mecanismo)

#### Scenario: Overlay en servicios
- **WHEN** el cursor entra a la foto de un servicio en desktop (>1024px)
- **THEN** baja el cartel descriptivo de 2 líneas y la foto se oscurece leve, con enlaces intactos debajo

#### Scenario: Caption siempre visible en móvil
- **WHEN** el visitante ve un servicio en teléfono (≤480px)
- **THEN** no hay texto sobre la foto; la foto se ve limpia y centrada (reversión a pedido)

#### Scenario: Texto siempre visible en tablet
- **WHEN** el visitante ve un servicio en tablet (481–1024px, incluye iPad portrait y landscape)
- **THEN** la descripción de 2 líneas del overlay está siempre visible como caption permanente (bajo o sobre la foto según layout) sin necesidad de hover ni toque, legible en claro y oscuro

#### Scenario: Sin barra superior
- **WHEN** el visitante pasa el cursor sobre cualquier card de servicio
- **THEN** no aparece ninguna barra arriba; solo elevación y sombra
