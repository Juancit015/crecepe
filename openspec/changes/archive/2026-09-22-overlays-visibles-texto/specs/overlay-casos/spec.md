## MODIFIED Requirements

### Requirement: Overlay solo descriptivo al hover
El sistema SHALL mostrar sobre la foto un cartel ligero que baja de arriba solo con la descripción, oscureciendo leve la imagen; los 2 botones permanecen debajo en el cuerpo. En móvil el texto es siempre visible como caption bajo la foto.

#### Scenario: Hover en desktop
- **WHEN** el cursor entra a la foto del caso
- **THEN** baja el cartel con la descripción y la foto se oscurece leve

#### Scenario: Caption siempre visible en móvil
- **WHEN** el visitante ve un caso en móvil
- **THEN** lee la descripción bajo la foto sin necesidad de tocarla

#### Scenario: Botones abajo intactos
- **WHEN** el visitante ve la card en cualquier dispositivo
- **THEN** los 2 botones están debajo de la foto como antes

#### Scenario: Sin hover (táctil/teclado)
- **WHEN** el visitante usa táctil o teclado
- **THEN** el cartel es visible o se abre con foco
