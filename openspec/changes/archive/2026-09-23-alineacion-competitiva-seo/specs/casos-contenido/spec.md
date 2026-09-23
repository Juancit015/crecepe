## Purpose

Las páginas de caso de CrecePE generan confianza con datos verificables del proyecto en vez de promesas genéricas, capturando búsquedas long-tail por rubro y tecnología.

## ADDED Requirements

### Requirement: Datos reales por caso

Cada página de caso MUST mostrar al menos fecha del proyecto, tecnología utilizada, alcance (nº productos o secciones), funciones implementadas y tiempo de desarrollo, con datos verdaderos provistos por el dueño del sitio.

#### Scenario: Caso enriquecido

- **WHEN** un visitante abre una página de caso
- **THEN** encuentra fecha, tecnología, alcance, funciones y tiempos del proyecto real

### Requirement: Prohibido inventar métricas

Ninguna página de caso SHALL mostrar cifras de ventas, visitas o conversiones sin fuente de datos real (Analytics del cliente o reporte verificable).

#### Scenario: Sin datos no hay cifras

- **WHEN** no existen datos medidos de resultados
- **THEN** la página muestra solo datos del proyecto (fecha, tecnología, alcance) sin cifras de resultado
