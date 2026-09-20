## Context

Ver `proposal.md`. Estado: `.pricing-card.popular` (líneas 780–802: borde azul, sombra, badge azul "Más pedido") + `order: -1` móvil (línea 1686). Título "Inversión clara para cada etapa...".

## Goals / Non-Goals

**Goals:**
- Igualdad visual total + etiquetas de uso + título por necesidad + errata.

**Non-Goals:**
- No se tocan precios, features, CTAs, schema ni otras secciones.

## Decisions

- **Decisión 1: retirar `popular`, no igualar hacia arriba.**
  Quitar la clase en el HTML y sus reglas (incluido el `order` móvil): las 3 quedan con el estilo base neutro. Alternativa (darle destaque a las 3) descartada: tres destaques = ningún destaque + ruido.
- **Decisión 2: badges como etiquetas de uso con el estilo neutro existente.**
  Mismo `.pricing-badge` base para los 3; solo cambia el texto. Textos propuestos pendientes de aprobación del dueño.
- **Decisión 3: título nuevo, subtítulo intacto.**
  "¿Qué necesita tu negocio hoy?" + `span` de acento en "tu negocio"; el subtítulo de precios no se toca.

## Risks / Trade-offs

- [Riesgo] Perder el empuje comercial del "Más pedido": se compensa con etiquetas que califican al visitante (convierte mejor por ajuste necesidad-plan).

## Migration Plan

- Editar HTML (clase, badges, título, errata) + retirar reglas `.popular`. Verificar ambos temas y orden móvil. `openspec validate planes-iguales`.

## Open Questions

- Textos finales de badges y título los confirma el dueño al aplicar.
