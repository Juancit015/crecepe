## Context

Ver `proposal.md` (Why) y captura `Imágenes/Captura de pantalla_2026-09-26_16-32-47.png` (Diferenciador a 960px: solo hombro). Fuente `assets/img/geo-fondo.avif` 1920×800 con la mujer al ~60% horizontal (rostro x ~1000–1300); variante anterior 600×800 = recorte central x 660–1260 que corta el rostro por la mitad izquierda. Servido vía `@media (hover: none)` en `styles.css:434`. Vistas en `/tmp/opencode/hero/geo-fondo.png` y `geo-fondo-movil.png` (anterior).

## Goals / Non-Goals

**Goals:**

- Mujer visible en Diferenciador táctil (tablet + móvil).
- Mismo peso (~10 KB) y dimensiones (600×800) — sin costo LCP.
- Desktop pixel-igual.

**Non-Goals:**

- Cambiar CSS, velos, copy, layout o el panorama desktop.
- Tocar otras fotos o secciones (hero, proceso, opiniones, contacto).

## Decisions

- **Recrop, Ño `background-position`.** El archivo anterior Ño contenía al sujeto en absoluto (verificado visualmente); ninguna posición CSS puede mostrar lo que Ño está en el archivo. Ventana x 850–1450 centrada en el rostro (~1150, 60%).
- **PIL quality 35.** `avifenc` daba 42–67 KB; PIL q35 da 10 KB con calidad limpia (verificado lado a lado; además va bajo velo 0.60). Paridad con los 8.5 KB originales.
- **Cero CSS.** Con el sujeto dentro del archivo, el `cover + center` existente lo encuadra en todos los anchos táctiles. Menor diff, menor riesgo.
- **Hero revertido.** El change anterior apuntaba al hero por malentendido; sus edits CSS se revirtieron completos (cero focales en `styles.css`) y el change se eliminó.

## Risks / Trade-offs

- [Riesgo] q35 introduce artefactos visibles → Mitigación: comparativa visual aprobada antes de instalar; el velo oscuro los disimula.
- [Riesgo] Tablets grandes apaisadas con mouse conservan panorama `center` → Mitigación: fuera de alcance; el panorama contiene a la mujer y `center` la muestra.
- [Riesgo] Caché del AVIF viejo en el navegador de Juan → Mitigación: pedir Ctrl+Shift+R en la verificación (el archivo Ño lleva `?v=`).

## Migration Plan

Ño aplica (un archivo). Orden: recrop → verificación visual local → minificado (sin cambios CSS, pero regenerado por higiene) → captures de Juan → commit + push. Rollback: `git checkout -- assets/img/geo-fondo-movil.avif`.

## Open Questions

Ninguna: causa raíz verificada, fix instalado, criterios por captura.
