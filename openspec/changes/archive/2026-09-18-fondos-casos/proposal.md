## Why

Las 2 páginas de casos muestran `.page-hero` con degradado plano mientras las de servicios ya tienen foto. Las fotos existen (`casos-az-consulting-fondo.avif`, `casos-novedades-chavez-fondo.avif`) y el cableado despierta el texto blanco de `hero-servicios-blanco` (reglas `.has-bg`, válidas para cualquier `.page-hero`).

## What Changes

- `casos/az-consulting.html` y `casos/novedades-chavez.html`: clase `has-bg`. (Ajuste al implementar: los fondos + velo ya venían inline; solo faltaba la clase que despierta el texto blanco.)
- Sin CSS nuevo (reglas `.has-bg` existentes), sin cambios de textos.

## Capabilities

### New Capabilities

- `fondos-casos`: cada página de caso con su foto de fondo y texto blanco legible.

### Modified Capabilities

- Ninguna.

## Impact

- Afectado: 1 línea por HTML. El velo rige en ambos temas; texto blanco automático.
