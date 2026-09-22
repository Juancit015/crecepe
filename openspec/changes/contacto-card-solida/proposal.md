## Why

La tarjeta "Diagnóstico gratuito" lleva badges de pago que no
aportan en un CTA de agendar (el pago se conversa en la llamada) y
usa fondo translúcido que complica el contraste del texto pequeño.
Pasarla a sólida —blanca en claro, navy en oscuro— la alinea con el
resto de cards y garantiza lectura.

## What Changes

- Se retiran los 3 `pay-badge` (Yape, Plin, Transferencia) de la
  tarjeta (solo ahí; el footer y el resto del sitio los conservan).
- Fondo sólido: `#ffffff` en claro, navy `#0F1D3A` en oscuro (como
  el resto de cards).
- Textos adaptados por tema: título, párrafo y `small` en navy/
  grises en claro y en blanco/claro en oscuro, con contraste AA;
  el link "llámame directo" legible en ambos.
- Botón de correo conserva su esquema por tema (sólido navy en
  claro, fantasma cyan en oscuro); botón WhatsApp sin cambios.

## Capabilities

### New Capabilities

- (none)

### Modified Capabilities

- `contacto-card`: fondo sólido por tema, sin badges de pago y
  textos con contraste en ambos temas.

## Impact

- `index.html` (retiro del bloque `pay-badges` en la card).
- `assets/css/styles.css` + minificado (fondo y textos por tema).
- Sin cambios de links, copy restante, JS, SEO ni otras tarjetas.
