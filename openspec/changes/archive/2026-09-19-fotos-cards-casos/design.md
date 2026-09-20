## Context

Ver `proposal.md`. Estado: `.case-preview` (210px, flex centrado) con degradados `.az`/`.nv` + `.case-url` encima. Fotos listas: `assets/img/casos-az-card.avif` (22 KB) y `casos-chavez-card.avif` (27 KB), 1200x800.

## Goals / Non-Goals

**Goals:**
- Foto cover + URL encima en ambas cards, ambos temas.

**Non-Goals:**
- No se tocan degradados (quedan de fondo), ni resto de la card.

## Decisions

- **Decisión 1: `<img>` absoluta con cover.**
  `.case-photo { position: absolute; inset: 0; width/height: 100%; object-fit: cover; }` y `.case-url { position: relative; z-index: 1; }`. El degradado queda detrás como fondo de carga. Alternativa (fondo CSS) descartada: `<img>` da `alt` y lazy gratis.

## Risks / Trade-offs

- [Riesgo] Ninguno relevante: fotos claras, píldora con blur encima ya contrasta.

## Migration Plan

- Editar 2 previews + 1 regla CSS. Verificar ambos temas y móvil. `openspec validate fotos-cards-casos`.

## Open Questions

- Ninguna.
