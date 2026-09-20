## Purpose

Que ningún plan parezca básico: los 3 como soluciones expertas para momentos distintos del negocio.

## Requirements

### Requirement: Planes sin jerarquía
El sistema SHALL mostrar las 3 cards con el mismo estilo, sin destaque, y con etiquetas de uso por necesidad.

#### Scenario: Tres iguales
- **WHEN** el visitante ve la sección en cualquier tema y dispositivo
- **THEN** las 3 cards tienen el mismo borde, sombra y orden (Presencia, Tienda, Automatización)

#### Scenario: Etiquetas de uso
- **WHEN** el visitante lee cada badge
- **THEN** dice para qué momento es (que te encuentren / vender online / ahorrar horas), no un nivel

#### Scenario: Título por necesidad
- **WHEN** el visitante lee el encabezado
- **THEN** pregunta "¿Qué necesita tu negocio hoy?" en vez de presentar niveles
