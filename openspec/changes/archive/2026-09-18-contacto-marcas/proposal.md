## Why

En Contacto ("¿Listo para hacer crecer tu negocio?") los tres iconos son monocromos genéricos (WhatsApp en cian, sobre translúcido y reloj de línea) y el botón "Agendar por WhatsApp" es azul. La propuesta: iconos con identidad de marca (WhatsApp verde oficial, email estilo Gmail, reloj a juego) y botón Agendar en verde WhatsApp para asociarlo de inmediato.

## What Changes

Solo bloque Contacto del `index.html` + `assets/css/styles.css`:
- Pastilla WhatsApp en verde `#25D366` con glifo oficial en blanco (el path actual ya es el oficial, se conserva).
- Pastilla email con sobre estilo Gmail (colores de marca) sobre fondo blanco.
- Pastilla reloj con el mismo formato de pastilla de marca (fondo blanco, reloj en marino): "intento" a juego, sin marca que copiar.
- Botón "Agendar por WhatsApp" en verde WhatsApp con hover más oscuro (nueva clase `.btn-whatsapp`, sin tocar `.btn-primary` global).
- Supuesto registrado: pastillas de marca solo en Contacto; el dial flotante y el footer no se tocan.

## Capabilities

### New Capabilities

- `contacto-marcas`: iconos de contacto con identidad de marca y botón Agendar verde.

### Modified Capabilities

- Ninguna.

## Impact

- Afectado: `.contact-item .ci-icon` (3 variantes), 2 SVG y botón de `.contact-card`.
- Sin cambios de enlaces, textos, layout ni otras secciones.
