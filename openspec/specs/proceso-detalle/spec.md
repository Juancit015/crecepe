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

### Requirement: Contenido validado por el dueño
El sistema SHALL publicar solo el detalle corregido y aprobado por el dueño (duraciones, entregables y aportes reales).

#### Scenario: Corrección antes de publicar
- **WHEN** se va a aplicar el contenido redactado
- **THEN** el dueño revisa paso por paso y solo lo aprobado llega al sitio
