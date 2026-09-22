## Context

Ver `proposal.md` y `specs/proceso-detalle/spec.md`. Base: timeline con 6 `.process-step` (dot + body con h4 + p) y patrón acordeón ya usado en Planes (`.pricing-toggle` + `.is-open`) y FAQ.

## Goals / Non-Goals

**Goals:** detalle por paso sin alargar el móvil, reutilizando el acordeón existente.
**Non-Goals:** cambiar orden, copy base, animaciones del timeline o el resaltado.

## Decisions

- **Reutilizar el acordeón de Planes** (botón + clase + animación) en vez de uno nuevo. Alternativa descartada: componente propio (duplica código para lo mismo).
- **Contenido redactado desde entrevista (ver tabla) + corrección obligatoria del dueño en tareas.** El dueño describió: llamada de 30 min, diagnóstico con solución, planificación según búsquedas reales, pruebas previas al lanzamiento (visual + SEO).

## Contenido propuesto por paso (BORRADOR — el dueño corrige)

1. **Diagnóstico virtual** — Duración: 30 min por videollamada · Recibes: 3 oportunidades de mejora + paquete recomendado · Pones tú: nada, solo contarme de tu negocio
2. **Planificación** — Duración: sesión de 60-90 min · Recibes: mapa del sitio y cronograma según lo que buscan tus clientes · Pones tú: logo, textos y fotos
3. **Diseño y desarrollo** — Duración: 2-4 semanas según plan · Recibes: avances por WhatsApp + links de vista previa · Pones tú: revisar y aprobar cada avance
4. **SEO + GEO** — Duración: incluido en el desarrollo · Recibes: web rápida, visible en Google y recomendada por la IA · Pones tú: accesos a dominio/hosting si aplica
5. **Lanzamiento** — Duración: 2-3 días de pruebas + publicación · Recibes: sitio sin errores visuales ni de SEO, Analytics, Search Console y capacitación en video · Pones tú: revisión final
6. **Soporte y crecimiento** — Duración: 30 días incluidos · Recibes: soporte post-lanzamiento y opción a mantenimiento mensual · Pones tú: reportar lo que necesites

## Risks / Trade-offs

- [Risk] Contenido inexacto si el dueño no corrige → Mitigación: tarea 1.1 exige su visto bueno línea por línea antes de tocar código.
