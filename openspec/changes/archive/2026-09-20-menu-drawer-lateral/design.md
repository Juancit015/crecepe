## Context

- Panel actual: lámina bajo la navbar (`absolute`, `top: 100%`, links centrados sin iconos). Se reemplaza por drawer lateral.
- La navbar ya es fija con `z-index: 1000` y el velo `999` con blur; el drawer debe ir sobre el velo (`z-index: 1001`, como la hamburguesa actual).
- Los 7 links + CTA + fila del tema viven en `#navLinks` en las 8 páginas; el JS cierra al pulsar cualquier `a` y al tocar fuera.
- Estilo de iconos del sitio: SVG inline `stroke="currentColor"` (ya usados en cards y hero-trust).

## Goals / Non-Goals

**Goals:**
- Drawer derecho ~80% ancho (max ~340px), altura completa, fondo marino de marca en ambos temas, texto blanco.
- Links a la izquierda con icono SVG + divisor entre filas; X de cierre arriba del drawer.
- Reutilizar velo, bloqueo de scroll y cierres sin cambios de lógica salvo lo necesario.

**Non-Goals:**
- Submenús desplegables (la referencia los tiene; aquí ño hay de qué), redes, desktop ni otros breakpoints.

## Decisions

- **Estructura**: `#navLinks` pasa a `position: fixed; top: 0; right: 0; bottom: 0; width: min(82vw, 340px); transform: translateX(100%)` → `none` con `.open`. Fondo marino sólido (`#0A1F44` o el marino del tema oscuro) con texto blanco en ambos temas: es menú de marca, como la referencia roja.
- **X interna**: botón de cierre arriba a la izquierda del drawer (como la referencia) que llama a `closeMenu()`; la hamburguesa de la navbar conserva su animación y también cierra (doble vía, ambas llaman lo mismo).
- **Iconos**: un SVG inline por link (inicio, servicios, planes, proceso, casos, opiniones, faq) estilo `stroke` actual; el CTA conserva su píldora adaptada al fondo oscuro y la fila del tema va al final con divisor.
- **Navbar al abrir**: ya se vuelve sólida con el menú abierto; con drawer ño necesita fusionarse al panel (van separados por el velo), pero se conserva para que la X/hamburguesa se lea bien.
- **8 páginas**: el bloque del panel se replica igual en todas (como hoy con el velo).

## Diagnóstico confirmado con render real (bug reportado 2026-09-20)

- Síntoma: al abrir tras hacer scroll, solo se ve la franja superior (X + marino); en el hero se veía completo.
- Causa real: `.navbar.scrolled` lleva `backdrop-filter: blur`, y eso convierte a la navbar en contenedor del drawer fijo → el drawer se aplasta a la altura de la barra. Probado A/B con Firefox headless (con blur: franja; sin blur: drawer completo).
- Fix: `backdrop-filter: none` en la navbar mientras el menú está abierto (reglas `body:has(.nav-links.open)`); la barra ya es sólida ahí, ño se pierde nada.

## Risks / Trade-offs

- Más HTML por página (7 iconos + X): aceptable, son SVG pequeños inline.
- El fondo marino fijo en modo claro cambia la estética actual (lámina blanca): es lo pedido (marca como la referencia).
- Ancho 82vw deja ver el velo a la izquierda: invita al toque-fuera para cerrar.
