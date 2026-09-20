## Context

- 3 tarjetas en `#opiniones` (`index.html:782-819`): textos genéricos de consultoría/ERP, firmados por María García (TechCorp), Carlos Rivera (DataSys) y Ana López (InnovaGroup).
- El nombre Carlos Rivera aparece en tarjeta (`:800-803`), alt del avatar y JSON-LD (`:71`); también en `llms.txt:34` y `README.md:55`.
- Los servicios reales: presencia digital (web visible en Google), tienda online 24/7, automatización con IA.

## Goals / Non-Goals

**Goals:**
- Cada opinión vende un servicio con lenguaje de cliente.
- Dayron Chavez firma la de la tienda, vinculado a Novedades Chávez en tarjeta y JSON-LD.
- Nombres visibles y datos estructurados coherentes.

**Non-Goals:**
- Cambiar layout, estilos, fotos de avatar ni nombres de archivo de imagen.
- Inventar métricas (sin cifras de ventas ni porcentajes).

## Decisions

- **Mapeo 1:1 tarjeta → servicio**: María = web, Dayron = tienda, Ana = IA. Alternativa (3 opiniones de tiendas) descartada: desperdicia la vitrina de los 3 servicios.
- **Nombres María y Ana se mantienen** con roles de clientes de esos servicios; solo Carlos cambia a Dayron por pedido explícito.
- **Textos propuestos** (el dueño confirma o ajusta en el apply):
  - María García, Cliente — Sitio web profesional: "Mi web carga rápido y aparece en Google. Los clientes me escriben solos preguntando por mis servicios."
  - Dayron Chavez, Fundador — Novedades Chávez: "Mi tienda vende sola las 24 horas. Los pedidos llegan por WhatsApp mientras atiendo mi local."
  - Ana López, Cliente — Automatización con IA: "El asistente atiende a mis clientes de noche y me deja las citas listas para la mañana."
- **Alcance de edición**: `index.html` (3 `<p class="opinion-text">`, 3 roles, nombre + alt + JSON-LD), `llms.txt:34` y `README.md:55-56`.

## Risks / Trade-offs

- Son testimonios en voz de cliente: si el dueño prefiere otros textos, el apply los pide antes de editar (como con overlays).
- Avatar `opinion-carlos.avif` conserva su archivo; solo cambia el alt a Dayron Chavez.
