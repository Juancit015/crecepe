## Context

Ver `proposal.md` (Why). La caption de servicios vive en el bloque
móvil (reglas `.service-photo .service-overlay`); basta devolverla a
`display:none`. La foto es item de grid con `align-items:start` en la
card: `align-self:center` la centra. `.service-link` base es acento;
en móvil se fuerza blanco + hover cyan. Toggle de planes: generalizar
la regla de la destacada a todos (el fondo de sección planes es
claro en modo claro… verificación: ¿legible blanco sobre fondo
claro?).

## Goals / Non-Goals

**Goals:**

- Foto de servicio limpia y centrada en móvil; atajos blancos +
  hover cyan en ambos temas.

**Non-Goals:**

- Tocar desktop, copy, HTML o la caption de casos.

## Decisión registrada en implementación

- Blanco SOLO en `body.dark-mode` móvil (decisión del usuario tras
  ver el conflicto): en claro las cards son blancas y el blanco
  sería invisible; se conserva el acento actual.

## Decisions

- **Revertir caption de servicios a `display:none`** en vez de
  borrar las reglas: si el usuario la extraña, vuelve en 1 línea.
  Racional: reversibilidad.
- **Blanco también en modo claro para toggles/links**: las secciones
  de servicios y planes usan fondos oscuros con foto en móvil
  (verificar en implementación; si alguna zona es clara, scopear
  por sección). Decisión del usuario, se valida visualmente.
- **`align-self:center`** en vez de cambiar el grid. Racional: 1
  línea, sin reflow de la fila.

## Risks / Trade-offs

- [Blanco sobre fondo claro sería ilegible] → Mitigación: la tarea
  1.2 incluye verificar el fondo real de cada zona en ambos temas;
  si hay zona clara, la regla se scopea a la sección oscura.
