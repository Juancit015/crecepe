## MODIFIED Requirements

### Requirement: Schema declara medios aceptados y rango real

El bloque `ProfessionalService` del home y el `provider` de cada schema `Service` en las 3 fichas MUST incluir `"paymentAccepted": ["Yape", "Plin", "Transferencia bancaria"]`. Todos los bloques con `priceRange` MUST decir `"S/ 500 - S/ 900"` (rango real de proyectos decidido por Juan el 2026-09-26: Presencia S/ 500 a Automatización S/ 900). El valor del código MUST ser idéntico al declarado en este spec; si el rango cambia, código y spec se actualizan juntos en el mismo commit. Casos y legales quedan fuera de este requisito (Ño declaran entidad del negocio).

#### Scenario: Rich data de pagos y precios

- **WHEN** Google lee el JSON-LD del home o de una ficha de servicio
- **THEN** encuentra `paymentAccepted` con los 3 medios y `priceRange` sin precios viejos

#### Scenario: Código y spec sin divergencia

- **WHEN** se busca `priceRange` en las páginas y en este spec
- **THEN** todos los valores son idénticos entre sí (cero ocurrencias del rango viejo)
