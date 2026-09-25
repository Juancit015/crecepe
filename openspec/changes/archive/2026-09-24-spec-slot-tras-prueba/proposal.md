## Why

El spec `ficha-compra` dice que la card vive entre QA y FAQ, pero el código la ubica tras "Prueba real" desde `seguidora-tras-prueba` (slot `order` 5/6, nunca sincronizado). Specs que mienten generan planes sobre posiciones falsas. Se corrige el texto al comportamiento real, sin tocar código.

## What Changes

- El requirement "Card de precio incrustada entre QA y FAQ en móvil" pasa a "tras Prueba real" con sus escenarios, fiel al CSS vigente.
- Solo specs; cero código, cero visual, cero SEO.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ficha-compra`: posición real de la card móvil (tras Prueba, no entre QA y FAQ).

## Impact

- `openspec/specs/ficha-compra/spec.md`. Nada más.
