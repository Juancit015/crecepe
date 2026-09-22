## Context

Ver `proposal.md` (Why). Causa raíz del zoom persistente: el bloque `@media (hover: none)` con los swaps está antes (línea ~385) que las declaraciones base (`.geo-section` ~802 y siguientes); a igual especificidad gana el orden posterior, así que el panorama sigue aplicándose en táctil. Además Contacto (`contacto-fondo.avif`) no tiene recorte móvil. Los page-heros de subpáginas quedan fuera de alcance (héroes cortos, recorte menos extremo).

## Goals / Non-Goals

**Goals:**
- Swaps de GEO/Opiniones/Proceso efectivos en táctil + recorte de Contacto con encuadre revisado.
- Desktop pixel-idéntico.

**Non-Goals:**
- Page-heros de subpáginas, cambio de velos, parallax JS en móvil.

## Decisions

- **`!important` en los tres swaps existentes** (mismo patrón ya usado para `background-attachment`): vence por cascada sin importar el orden. Alternativa descartada: mover el bloque al final del CSS — frágil ante futuras reglas base posteriores.
- **Recorte de Contacto centrado 600px** (a verificar visualmente en el apply; si el centro cae en rostro/texto, desplazar al lateral como se hizo con GEO).
- **Archivado**: archivar `parallax-movil-sin-zoom` antes o junto con este change, este último, para que el merge de specs no pise los escenarios táctiles.

## Risks / Trade-offs

- [Riesgo] El centro del fondo de Contacto puede no servir como recorte → Mitigación: revisión visual obligatoria en el apply antes del push.
- [Riesgo] Conflicto de merge con el delta no archivado de `parallax-movil-sin-zoom` → Mitigación: orden de archivado indicado arriba.
