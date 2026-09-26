## ADDED Requirements

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
