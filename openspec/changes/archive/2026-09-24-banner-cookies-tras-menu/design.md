## Context

Mapa de apilado móvil actual (ver proposal.md - Why): dial/to-top 999, velo 999, drawer 1000, hamburguesa 1001, banner 1001 inyectado al final del `body` (gana los empates por orden de pintado). Solo CSS decide el bug; el JS del consentimiento no se toca.

## Goals / Non-Goals

- Goals: drawer + X siempre por encima del banner; banner intacto y clicable con drawer cerrado.
- Non-Goals: no mover el drawer ni la hamburguesa de su z-index; no ocultar el banner con JS; no cambiar flujos de consentimiento/GA.

## Decisions

- **Banner a `z-index: 999` (elegido):** queda bajo drawer (1000) y hamburguesa (1001). Los empates a 999 con dial, to-top y velo se resuelven por DOM: el banner se inyecta último en el `body`, así que sigue por encima de ellos. Una sola línea, sin efectos colaterales.
- **Alternativa descartada — banner a 998:** el dial y el to-top (999) taparían la esquina del banner en móvil. Ño.
- **Alternativa descartada — ocultar el banner con JS al abrir el drawer:** más código y el banner desaparecería/reaparecería con cada apertura; el z-index lo resuelve declarativamente. Ño.
- **Alternativa descartada — subir el drawer a 1002:** arrastra a hamburguesa y velo y reabre la guerra de z-index. Ño.

## Risks / Trade-offs

- Si a futuro otro fijo usa 999 y se inyecta después del banner, el empate se pierde: documentar el mapa de apilado en el CSS junto a la regla.
