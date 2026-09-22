## Context

Ver `proposal.md` (Why). Estado actual (`styles.css` 374-391): `.parallax-fondo` fuerza `background-attachment: fixed !important` en todos los viewports (solo `prefers-reduced-motion` lo apaga), y los page-heros llevan `fixed` inline en su `style`. En desktop funciona; en táctil el navegador calcula mal el fondo fijo contra el viewport (zoom de golpe + reacomodo al soltar).

## Goals / Non-Goals

**Goals:**
- Cero zoom/tirones en fondos de Diferenciador, Opiniones, Proceso y page-heros en táctil.
- Desktop pixel-idéntico.

**Non-Goals:**
- Parallax JS en móvil, cambio de imágenes o velos, tocar el hero (ya excluido).

## Decisions

- **Apagado por capacidad, no por ancho**: `@media (hover: none)` → `background-attachment: scroll` para `.parallax-fondo` (y override del `fixed` inline de page-heros). Alternativa descartada: `max-width` — una tablet con mouse perdería el efecto y un laptop táctil conservaría el bug; `hover: none` ataca la causa (navegadores táctiles).
- **Revisar el respaldo iOS en `main.js` en el apply**: si el respaldo fija la imagen por JS, desactivarlo en táctil también; si solo es `background-size` u otro ajuste inocuo, se deja. Alternativa descartada: parallax JS completo en móvil — costo alto para un efecto decorativo que el dueño no pidió conservar en táctil.
- **`!important` espejo**: se usa el mismo `!important` que la regla original para vencer los `fixed` inline de los page-heros.

## Risks / Trade-offs

- [Riesgo] Se pierde el reveal en móvil (fondos estáticos) → Mitigación: el contenido y los reveals de texto siguen intactos; el efecto era decorativo y en móvil estaba roto de todos modos.
- [Riesgo] `hover: none` también apaga en touchscreen laptops → Mitigación: aceptable; esos dispositivos alternan táctil/mouse y el scroll normal nunca se ve roto.
