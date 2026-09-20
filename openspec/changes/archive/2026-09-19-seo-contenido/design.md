## Context

Ver `proposal.md`. Mapa medido: title 585px; H1 "Tu negocio vendiendo solo, todos los días" sin eco; duplicados "Tienda Virtual + IA" y "Automatización con IA" (h3 servicio vs h3 plan); anchors "Consultar plan" ×3 y "Ver caso completo" ×2.

## Goals / Non-Goals

**Goals:**
- 4 fixes de contenido verificables con `rg`.

**Non-Goals:**
- Nada de dominio/URL, estilos, schema ni subpáginas.

## Decisions

- **Decisión 1: recorte mínimo del title.**
  Quitar "Webs y" (585→~500px). Conserva marca + keywords principales.
- **Decisión 2: eco del H1 en 2 puntos existentes.**
  Subtítulo de Planes y párrafo de Contacto incorporan "vendiendo solo/todos los días" sin párrafos nuevos.
- **Decisión 3: prefijo "Plan" en h3 de pricing y anchors con nombre propio.**
  "Plan Tienda Virtual + IA", "Consultar Tienda…", "Ver caso AZ Consulting…". Textos visibles cortos pero únicos.

## Risks / Trade-offs

- [Riesgo] Cambiar anchors visibles puede confundir al visitante recurrente; se mitiga manteniendo el verbo ("Consultar…", "Ver caso…").

## Migration Plan

- Editar textos, verificar con `rg` (cero duplicados, title corto). `openspec validate seo-contenido`.

## Open Questions

- Ninguna.
