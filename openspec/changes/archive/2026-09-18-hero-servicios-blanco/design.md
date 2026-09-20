## Context

Ver `proposal.md` para el porqué. Estado actual (`styles.css` líneas ~1703–1736):
- `.page-hero h1`: `var(--primary)` (marino en claro, blanco en oscuro); `span`: `var(--accent)` / `accent-light` en oscuro.
- `.page-hero-sub` y `.breadcrumbs`: colores de texto estándar para fondo degradado plano.
- Las fotos nuevas traen degradado azul: el marino del claro se funde con el fondo.

## Goals / Non-Goals

**Goals:**
- Migas, título y descripción en blanco + sombra en ambos temas; `span` en cian claro.

**Non-Goals:**
- No se cambian velos, fondos, layout del héroe ni textos; no se tocan casos/legales salvo que compartan la regla (efecto colateral aceptado).

## Decisions

- **Decisión 1: reglas acotadas a `.page-hero.has-bg`, sin calificadores de tema.**
  `.page-hero.has-bg h1, .page-hero-sub, .breadcrumbs { color: #fff; text-shadow: ...; }` y `span` en `accent-light`: vale para ambos temas porque el fondo es foto en los dos. Patrón reutilizado del hero principal, GEO y `opiniones-section.has-bg`. (Ajuste durante implementación: las fotos existen en `assets/img/` pero aún no están cableadas y casos/legales comparten `.page-hero` con degradado plano — reglas planas habrían roto el estado actual. El cableado de fotos agregará `has-bg` por página.) Alternativa (reglas planas ya) descartada por lo anterior.
- **Decisión 2: migas completas en blanco, enlaces incluidos.**
  El enlace "Inicio" pasa de azul a blanco (subrayado al hover se conserva) para no dejar un parche azul.

## Risks / Trade-offs

- [Riesgo] Las páginas de casos/legales comparten `.page-hero` con fondo degradado plano: el texto blanco sobre degradado claro pierde. Si aún no tienen foto, acotar las reglas con una clase (p. ej. `.page-hero.has-bg`) o darles foto también.

## Migration Plan

- Solo CSS. Recorrido de las 3 páginas en ambos temas + revisión de casos/legales por el riesgo. `openspec validate hero-servicios-blanco`.

## Open Questions

- Ninguna que bloquee specs o tareas.
