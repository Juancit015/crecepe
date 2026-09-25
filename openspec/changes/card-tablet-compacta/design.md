## Context

Ver `proposal.md` (Why). La card ya es paridad Planes en métricas (`card-paridad-planes`), pero a ancho completo de tablet (~640px de contenedor) esas mismas métricas se ven gigantes. La referencia mide ~380-440px de ancho efectivo.

## Goals / Non-Goals

**Goals:**
- Card contenida y centrada en tablet, proporcionada en móvil chico.
- Confinado al media 992px; desktop intacto.

**Non-Goals:**
- Cambiar el diseño de la card (ya es paridad Planes) ni tocar markup/copy/desktop.

## Decisions

- **`max-width: 440px + margin-inline: auto` en `.svc-aside` dentro del media 992px**: la card deja de estirarse al contenedor. 440px calza la referencia y en móvil chico (360px - paddings) el `max-width` simplemente no aplica tope.
- **Compactar type solo si hace falta**: primero el ancho; si a 440px el precio 2rem/padding 38/30 siguen dominando, bajar a precio ~1.8rem y padding 30/24 en el mismo bloque. Decidir en implementación comparando con la referencia.
- **Sin breakpoint nuevo**: el media 992px ya cubre tablet; el de 768px solo si el ajuste fino lo pide.

## Hallazgo 1.1 (decisión: solo ancho, sin compactar type)

A 440px las métricas de paridad (padding 38/30, precio 2rem) ya son proporcionales a la referencia: no se compacta type. En móvil chico el `max-width` no aplica tope y la card sigue a una columna.

## Risks / Trade-offs

- [Riesgo] Card angosta + centrada deja laterales vacíos en tablet → Mitigación: es exactamente el look de referencia; aceptado.
- Caché de GitHub Pages (10 min): Ctrl+F5 tras el push.
