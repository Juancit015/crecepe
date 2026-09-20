## Context

Ver `proposal.md` (Why). Estado actual: `.specialties-bar .specialties-track` es estático (5 spans, sin animación en CSS); el `.trust-strip` estático sobre `#contacto` existe solo en código y en el delta sin archivar de `confianza-contacto`. Sitio estático sin build: solo `index.html` + `assets/css/styles.css`, sin JavaScript para esto.

## Goals / Non-Goals

**Goals:**
- Movimiento ping-pong continuo en ambas barras solo con CSS (cero JS).
- Textos nunca recortados ni con saltos visibles en ningún ancho.
- Legible en modo claro y oscuro; estático con `prefers-reduced-motion`.

**Non-Goals:**
- No se toca el dial flotante, la tarjeta de contacto ni el footer (quedan como los dejó `confianza-contacto`).
- No se agregan secciones nuevas ni se reordena nada más en `index.html`.

## Decisions

- **Ping-pong con `animation-direction: alternate` sobre pista duplicada**: la pista contiene el set de ítems 2 veces y anima `translateX(0 → -50%)` en `alternate` infinito, así va y vuelve sin el salto del loop clásico. Alternativa descartada: loop infinito `linear` (salta al reiniciar y el usuario pidió "desplacen y vuelvan").
- **Reutilizar `.specialties-bar` para el hero y crear `.trust-marquee` bajo `#opiniones`**: el hero conserva su marca visual; la barra de garantías es un bloque nuevo entre Opiniones y la siguiente sección (FAQ). Alternativa descartada: un solo componente genérico renombrando el existente (rompe estilos ya afinados del hero).
- **Quitar `.trust-strip` de `#contacto` en este mismo change**: evita duplicar las garantías en dos lugares. Requiere archivar `confianza-contacto` primero para que el orden de deltas sea limpio.
- **Fondos**: hero conserva el suyo; la barra de garantías usa el mismo fondo marino que la barra de especialidades (`var(--primary)`, `#060D1F` en oscuro) para leerse en ambos temas sin pelear con fotos.

## Risks / Trade-offs

- [Risk] En pantallas muy angostas el set duplicado puede verse apretado → Mitigación: tamaño de fuente y separación con `clamp()`, verificado con render móvil a 390px.
- [Risk] Conflicto de deltas si `confianza-contacto` se archiva después → Mitigación: orden de archivo explícito (primero `confianza-contacto`, luego este).
- [Trade-off] Ping-pong `alternate` pausa en los extremos: se acepta porque es el efecto pedido ("vuelven").

## Migration Plan

- Sin migración: cambio visual puro. Rollback = revert del commit.

## Open Questions

- (none)
