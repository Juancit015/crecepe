## Why

La auditoría Seobility (sobre el espejo github.io) dejó 4 hallazgos reales de código, excluidos a pedido los de dominio/URL (canonical, hreflang, www, backlinks, subdominio): título 5px pasado, H1 sin eco en el cuerpo, 2 headings duplicados y 2 anchors repetidos.

## What Changes

Solo `index.html`:
- `<title>` recortado bajo 580px ("CrecePE | Tiendas Virtuales que Venden Solas en Trujillo").
- Palabras del H1 sembradas en el cuerpo ("vendiendo solo", "todos los días") en 2–3 párrafos existentes.
- Headings duplicados diferenciados (h3 de planes con prefijo "Plan").
- Anchors únicos: "Consultar Presencia/Tienda/Automatización" y "Ver caso AZ Consulting/Novedades Chávez".
- Supuesto registrado: fuera de alcance canonical, hreflang, www, backlinks y social share (decidido con el usuario).

## Capabilities

### New Capabilities

- `seo-contenido`: título, H1, headings y anchors coherentes y únicos.

### Modified Capabilities

- Ninguna.

## Impact

- Afectado: textos del index. Schema, estilos, layout y subpáginas intactos.
