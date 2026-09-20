## Context

Ver `proposal.md`. H1 actual: "Webs y tiendas que Google encuentra y la IA recomienda" (con palabra Google multicolor + `hl` en IA — estilos a reutilizar o retirar según el texto final). Subtítulo actual 100% mecanismo. Los textos exactos los define el dueño al implementar; este diseño fija criterios, no redacción final.

## Goals / Non-Goals

**Goals:**
- Criterios de mensaje + textos propuestos listos para aprobar, con variante de reversión.

**Non-Goals:**
- No se tocan estilos del hero, botones, ni resto de la homepage.

## Decisions

- **Decisión 1: estructura beneficio → mecanismo.**
  H1 = resultado (ej. "Tu negocio vendiendo solo, todos los días"); subtítulo = beneficio + mecanismo ("Webs y tiendas que atienden y venden 24/7, visibles en Google y recomendadas por la IA"). Palabras Google/IA destacadas se conservan si el texto final las incluye.
- **Decisión 2: variante actual archivada en el change.**
  El H1/sub actuales quedan copiados en `tasks.md` (o nota) como punto de reversión si las métricas empeoran.
- **Decisión 3: sincronizar meta + llms.txt.**
  Mismo mensaje en `<meta name="description">` y `llms.txt` para no disociar el SEO del pitch.

## Risks / Trade-offs

- [Riesgo] Perder la palabra "Google/IA" del H1 puede bajar CTR de búsquedas informativas; compensar manteniéndolas en subtítulo y resto de la página.

## Migration Plan

- El dueño aprueba textos → se editan H1, subtítulo, tarjeta, meta y `llms.txt` → medir 2–4 semanas. `openspec validate mensaje-tiempo-dinero`.

## Open Questions

- Textos finales y cifra de la tarjeta (proyectos/clientes) los confirma el dueño al aplicar.
