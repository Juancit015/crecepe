## Context

Ver proposal.md. Estado actual: fichas de servicio sin bloque "qué incluye" explícito; FAQ de home sin preguntas de precio/tiempos; contacto sin persona nombrada; casos con contenido fino sin datos de proyecto. Restricciones vigentes: no tocar H1/titles/URLs/precios; copy aprobado se conserva; `build_pages.py` diverge de las páginas generadas (no correr sin diff); estilos vía `styles.min.css` regenerado con clean-css.

## Goals / Non-Goals

**Goals:**
- Cubrir intención de búsqueda transaccional (precio, tiempos, incluye) con redacción propia.
- Subir prueba social real (casos con datos, persona con nombre) sin inventar nada.
- Mantener SEO técnico intacto (schemas válidos, 100/100).

**Non-Goals:**
- Blog (idea extra, fase 2).
- Cambios de precios, planes, H1, titles, URLs, diseño o modo oscuro.
- Libro de reclamaciones, muro de logos, mapa exacto, pasarela con tarjeta.

## Decisions

- **Aplicar 1 por 1 en orden propuesta→conversión** (fichas → FAQ → contacto → casos) en vez de por facilidad: cada punto se commitea y valida por separado para poder revertir sin arrastrar lo demás. Alternativa (todo en un commit) descartada por riesgo de reversión.
- **Nota honesta sobre tarjeta en ficha tienda** en vez de omitir el tema: la competencia sí ofrece pasarela y ocultarlo genera rebote, que sí daña SEO. Alternativa (prometerla) descartada por honestidad operativa.
- **Zona visible + calle solo en schema**: equilibra NAP local con privacidad del domicilio. Alternativa (mapa exacto como competidores) descartada por seguridad personal.
- **Sin `skip_specs`**: hay cambios de comportamiento observable (contenido visible y requisitos de schema), por eso 4 deltas.

## Risks / Trade-offs

- [Más texto en fichas alarga páginas] → Mitigación: bloques colapsables con el acordeón existente (`.pricing-toggle`), sin peso extra.
- [FAQ más largo empuja el CTA hacia abajo] → Mitigación: acordeón colapsado por defecto (ya existe `faq-colapso`); verificar en móvil que contacto siga a ≤3 scrolls.
- [`build_pages.py` diverge de páginas reales] → Mitigación: replicar cambios de fichas también en el generador o anotar la divergencia en el commit; nunca correrlo sin `git diff` previo.

## Migration Plan

1. Un commit por punto (1-5), cada uno con CHANGELOG + validación JSON-LD.
2. Push solo con aprobación de Juan (flujo habitual).
3. Rollback: `git revert` del commit del punto; cada punto es independiente.
