# proceso-detalle Specification

## Purpose
Dar a cada paso del Proceso su duración, entregable y aporte del cliente en un detalle expandible, manteniendo el móvil compacto.

## Requirements

### Requirement: Detalle expandible por paso
El sistema SHALL mostrar en cada paso un control "Ver detalle" que expande duración, qué recibe y qué pone el cliente, colapsado por defecto en móvil y expandido en desktop.

#### Scenario: Detalle colapsado en móvil
- **WHEN** el visitante ve un paso en móvil
- **THEN** ve título y descripción con "Ver detalle" cerrado, sin alargar la página

#### Scenario: Expansión del detalle
- **WHEN** el visitante toca "Ver detalle"
- **THEN** se muestran duración, entregable y aporte con la misma animación del acordeón de Planes

#### Scenario: Desktop completo
- **WHEN** el visitante ve Proceso en desktop
- **THEN** los detalles están visibles sin necesidad de expandir

### Requirement: Toggle compacto en tablet
El sistema SHALL mostrar el botón "Ver detalle" de cada paso en 481–768px con la flecha pegada a la etiqueta (alineadas a la izquierda, sin separación a ancho completo), conservando el área táctil mínima de 44px y la rotación de la flecha al expandir.

#### Scenario: Flecha junto a la etiqueta
- **WHEN** el visitante ve un paso colapsado a 768px
- **THEN** "Ver detalle" y su flecha aparecen juntos a la izquierda, sin hueco intermedio

#### Scenario: Expansión intacta
- **WHEN** el visitante toca "Ver detalle" en tablet
- **THEN** el detalle se expande y la flecha rota igual que en teléfono y desktop

#### Scenario: Teléfono y desktop intactos
- **WHEN** el visitante ve Proceso en teléfono (≤480px) o desktop (>768px)
- **THEN** el botón conserva su apariencia actual

### Requirement: Contenido validado por el dueño
El sistema SHALL publicar solo el detalle corregido y aprobado por el dueño (duraciones, entregables y aportes reales).

#### Scenario: Corrección antes de publicar
- **WHEN** se va a aplicar el contenido redactado
- **THEN** el dueño revisa paso por paso y solo lo aprobado llega al sitio
