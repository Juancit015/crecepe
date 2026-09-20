## Why

Las fotos de las 3 páginas de servicios ya existen en `assets/img/` pero ningún CSS las usa: los `.page-hero` siguen con degradado plano. Al cablearlas se despiertan las reglas blancas de `hero-servicios-blanco` (acotadas a `.has-bg`) y cada plan gana su fondo fotográfico.

## What Changes

- `servicios/presencia-digital.html`, `tienda-online-bagisto.html`, `automatizacion-ia.html`: clase `has-bg` en su `.page-hero`. (Ajuste durante implementación: cada página ya traía su foto + velo oscuro en `style` inline; no hicieron falta modificadores ni reglas nuevas de fondo.)
- Supuesto registrado: velo oscuro también en claro, porque manda el texto blanco, no el tema.

## Capabilities

### New Capabilities

- `fondos-servicios`: cada página de servicios con su foto de fondo y velo legible en ambos temas.

### Modified Capabilities

- Ninguna.

## Impact

- Afectado: 3 HTML (una clase cada uno) y reglas `.page-hero` en CSS. Casos/legales intactos (sin `has-bg`).
- Activa las reglas dormidas de `hero-servicios-blanco`.
