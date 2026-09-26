## Context

Ver `proposal.md` (Why) y capturas `Imágenes/Captura de pantalla_2026-09-26_09-23-{03,14,26,39,52}.png` (~670px). Mapa actual: ≤992px colapsan hero/contacto/footer (1 col) y services/pricing (2 col); ≤768px todo a 1 col + tope 600px; Servicios tiene variante compacta 481–1024px. Huecos: Casos en 2 col hasta 768px, Contacto/FAQ sin tope en 769–992px, y 1 col al límite del tope en 600–768px sin compactación (salvo Servicios). Auditoría con lente ui-design-audit §7 (responsive): el fallo es de reglas por rango, Ño de tokens.

## Goals / Non-Goals

**Goals:**

- Cero rangos sin regla: cada grid tiene comportamiento definido en 600–768 y 769–992.
- Reutilizar patrones existentes (tope 600px, caption/cards compactas) en vez de inventar nuevos.
- Criterios medibles por captura en cada rango.

**Non-Goals:**

- Cambiar DOM, copy, schemas, JS ni los extremos (≤600px, >992px desktop pleno).
- Rediseñar cards ni tocar temas claro/oscuro.
- Nuevos breakpoints fuera de los existentes salvo ajuste fino justificado por captura.

## Decisions

- **Casos a 1 col en 769–992 (en vez de 2 col compactas).** A ~800px dos cards con foto de 150px+ quedan estiradas e incómodas (captura 09-23-26); 1 col con tope 600px reutiliza la regla probada de `cards-centradas`. Alternativa descartada: 2 col compactas — más CSS nuevo para un resultado peor.
- **Extender el tope, Ño crear otro.** Contacto/FAQ en 769–992 usan el mismo `max-width: 600px` centrado de ≤768px. Una sola regla, un solo valor.
- **Compactación espejo de Servicios.** Casos/Opiniones/Contacto en 600–768 copian la receta 481–1024 de Servicios (foto contenida, aire reducido, contenido completo). Alternativa descartada: tope más chico solo en ese rango — encogería también el texto sin bajar la altura, que es la queja real.
- **GEO y Opiniones conservan 2 col en 769–992.** Ya funcionan (cards angostas, texto corto); Ño se tocan.

## Risks / Trade-offs

- [Riesgo] El colapso de Casos a 1 col en 769–992 alarga el scroll en tablet landscape → Mitigación: con la compactación las cards son más bajas; se verifica altura total por captura.
- [Riesgo] Tocar el bloque ≤768px rompe teléfono → Mitigación: cambios solo en `min-width: 601px` anidados o en el bloque 769–992; captura a 360px obligatoria.
- [Riesgo] `?v=` olvidado en alguna página → Mitigación: checklist en tasks (×8 + generador + minificado).

## Migration Plan

Ño aplica (sitio estático). Orden: CSS por rango (769–992 primero, luego 600–768) → captura por rango → minificado + `?v=` → commit + push. Rollback: `git revert`.

## Open Questions

Ninguna: rangos, patrones y criterios están definidos; los valores finos (px exactos de foto/padding) se calibran por captura en el apply sin cambiar el approach.
