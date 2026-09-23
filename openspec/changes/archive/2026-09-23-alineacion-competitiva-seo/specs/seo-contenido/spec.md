## MODIFIED Requirements

### Requirement: FAQ cubre intención transaccional

El FAQ visible del home MUST incluir preguntas de precio ("¿Cuánto cuesta una página web / una tienda virtual?"), tiempos ("¿En cuánto tiempo está lista?"), autogestión ("¿Puedo administrarla yo?") y pagos ("¿Acepta tarjeta?"), cada una con respuesta de 2-3 líneas en lenguaje cliente.

#### Scenario: Preguntas de precio y tiempos

- **WHEN** un visitante expande el FAQ del home
- **THEN** encuentra respuestas directas sobre precios desde, tiempos de entrega y autogestión

### Requirement: Schema FAQPage válido y sincronizado

Cada pregunta visible en el FAQ MUST tener su entrada correspondiente en el bloque schema FAQPage de la página, y el JSON-LD MUST seguir pasando validación (python json.loads) tras cada cambio.

#### Scenario: Schema sincronizado

- **WHEN** se agrega o edita una pregunta del FAQ
- **THEN** el Rich Results Test no reporta errores en FAQPage y `python3 -c json.loads` valida cada bloque
