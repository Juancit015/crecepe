## Purpose

Que las barras de especialidades y garantías retengan la mirada con movimiento continuo, sin copy nuevo y respetando `prefers-reduced-motion`.

## Requirements

### Requirement: Barra de especialidades en movimiento continuo
El sistema SHALL mostrar bajo el hero una barra con las especialidades en loop infinito de derecha a izquierda a velocidad constante (~40s por ciclo), con más ítems que los 5 actuales, pausándose solo al pasar el mouse, legible en ambos temas.

#### Scenario: Loop continuo sin detenerse
- **WHEN** el visitante mira la barra bajo el hero
- **THEN** los textos avanzan siempre en la misma dirección, en loop perfecto sin saltos, recortes ni pausas en los extremos

#### Scenario: Pausa en hover
- **WHEN** el visitante pone el mouse sobre la barra
- **THEN** el movimiento se pausa, y al retirar el mouse continúa desde donde quedó

#### Scenario: Más contenido sin copy nuevo
- **WHEN** el visitante lee los ítems de la barra
- **THEN** ve los 5 originales más Presencia Digital, Tienda Online, Automatización con IA y Soluciones Digitales (todos textos ya publicados)

#### Scenario: Movimiento reducido
- **WHEN** el visitante tiene activado `prefers-reduced-motion`
- **THEN** la barra queda estática mostrando todos los textos legibles

### Requirement: Barra de garantías bajo Opiniones en movimiento continuo
El sistema SHALL mostrar debajo de la sección Opiniones una barra con las 4 garantías en loop infinito de derecha a izquierda a velocidad constante (~30s por ciclo), pausándose solo al pasar el mouse, en ambos temas.

#### Scenario: Ubicación bajo Opiniones
- **WHEN** el visitante termina de leer los testimonios
- **THEN** encuentra la barra de garantías entre Opiniones y la siguiente sección

#### Scenario: Loop continuo sin detenerse
- **WHEN** el visitante mira la barra de garantías
- **THEN** los 4 textos avanzan siempre en la misma dirección, en loop perfecto sin saltos, recortes ni pausas en los extremos

#### Scenario: Pausa en hover
- **WHEN** el visitante pone el mouse sobre la barra
- **THEN** el movimiento se pausa, y al retirar el mouse continúa desde donde quedó

#### Scenario: Textos intactos
- **WHEN** el visitante lee cada garantía
- **THEN** cada texto es literalmente uno de los 4 ya publicados (no hay promesas nuevas)

#### Scenario: Movimiento reducido
- **WHEN** el visitante tiene activado `prefers-reduced-motion`
- **THEN** la barra queda estática con las 4 garantías legibles
