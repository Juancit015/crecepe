## Context

Ver `proposal.md` (Why). Las 3 fichas usan el schema `Service` generado por `service_schema()` en `tools/build_pages.py`, cuyo `provider` actual es mínimo (`name` + `url`). El home ya declara `paymentAccepted` en su `ProfessionalService` y los 3 `provider` anidados. Casos y legales solo llevan `BreadcrumbList`, sin entidad del negocio.

## Goals / Non-Goals

**Goals:**

- `paymentAccepted` presente en home + 3 fichas, ausente donde Ño corresponde.
- Futuras regeneraciones conservan el campo (generador actualizado).
- Spec principal refleja el alcance real.

**Non-Goals:**

- Tocar casos, legales, copy visible o layout.
- Cambiar los medios aceptados (siguen Yape, Plin, Transferencia).

## Decisions

- **Alcance home + 3 fichas (decisión de Juan).** Alternativas descartadas: las 7 subpáginas (duplica la entidad en páginas sin precios) y solo relajar el spec (desperdicia el contexto transaccional de las fichas, donde el dato de pago sí aporta).
- **Campo en el `provider` existente, sin bloque nuevo.** Se extiende el objeto `provider` del schema `Service` en vez de agregar un `ProfessionalService` aparte: menos ruido para Google, misma señal.
- **Generador actualizado en el mismo change.** `service_schema()` incluye el campo desde ahora; así el candado `generador-seguro` protege un dato que ya nace en plantilla.

## Risks / Trade-offs

- [Riesgo] Editar JSON-LD a mano rompe sintaxis → Mitigación: validar cada bloque con `python3 -c json.loads` antes de commitear.
- [Riesgo] Divergencia futura entre fichas publicadas y plantilla → Mitigación: el campo entra a `service_schema()` en el mismo commit.

## Migration Plan

Ño aplica (sitio estático). Orden: fichas (3 schemas) → generador → validación JSON → specs vía archive → commit + push. Rollback: `git revert`.

## Open Questions

Ninguna: el alcance y los valores están decididos.
