## Context

Ver proposal.md. Estado actual: `.svc-aside` ya es navy pero sin nombre del plan ni mini-features; la barra móvil fija ocupa demasiado alto. Restricciones: reutilizar clases (`pricing-badge`, `service-list`, `scrolled-past`, `buybar-down/hidden`); sin JS nuevo; `?v` bump al cambiar assets.

## Goals / Non-Goals

**Goals:**
- Paridad visual aside ↔ card destacada de Planes.
- Barra móvil ≤92px con smart-hide existente.

**Non-Goals:**
- Cambiar precios, links wa.me, schemas, copy fuera de los 3 entregables.
- Tocar el observer de zonas o la lógica de dirección de scroll.

## Decisions

- **Aside con h3 + mini-lista en HTML** (no generado por JS): el contenido de compra debe existir sin JS para SEO y no-JS. Alternativa (inyectar por JS) descartada por indexación.
- **Reutilizar `pricing-badge` y checks existentes**: cero SVGs nuevos, cero CSS de iconos.
- **Barra mini por CSS puro** (ocultar badge/nota, fila única): el smart-hide ya existe y se conserva tal cual.

## Risks / Trade-offs

- [Más alto el aside en desktop] → Mitigación: la mini-lista es de 3 items cortos; el sticky lo absorbe.
- [Barra mini recorta info] → Mitigación: conserva precio + plazo + CTA (lo esencial); el resto está a un scroll.
