## Context

Ver `proposal.md`. Estado tras `planes-iguales`: 3 `.pricing-badge` neutros + `.pricing-desc` + base neutra (reglas `.popular` retiradas). Hover actual de `.pricing-card`: solo elevación + sombra (línea ~778).

## Goals / Non-Goals

**Goals:**
- Strong integrado, badges fuera, hover azul parejo sin saltos de layout.

**Non-Goals:**
- No se tocan precios, features, CTAs ni título de sección.

## Decisions

- **Decisión 1: `<strong>` al inicio del `.pricing-desc`.**
  Ej. `<strong>Ideal si quieres que te encuentren.</strong> Para emprendimientos...`. Sin clases nuevas; el `strong` hereda el estilo del texto. Alternativa (párrafo separado) descartada: más aire vertical sin aporte.
- **Decisión 2: hover azul con entrada/salida animadas.**
  Base con `outline: 2px solid transparent; outline-offset: -2px` + `transition: outline-color 0.25s ease` (sumada a las existentes); hover solo cambia `outline-color` a `accent` (sombra del viejo `.popular` intacta). (Ajuste tras reporte: el outline solo en hover aparecía de golpe; con outline siempre presente la transición anima ambos sentidos.)
- **Decisión 3: retirar `.pricing-badge` si queda huérfano.**
  `rg` mediante; si otro uso existe, se conserva.

## Risks / Trade-offs

- [Riesgo] Salto de layout por cambio de grosor de borde en hover (cubierto en Decisión 2).

## Migration Plan

- Editar 3 cards + CSS. Verificar hover en ambos temas y móvil (sin hover: intacto). `openspec validate planes-hover`.

## Open Questions

- Ninguna.
