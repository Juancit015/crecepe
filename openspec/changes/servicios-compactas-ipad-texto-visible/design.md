## Context

Servicios usa grilla desktop con overlay al `:hover` (2 líneas) y variante apilada foto-arriba 180px (≤768px, sin overlay). La captura del iPad portrait confirma: cards apiladas foto-arriba pero altas y sin el texto del hover. Casos ya usa caption permanente en móvil como patrón a seguir. Restricciones: solo CSS + HTML existente, Ño regenerar `tools/build_pages.py`, `?v` vía sed, `styles.min.css` regenerado con clean-css, claro/oscuro y `prefers-reduced-motion` intactos.

## Goals / Non-Goals

**Goals:**
- Variante tablet compacta de Servicios con caption descriptivo siempre visible.
- Cero regresión en desktop (>1024px) y móvil (≤768px).

**Non-Goals:**
- Cambios en JS, JSON-LD, precios, consentimiento o generador.
- Rediseño de Casos u otras secciones.

## Decisions

- **Rango tablet 769–1024px con media dedicado** (`@media (min-width:769px) and (max-width:1024px)`) para landscape y tablets anchas: variante apilada compacta (foto ~140px, paddings/fuentes/gaps reducidos) con caption permanente. Además, **retocar el apilado ≤768px solo en anchos de tablet-portrait** (vía `@media (min-width:481px)` anidado o ajuste del breakpoint): la captura confirma que el portrait del iPad ya cae en el apilado, así que la compactación y el caption deben alcanzarlo sin tocar teléfonos (≤480px intactos). Alternativa (reutilizar 992) descartada: mezclaría tablet con desktop pequeño y rompería footer-centrado.
- **Caption permanente solo con CSS** (forzar `.service-overlay` visible y en flujo en tablet, sin `:hover`): reutiliza el texto ya en el DOM, cero cambios HTML/JS y mismo contenido SEO. Alternativa (mover texto a caption en HTML) descartada: duplica contenido y obliga a tocar las 8 páginas.
- **Compactación por escala, no por recorte**: reducir foto (~140–160px), paddings, `font-size` y gaps; contenido completo (título, desc, lista, link) siempre visible. Alternativa (podar bullets como móvil) descartada: en tablet hay ancho para todo.
- **Overlay sin animación de entrada en tablet**: el cartel nace visible; `prefers-reduced-motion` ya lo cubre, pero se evita transición inicial innecesaria.

## Risks / Trade-offs

- [Caption sobre foto puede tapar detalle] → Mitigación: caption bajo la foto en flujo (no superpuesto) o banda inferior con contraste verificado en ambos temas.
- [iPad portrait cae en el media móvil] → Mitigación: compactación y caption con alcance 481–1024px (teléfonos ≤480px intactos); verificar con la captura de referencia a 744/768/820px.
- [Solape con media 992 de otras secciones] → Mitigación: reglas tablet con selectores `.services-*` específicos; verificar footer/grids a 768/820/1024.

## Migration Plan

- Solo CSS + `?v` bump + CHANGELOG en un commit; rollback = revert de ese commit.
- Verificación con capturas 768/820/1024 en claro y oscuro antes de commitear.
