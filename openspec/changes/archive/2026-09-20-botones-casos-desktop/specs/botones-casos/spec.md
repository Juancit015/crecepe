## Purpose

Que los botones de "Casos reales" mantengan su fila horizontal en desktop sin que el hover de uno desplace al otro.

## ADDED Requirements

### Requirement: Fila estable de botones de casos en desktop
El sistema SHALL mantener los botones de acción de cada caso en fila horizontal en desktop, sin que el hover sobre uno mueva al otro de línea.

#### Scenario: Hover sin salto de línea
- **WHEN** el visitante pasa el cursor sobre "Ver caso Novedades Chávez" en desktop a pantalla completa
- **THEN** "Ver tienda en vivo" permanece en la misma fila, sin saltar abajo

#### Scenario: Efecto hover sin cambio de ancho
- **WHEN** el visitante pasa el cursor sobre cualquier botón de caso
- **THEN** el botón muestra su efecto (elevación) sin ensancharse ni empujar a su vecino

#### Scenario: Wrap solo en pantallas angostas
- **WHEN** el visitante ve los casos en una pantalla angosta donde dos botones no caben
- **THEN** los botones pueden apilarse en columna como hoy
