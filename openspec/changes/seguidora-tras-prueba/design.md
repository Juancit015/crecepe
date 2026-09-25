## Context

Ver `proposal.md` (Why). Estado: rige `embed-card-precio-movil` (card estática entre QA y FAQ vía `display: contents` + orders 9/10). El intento `sticky-compacto-movil` usó `order` primero + sticky y falló por tapar la intro. Secciones de `.svc-main`: intro/desc → Qué incluye → Ficha → Prueba real → Cómo lo hacemos (Pasos) → ¿Es para ti? (Fit) → QA → FAQ.

## Goals / Non-Goals

**Goals:**
- Seguidora tras Prueba, compacta, con intro libre; desktop intacto.
- CSS puro; sin markup ni JS.

**Non-Goals:**
- Card full viajera (taparía contenido: física, no negociable); cambios de copy/desktop.

## Decisions

- **Slot tras Prueba con `order`**: mantener `display: contents`; aside en `order: 5` y lo posterior a Prueba (h2 de Pasos + su lista, Fit + lista, QA + lista, FAQ h2 + lista) en `order: 6`. Selectores probables con `:has` (ej. `h2:has(+ .faq-list)` ya usado); auditar clases de cada lista en las 3 fichas en implementación.
- **Compacta obligatoria al viajar** (h3 ~1.05rem, precio ~1.5rem, plazo micro, CTA natural centrado; badge/mini/nota ocultos; `max-width: 440px` centrada): ~160px pegada, no tapa lectura.
- **`position: sticky; top: 76px`**: bajo el navbar fijo; parada automática al fin del layout (relacionados fuera del grid).
- **Fallback si el slot es inestable**: mover el aside en el DOM tras Prueba ×3 fichas (markup mínimo). Requiere tu aprobación antes por tocar las 3 fichas; no hacerlo en silencio.
- **Se retiran las reglas del embed** (orders 9/10) del media 992px.

## Hallazgo 1.1 (selector ganador)

`:has` no distingue (todas las listas comparten `.service-list` y Fit ni lista tiene). Pero las 3 fichas tienen 7 `h2.svc-h2` en idéntico orden (Pasos = 4º). Selector: `.svc-main > h2.svc-h2:nth-of-type(4) ~ *` → `order: 6`; aside en `order: 5`. Sin markup.

## Risks / Trade-offs

- [Riesgo] Selectores `:has` difieren entre fichas → Mitigación: auditar las 3 antes del CSS; fallback a markup con aprobación.
- [Riesgo] Card compacta menos informativa que la full → Mitigación: la info vive en la ficha; la card es atajo de compra, no folleto.
- Caché de GitHub Pages (10 min): Ctrl+F5 tras el push.
