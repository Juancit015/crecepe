## Purpose

Que el cliente entienda en palabras simples qué hacemos y cómo le ayuda a ganar dinero, ahorrar tiempo y verse en internet.

## Requirements

### Requirement: Copy visible sin tecnicismos
El sistema SHALL mostrar el copy visible (títulos, cards, listas, alts, title/og) en lenguaje simple de beneficios, sin Bagisto, LLMs, Schema ni siglas técnicas salvo IA/WhatsApp.

#### Scenario: Plan renombrado
- **WHEN** el visitante ve el plan intermedio en cualquier página
- **THEN** lee "Tienda Virtual + IA" (la URL y el archivo conservan `tienda-online-bagisto`)

#### Scenario: Incluye en beneficios
- **WHEN** el visitante lee qué incluye cada servicio
- **THEN** cada punto dice qué gana (ventas, tiempo, visibilidad), no la tecnología

#### Scenario: Máquinas intactas
- **WHEN** un buscador o IA lee el schema.org o `llms.txt`
- **THEN** encuentra los términos técnicos (Bagisto, Schema, LLMs) como hasta ahora
