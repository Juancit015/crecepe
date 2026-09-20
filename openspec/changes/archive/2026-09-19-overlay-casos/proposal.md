## Why

Efecto estilo WordPress pedido por el dueño: al hover sobre la foto del caso baja un cartel solo con descripción y la imagen se oscurece leve. Los botones quedan fijos debajo como estaban (el dueño pidió devolverlos).

## What Changes

`index.html` (2 cards) + `assets/css/styles.css`:
- `.case-overlay` absoluto sobre la foto: baja de arriba (`translateY`) solo con descripción corta; los 2 botones vuelven al cuerpo.
- Foto se oscurece leve y escala leve al hover; overlay con velo marino ligero.
- Táctil (`hover: none`): overlay siempre visible para no perder los botones; `focus-within` abre en teclado; reduced-motion global lo deja instantáneo.
- Textos: AZ "Web corporativa rápida con SEO técnico, hecha en colaboración." / Chávez "Tienda virtual completa que vende 24/7, hecha desde cero." (aprobados en flujo).

## Capabilities

### New Capabilities

- `overlay-casos`: cartel solo descriptivo sobre la foto al hover (botones abajo).

### Modified Capabilities

- Ninguna (extiende `botones-casos`/`fotos-casos` archivados; no los reabre).

## Impact

- Afectado: 2 previews + reglas `.case-*`. Botones intactos abajo.
