## Context

- Bloqueo actual: solo `document.body.style.overflow` (`main.js`, toggle y `closeMenu`). En ventanas de escritorio el scroll vive también en `documentElement`, por eso el fondo se mueve (evidencia: captura 2026-09-20 con scrollbar lateral y menú abierto).
- Cierre en resize ya existe (`>768px` → `closeMenu`), pero hay que verificar que restaura bloqueo + velo + estado (lo hace, salvo el `html` que hoy nunca se bloquea).
- Orden móvil actual: toggle primero en DOM + `.navbar-inner { justify-content: flex-start }` (izquierda AZ). Volver a la derecha exige `order` porque el DOM ño se toca.

## Goals / Non-Goals

**Goals:**
- Cero scroll de fondo con menú abierto en móvil y escritorio angosto.
- Resize a desktop deja todo limpio.
- Hamburguesa con borde a la derecha, logo a la izquierda, solo móvil.

**Non-Goals:**
- Tocar HTML, panel, velo, links, temas ni desktop.

## Decisions

- **Bloqueo doble**: al abrir, `overflow: hidden` en `document.documentElement` Y `body`; al cerrar se restaura (cadena vacía) en ambos, centralizado en el toggle y `closeMenu()`. Alternativa (plan B iOS con `position: fixed` + `scrollY`) queda como reserva si el dueño reporta que en su móvil aún se mueve.
- **Resize endurecido**: el handler existente ya llama `closeMenu()`; en el apply se verifica que con el bloqueo doble ño queden restos (el `closeMenu` restaurará ambos). Sin cambios de lógica previstos salvo sumar el `html`.
- **Hamburguesa a la derecha por CSS**: en el media query, `.navbar-inner { justify-content: space-between; }`, `.logo { order: 1; }`, `.nav-toggle { order: 2; }` (el panel es `absolute`, ño participa del flex). El borde redondeado se conserva.

## Risks / Trade-offs

- Se revierte la izquierda AZ por pedido explícito; el resto del estilo AZ (tarjeta, velo, borde) queda.
- Riesgo bajo: dos líneas de `overflow`; si algún navegador ignora el de `html`, el de `body` sigue como antes.
