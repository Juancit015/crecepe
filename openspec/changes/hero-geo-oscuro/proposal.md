## Why

Tres detalles de contraste: el mouse de scroll del hero es azul sobre
fondo claro del hero (se pide blanco), las cards SEO/GEO quedan
blancas en modo oscuro rompiendo la sección, y las píldoras de
motores quedan con texto oscuro sobre blanco en oscuro.

## What Changes

- `.mouse` y `.wheel`: borde y ruedita en blanco (ambos temas; el
  hero tiene fondo fotográfico claro/oscuro donde el blanco lee
  bien).
- En `body.dark-mode`, `.geo-card` (ambas, incluida `.highlight`)
  pasan a navy `#0F1D3A` con textos en blanco/`#DCE6FA`, borde
  sutil claro y tag adaptado.
- Píldoras `.geo-engines span` en oscuro estilo glass (elegido por
  el usuario): fondo translúcido oscuro, texto blanco, borde tenue.
- Modo claro intacto.

## Capabilities

### New Capabilities

- (none)

### Modified Capabilities

- `geo-comportamiento`: cards SEO/GEO y píldoras con paleta oscura
  definida; mouse de scroll blanco.

## Impact

- `assets/css/styles.css` + minificado (reglas hero + bloque
  `body.dark-mode` geo).
- Sin HTML, copy, JS, SEO ni layout.
