## MODIFIED Requirements

### Requirement: Preview del acordeón sin cortes

En móvil (≤768px) el preview colapsado de `.pricing-features` MUST mostrar un número entero de items (3 completos, ninguno a la mitad) y MUST dejar aire entre el fade y el CTA, para que nunca se lea como contenido roto.

#### Scenario: Preview limpio a 650px

- **WHEN** el visitante ve una card de Planes colapsada a ~650px (captura 16-34-25)
- **THEN** los 3 items se ven enteros, sin texto medio-fade tocando el botón
