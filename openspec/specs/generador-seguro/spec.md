## Purpose

Garantizar que ninguna corrida del generador de subpáginas destruya ni degrade el contenido enriquecido publicado en fichas y casos, que ya se perdió una vez y debió restaurarse a mano.

## Requirements

### Requirement: Generador preserva bloques enriquecidos
Ninguna salida de `tools/build_pages.py` SHALL eliminar ni degradar los bloques enriquecidos publicados: Prueba real, Cómo lo hacemos, ¿Es para ti?, checklist "Nos tomamos en serio", héroes con foto (`has-bg`), contadores animados y Ficha del proyecto en casos.

#### Scenario: Regeneración sin pérdidas
- **WHEN** se corre el generador y se compara con `git diff`
- **THEN** ningún bloque enriquecido desaparece ni pierde contenido; solo cambian las secciones compartidas (navbar, dial, to-top, footer, versiones `?v=`)

#### Scenario: Plantilla sincronizada o uso congelado
- **WHEN** la plantilla del generador Ño reproduce los 7 bloques enriquecidos
- **THEN** el generador Ño se corre sobre páginas publicadas (uso congelado con aviso en su header) hasta sincronizar su plantilla

### Requirement: Verificación obligatoria antes de aceptar salida
Toda salida del generador MUST revisarse con `git diff` antes de aceptarse; ningún archivo regenerado se commitea sin diff limpio de pérdidas.

#### Scenario: Diff revisado
- **WHEN** el generador escribe páginas
- **THEN** el operador revisa `git diff`, descarta pérdidas con `git checkout --` si aparecen, y solo commitea el diff verificado
