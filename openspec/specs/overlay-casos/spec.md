## Purpose

Que la foto del caso muestre su descripción al pasar el cursor, con los botones fijos debajo.

## Requirements

### Requirement: Overlay solo descriptivo al hover
El sistema SHALL mostrar sobre la foto un cartel ligero que baja de arriba solo con la descripción, oscureciendo leve la imagen; los 2 botones permanecen debajo en el cuerpo.

#### Scenario: Hover en desktop
- **WHEN** el cursor entra a la foto del caso
- **THEN** baja el cartel con la descripción y la foto se oscurece leve

#### Scenario: Botones abajo intactos
- **WHEN** el visitante ve la card en cualquier dispositivo
- **THEN** los 2 botones están debajo de la foto como antes

#### Scenario: Sin hover (táctil/teclado)
- **WHEN** el visitante usa táctil o teclado
- **THEN** el cartel es visible o se abre con foco
