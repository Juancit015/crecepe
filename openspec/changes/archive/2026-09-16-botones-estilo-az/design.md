## Context

Ver `proposal.md` para el porqué. Fuente: `Proyectos IESTP/azconsulting/assets/css/styles.css` (minificado, paleta `--primary:#0d1630`, `--accent:#FF7A00`):
- AZ claro (ambos botones): `background:rgba(13,22,48,0.08); border:2px solid rgba(13,22,48,0.3); color:var(--primary); backdrop-filter:blur(6px); transition:all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)`; hover: `background:var(--primary); color:#fff; translateY(-5px)`.
- AZ oscuro Agendar: `background:rgba(255,122,0,0.12); border-color:rgba(255,122,0,0.4); color:var(--accent)`; hover: fondo acento + texto `#fff`.
- AZ oscuro Ver: `background:rgba(255,255,255,0.06); border-color:rgba(255,255,255,0.3); color:#f1f5f9`; hover: fondo `#f1f5f9` + texto `#0d1630`.
- Paleta CrecePE: `--primary` #0A1F44 (claro) / #FFFFFF (oscuro), `accent-light` #00C2FF. Estado actual del hero: reglas outline/sólidas de changes anteriores a reemplazar.

## Goals / Non-Goals

**Goals:**
- Réplica fiel del sistema AZ con swap naranja→cyan y marinos propios, acotada a `.hero-actions`.
- Hover invertido por botón y tema, con la misma animación spring.

**Non-Goals:**
- No se tocan base `.btn`, botones fuera del hero, textos, velos, ni HTML.

## Decisions

- **Decisión 1: traducir valores AZ 1:1 con nuestra paleta (tabla).**
  Claro: `rgba(13,22,48,…)` → `rgba(10,31,68,…)`; texto blanco en reposo y hover (se aparta de AZ, cuyo texto es marino, porque la foto del hero CrecePE es oscura y el marino no se lee); hover fondo `--primary` marino. Oscuro Agendar: naranja → `rgba(0,194,255,0.12)`, borde `rgba(0,194,255,0.4)`, texto `accent-light`, hover fondo `#00C2FF` + texto `#fff` (fiel al original aunque el contraste sea justo). Oscuro Ver: mismos blanquecinos AZ con texto `#fff` y hover texto `#0A1F44`.
- **Decisión 2: conservar radio/tamaño CrecePE.**
  AZ usa `radius:999px`; `.btn` CrecePE ya es píldora de 50px y el tamaño viene de `btn-lg`. Alternativa (igualar 999px) descartada: cambio imperceptible que toca la base.
- **Decisión 3: reemplazar las reglas hero anteriores, no apilar.**
  Las reglas `:not(.dark-mode)` outline y el hover marino del hero se reemplazan por el sistema glass; si se apilan, la cascada pelea. Las nuevas reglas oscuras usan `body.dark-mode .hero-actions …` (0,3,0) para superar a la base (0,1,0). Blur con prefijo `-webkit-` como AZ.

## Risks / Trade-offs

- [Riesgo] Hover cian + texto blanco con contraste justo (heredado del naranja AZ) → Mitigación: réplica fiel pedida; la tarea de verificación lo juzga visualmente.
- [Riesgo] Glass + blur sobre foto con zoon (`heroZoom`) cueste en móviles viejos → Mitigación: blur de 6px ya probado en AZ y en nuestras cards.
- [Trade-off] Agendar pierde su sólido eléctrico en claro (ambos botones iguales en reposo) → Aceptado: es el efecto AZ pedido; el hover los diferencia.

## Migration Plan

- Cambio solo-CSS acotado al hero: reemplazo en claro + 4 reglas nuevas en oscuro. Recarga dura en ambos temas, captura del par en reposo y hover comparando con AZ. `python3 tools/build_pages.py` no necesario.

## Open Questions

- Ninguna que bloquee specs o tareas.
