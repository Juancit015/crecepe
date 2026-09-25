## MODIFIED Requirements

### Requirement: Pasos y QA con hilo conductor

Las listas de pasos ("Cómo lo hacemos") y de QA ("Nos tomamos en serio…") en fichas MUST mostrarse como timeline: ítems separados con aire y conectados solo entre sí por segmentos verticales centrados en los números/iconos, en el lenguaje del timeline de Proceso. Ningún segmento MUST atravesar insignias ni iconos. El resaltado activo del spy MUST seguir funcionando igual sobre los números/iconos.

#### Scenario: Secuencia legible

- **WHEN** el visitante recorre los pasos o QA en una ficha
- **THEN** ve números/iconos unidos por un riel con aire entre ítems, y el activo se distingue como hoy

#### Scenario: Conectores solo en huecos y centrados

- **WHEN** el visitante mira cualquier ítem (incluido el activo con desplazamiento hover)
- **THEN** el conector vive solo en el hueco entre ítems, centrado en el número/icono, sin atravesarlos
