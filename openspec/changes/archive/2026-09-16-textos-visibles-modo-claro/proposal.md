## Why

En modo claro varios textos azul oscuro quedan sobre fotos de fondo oscuras y no se leen: la foto del hero es oscura (brillo medio medido 52/255) y la de GEO es nocturna. El modo oscuro está correcto y no se toca.

## What Changes

Solo modo claro, solo `assets/css/styles.css`:
- Hero: H1 pasa de azul marino (`--primary`) a blanco; resaltado `.hl` ("IA") pasa de azul (`--accent`) a cian (`--accent-light`); descripción y línea de confianza pasan de gris oscuro (`--text`) a claro (`rgba(255,255,255,0.85)`), con sombra de texto sutil como refuerzo.
- Hero: botón "Ver servicios" (`.hero-actions .btn-outline`) en modo claro pasa a fondo transparente con borde azul marino (`--primary`) y texto blanco; al hover el fondo se vuelve marino fijo (`#0A1F44`) con texto blanco, en ambos temas; solo esa instancia, los demás `.btn-outline` no cambian.
- GEO: insignia "Diferenciador" pasa a texto blanco sobre pastilla oscura semitransparente con borde cian; resaltado del título (`span`) pasa de azul (`--accent`) a cian (`--accent-light`).
- Excluidos a propósito: palabra "Google" (colores oficiales de marca), tarjeta del especialista e insignia del hero (ya legibles), y todo el modo oscuro.

## Capabilities

### New Capabilities

- `textos-sobre-foto`: colores de texto legibles sobre fotos de fondo en modo claro (hero y GEO).

### Modified Capabilities

- Ninguna (la capacidad `fondos-fotograficos` regula velos, no colores de texto).

## Impact

- Afectado: reglas de modo claro en `assets/css/styles.css` (hero + GEO). El modo oscuro queda intacto.
- Riesgo visual: bajo; se reutiliza la paleta existente (blanco, cian, pastilla oscura). Verificación con recarga dura en claro, desktop + móvil.
- Sin impacto en HTML, `tools/build_pages.py`, SEO, schemas ni `llms.txt`.
