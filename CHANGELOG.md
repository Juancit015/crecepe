# Registro de cambios — CrecePE

## 2026-09-16 — Subpáginas de servicio, casos y legales

### Agregado

- 3 páginas de servicio con SEO propio (`/servicios/`): Presencia Digital,
  Tienda Online Bagisto y Automatización con IA. Cada una con H1
  optimizado, qué incluye, FAQ propio con schema, aside de precio con CTA
  a WhatsApp, breadcrumbs con schema y relacionados.
- 2 páginas de caso (`/casos/`): AZ Consulting y Novedades Chavez con
  punto de partida, trabajo realizado, resultado y enlace al sitio en vivo.
- Páginas legales: `/privacidad.html` (Ley 29733) y `/terminos.html`
  (alcance, pagos, plazos, propiedad, soporte, honestidad SEO/GEO).
- Enlaces del index actualizados: cards de servicio llevan a su página,
  casos tienen "Ver caso completo", footer con Privacidad y Términos.
- Sitemap con las 8 URLs. Generador `tools/build_pages.py` que reutiliza
  navbar, dial, to-top y footer del index.

## 2026-09-16 — Logo, favicon y expandir FAQ

### Agregado

- Logo oficial `logo-crecepe.avif` (recortado de la imagen generada, 71 KB)
  en navbar y footer: azul en tema claro, blanco en tema oscuro y footer
  (técnica `brightness(0) invert(1)` como AZ Consulting).
- Favicon oficial (`favicon.ico` + PNG 16/32 + apple-touch + iconos PWA
  192/512) con enlaces en el head y manifest actualizado.
- Botón "Ver todas las preguntas" en la mitad del FAQ que expande o
  contrae las 11 preguntas de una vez.

## 2026-09-16 — Compactación móvil de cards

### Cambiado

- Solo en móvil (`max-width: 768px`, desktop intacto): secciones con menos
  aire (48px), fotos de servicios a 140px, previews de casos a 150px,
  cards de planes/proceso/opiniones/GEO/FAQ con menos padding y texto
  ligeramente menor. Menos scroll, misma información.

## 2026-09-16 — FAQ long-tail local

### Agregado

- 5 preguntas long-tail en el FAQ visible, el schema FAQPage y `llms.txt`:
  precio web en Trujillo, vender online con tienda física, invisibilidad
  ante ChatGPT/Gemini, Google Maps para bodegas/restaurantes y
  marketplace vs. tienda propia.
- El FAQ crece de 6 a 11 preguntas para captar búsquedas locales con
  intención de compra.

## 2026-09-15 — Fotografías del sitio

### Agregado

- Fotos en las tres cards de servicios (web, tienda e IA) con texto
  alternativo descriptivo.
- Fondo fotográfico nocturno de Trujillo en la sección SEO + GEO.
- Fondo fotográfico de empresarios en la sección Opiniones.
- Las 5 imágenes están en AVIF optimizado (~100-270 KB cada una).

## 2026-09-14 — Sección Opiniones

### Agregado

- Sección Opiniones entre Casos y FAQ, con enlace en el menú: tres testimonios
  de proyectos de AZ Consulting donde participé como colaborador, con foto,
  cargo, empresa y 5 estrellas, más datos estructurados Review.
- Fotos de perfil en AVIF optimizado (~3 KB cada una).

## 2026-09-14 — Hero optimizado

### Cambiado

- Titular principal en dos líneas con solo "Google" (colores oficiales) e "IA"
  resaltados.
- Subtítulo más corto, en dos líneas: propuesta de valor directa sin tecnicismos.
- Tarjeta del especialista más compacta, con descripción de una línea.
- Fondo del hero ligeramente más tenue en modo claro para dar contraste al texto.
- Descripción en buscadores sincronizada con el nuevo subtítulo.

## 2026-09-13 — Sitio principal e identidad

### Agregado

- Sitio principal de una página con hero (foto de fondo con zoom lento y tarjeta
  del especialista), barra de especialidades, servicios, bloque SEO + GEO, planes
  con precios de referencia, proceso en 6 pasos, casos reales, FAQ, contacto y
  pie de página.
- Modo oscuro con interruptor en la barra de navegación y recuerdo del tema.
- Dial de contacto en abanico: al pasar el cursor (o tocar) el botón de WhatsApp
  se despliegan Llamar, Email y Agendar.
- Botón flotante para volver arriba.
- Palabra "Google" del titular con sus colores oficiales.
- Presencia en buscadores y sistemas de IA: mapa del sitio, instrucciones para
  IAs y datos estructurados de servicios, preguntas frecuentes y contacto.
- Esta documentación (`README.md` y `CHANGELOG.md`).

### Cambiado

- Paleta de acento de verde a azul eléctrico con detalles en cian.
- Textos resaltados y botones a color sólido.
- Botones de la tarjeta de contacto a un tamaño más compacto.

### Corregido

- El abanico de contacto se mantiene abierto al mover el cursor del botón de
  WhatsApp hacia Llamar, Email o Agendar (ya no se cierra al cruzar el espacio
  entre botones).
- El botón volver-arriba se desplaza con animación suave al abrirse y cerrarse
  el abanico.
