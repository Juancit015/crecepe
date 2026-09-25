## MODIFIED Requirements

### Requirement: Schema declara medios aceptados y rango real

El bloque `ProfessionalService` del JSON-LD MUST incluir `"paymentAccepted": ["Yape", "Plin", "Transferencia bancaria"]` y todos los bloques con `priceRange` MUST decir `"S/ 149 - S/ 2,990"` (rango real: mantenimiento S/ 149 a Tienda S/ 2,990), en las 8 páginas.

#### Scenario: Rich data de pagos y precios

- **WHEN** Google lee el JSON-LD de cualquier página
- **THEN** encuentra `paymentAccepted` con los 3 medios y `priceRange` sin precios viejos
