## Context

Ver `proposal.md` (Why). El generador tiene precios viejos y HEAD
sin OG (verificado con `rg`); las 8 páginas ya tienen OG (el agente
se equivocó en 3a). El hero móvil actual exige scroll para los CTAs.
Los testimonios usan estrellas SVG + "5 de 5" (verificar exacto en
implementación).

## Goals / Non-Goals

**Goals:**

- Generador incapaz de romper lo publicado; hero móvil compacto;
  confianza temprana; cero avisos de reviews.

**Non-Goals:**

- Reviews con schema, botón fijo, cambios de copy comercial.

## Decisions

- **Commits separados por punto** (generador, sitemap, hero,
  confianza+testimonios). Racional: lo pide el agente y permite
  revertir granular.
- **Nunca correr `build_pages.py` contra producción sin diff
  limpio en local.** Racional: es la pistola cargada del punto 1.
- **Línea "2 proyectos en línea" actualizable a mano.**
  Racional: si sumas un caso y olvidas el número, el texto miente;
  se anota en CHANGELOG como recordatorio.
- **Testimonios: quitar solo visuales**, conservar todo el texto.
  Racional: cero impacto SEO confirmado.

## Risks / Trade-offs

- [Compactar el hero puede mover el LCP] → Mitigación: medir
  PageSpeed antes/después en móvil.
- [El número "2 proyectos" se desactualiza] → Mitigación: tarea de
  verificación + nota en CHANGELOG.
