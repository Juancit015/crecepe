## Context

Ver `proposal.md` (Why). La card es glass (`rgba(255,255,255,0.07)`
+ blur) sobre la foto de contacto; todos sus textos son blancos
fijos. Al volverla sólida por tema hay que reteñir cada texto.
Los botones ya tienen esquema por tema y se conservan.

## Goals / Non-Goals

**Goals:**

- Card sólida legible AA en ambos temas, sin badges.

**Non-Goals:**

- Cambiar botones, links, copy o el resto de la sección.

## Decisions

- **Fondo `#0F1D3A` en oscuro** (no `--primary`): Racional: es el
  navy de card estándar en dark, igual que hermanas de precios.
- **Quitar `backdrop-filter`** con el fondo sólido. Racional: sin
  translucidez el blur solo cuesta GPU.
- **Conservar `small a` blanco→adaptado**: el link "llámame
  directo" pasa a acento por tema (accent-dark en claro,
  accent-light en oscuro). Racional: reutiliza el patrón de links.

## Risks / Trade-offs

- [La card blanca pierde el efecto glass de la sección] →
  Mitigación: es lo pedido; la sombra existente la separa de la
  foto. Si se ve plana, se refuerza `box-shadow`.
