## Context

- El JS ya bloquea el scroll (`body.style.overflow`, `main.js:153/190`) y ya cierra al tocar fuera, pulsar link, Escape y resize (`main.js:156-184`).
- El panel lámina es `absolute` dentro de la navbar fija (`z-index: 1000`); falta un velo detrás que difumine el fondo y reciba el toque.
- Patrón de blur ya usado en el sitio (`backdrop-filter` en navbar y panel).

## Goals / Non-Goals

**Goals:**
- Velo con blur + dim solo cuando el menú abre, en ambos temas.
- Toque en el velo = cerrar; scroll de fondo bloqueado y restaurado.
- Reutilizar `closeMenu()` sin duplicar lógica.

**Non-Goals:**
- Tocar el panel, los links, el desktop ni otros overlays (contact-dial, to-top).

## Decisions

- **Elemento `.nav-backdrop`** (div vacío tras `</nav>`): `position: fixed; inset: 0; z-index: 999` (bajo la navbar de 1000), con `background: rgba(6,13,31,0.35)` + `backdrop-filter: blur(6px)`; se muestra/oculta con la misma clase `open` y transición de opacidad/visibilidad.
- **Cierre**: clic en el velo llama al `closeMenu()` existente; el cierre por link/Escape/resize también oculta el velo (centralizar en `closeMenu` + una función `syncBackdrop`).
- **Scroll**: se conserva el `body.style.overflow` actual; en el apply se verifica en móvil real que ño haya scroll de fondo (si `overflow` ño basta en iOS, fijar `position: fixed` del body con restauración de `scrollY`).
- **Solo breakpoint móvil**: en desktop el velo nunca existe (el menú ño abre ahí por el cierre en resize).

## Risks / Trade-offs

- El blur tiene costo de GPU en móviles viejos: se mitiga con 6px moderados y solo mientras el menú abre.
- `z-index` 999 podría chocar con el contact-dial/to-top flotantes: el velo los cubre mientras el menú abre (aceptable y deseado: foco en el menú).
