## Context

Ver `proposal.md` (Why). Hoy el oscuro de precios son 6 reglas
sueltas acumuladas (`styles.css:25xx`, bloque dark-mode) que se
pisan entre sí; el claro en cambio usa tokens y se ve perfecto.
Restricción: reutilizar tokens existentes (`--primary`,
`--accent`, `--accent-light`, `#DCE6FA`, `#0F1D3A`, `#16294F`);
cero colores nuevos.

## Goals / Non-Goals

**Goals:**

- Un bloque oscuro único y ordenado para `#planes` que replique la
  jerarquía del claro: hermanas apagadas, Tienda un escalón arriba,
  cyan = acción.
- Contraste AA en todos los textos y botones del bloque.

**Non-Goals:**

- Rediseñar el modo oscuro del resto del sitio.
- Tocar el modo claro o el marcado HTML (salvo hook faltante).

## Decisions

- **Paleta cerrada con valores fijos** en vez de más `rgba`
  improvisados. Racional: termina el ciclo de parches; cada
  superficie tiene un valor auditable.
- **Cyan solo = acción** (badge popular, checks de features, CTAs);
  texto y bordes en blancos/neutros. Racional: espeja el claro,
  donde el azul fuerte también se reserva a acentos y botones.
- **Consolidar las reglas sueltas** en un bloque comentado
  `/* Precios en oscuro */` y borrar las que queden redundantes.
  Racional: evita futuras guerras de especificidad como las ya
  vistas (título, badge).

## Risks / Trade-offs

- [`#16294F` sobre fondo `#0F1D3A` es sutil] → Mitigación: es la
  misma diferencia que AZ oscuro; el borde claro
  `rgba(255,255,255,0.22)` + CTA azul la separan.
- [Reglas viejas pueden sobrevivir y picar] → Mitigación: tarea de
  auditoría del bloque dark actual antes de escribir (listar cada
  selector de precios en oscuro y decidir conserva/borra).
