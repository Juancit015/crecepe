## 1. Barra de especialidades en movimiento

- [x] 1.1 Convertir `.specialties-track` en pista duplicada con animación ping-pong (`alternate`) y agregar ítems extra solo con servicios ya publicados, verificando que el movimiento va y vuelve sin saltos en render de escritorio
- [x] 1.2 Agregar `prefers-reduced-motion` estático para la barra y verificar legibilidad en modo claro y oscuro

## 2. Barra de garantías bajo Opiniones

- [x] 2.1 Crear la barra `.trust-marquee` con las 4 garantías duplicadas y animación ping-pong entre `#opiniones` y `#proceso`, verificando que ningún texto se recorta en render móvil de 390px
- [x] 2.2 Quitar el `.trust-strip` estático sobre `#contacto` y verificar que Contacto muestra directo sus datos, que la barra se lee en ambos temas y que `openspec validate marquesinas-confianza-servicios` pasa en válido
