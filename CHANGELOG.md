## 2026-09-22 — Pricing-cards estilo casos + tiers + CTA WhatsApp

### Cambiado

- Etiquetas de tier con `.pricing-badge` existente: Starter
  (Presencia), Más popular (Tienda) y Enterprise
  (Automatización); Tienda como `.pricing-card--featured`
  (borde + elevación, sin escala).
- CTAs unificados a `Consultar plan` con icono WhatsApp SVG
  inline + `aria-label` por plan; links `wa.me` con prefill
  intactos. Minificado regenerado y verificado.

## 2026-09-22 — Drawer móvil con X única a la izquierda

### Cambiado

- Con el drawer abierto, `.nav-toggle` queda oculto
  (`body.menu-open`, `visibility:hidden` para conservar el
  layout del header): solo se ve la X interna del drawer.
- `main.js` alterna `menu-open` en `body` al abrir/cerrar
  (todos los cierres pasan por `closeMenu`). Minificado
  regenerado y verificado.

## 2026-09-22 — Fix doble descarga hero en móvil

### Cambiado

- `.hero-photo-bg` usa `hero-crecepe-mobile.avif` bajo
  `@media (max-width: 768px)` vía `background-image` (conserva
  size/position/repeat). Antes el preload traía la móvil pero
  el CSS pedía la de escritorio: ~63 KB de más por visita
  móvil. Minificado regenerado y verificado.

## 2026-09-22 — Revisión de optimización externa (5 fixes)

### Cambiado

- CSS de vuelta a bloqueante (con `?v=2`): el preload
  async arriesgaba FOUC real por ahorro solo de laboratorio.
- `vercel.json` sin headers de caché: config muerta (el deploy
  es GitHub Pages); se repone en 1 minuto si se migra a Vercel.
- `?v=2` extendido a las 8 páginas (CSS+JS) y a
  `build_pages.py` para futuras regeneraciones.
- `srcset` 300w completado en tienda e IA
  (`servicios-tienda/ia-300.avif`, ~5 KB c/u).
- Keyframes `gradientRotate` muertos eliminados; minificado
  regenerado con clean-css.

## 2026-09-22 — Optimización PageSpeed (agente externo, auditado)

### Cambiado

- Imágenes responsive nuevas: `servicios-web-300.avif`,
  `juan-david-100/200.webp`, `hero-crecepe-mobile.avif` con
  `srcset`/`sizes` e `imagesrcset` en el preload del hero.
- CSS con `preload` no bloqueante + `?v=2` en CSS/JS del index
  para invalidar caché.
- `will-change: transform` en animaciones, borde del CEO con
  `conic-gradient` + `borderSpin` (compositable) en vez de
  `gradientRotate`, `heroZoom` off en táctil.
- JS: `onScroll` inicial por rAF y doble rAF en FAQ en vez de
  `offsetHeight` (sintaxis validada).
- `vercel.json` con headers de caché (NOTA: sin efecto real,
  el deploy es GitHub Pages, no Vercel).
- `styles.min.css` regenerado con minificador regex (57.3 KB):
  integridad verificada (llaves, reglas clave, `content`).

### Observaciones de auditoría

- El CSS no bloqueante contradice la decisión previa (se
  mantuvo bloqueante para evitar FOUC): vigilar destello sin
  estilos en conexiones lentas.
- `?v=2` solo en `index.html`; subpáginas y `build_pages.py`
  siguen sin versionar (inconsistente en futuras
  regeneraciones).
- `srcset` 300w solo en servicios-web; tienda e IA pendientes.
- Keyframes `gradientRotate` quedaron muertos en `styles.css`.

## 2026-09-22 — Fondos táctiles sin zoom ni saltos

### Cambiado

- Parallax solo en desktop: en táctil los fondos hacen scroll
  normal (`hover: none` + respaldo iOS desactivado), sin zoom
  de golpe ni reacomodos.
- Recortes verticales dedicados en táctil (GEO, Opiniones,
  Proceso y Contacto, 8-22 KB) con `!important` para que el
  swap aplique de verdad; encuadres revisados uno por uno.
- Specs sincronizadas (`parallax-fondos`, `drawer-velo`,
  `ux-movil-compacto`; changes archivados `2026-09-22-*`).

## 2026-09-22 — Recortes verticales de fondos para móvil

### Cambiado

- Nuevos `geo/opiniones/proceso-fondo-movil.avif` (recortes
  600px, 8-22 KB): en táctil los fondos ya no se ven con zoom,
  solo se sustituye la imagen manteniendo velos y encuadre
  revisado uno por uno. Desktop sigue con los panoramas.

## 2026-09-22 — Drawer más ancho y anclas al inicio de sección

### Cambiado

- Drawer móvil a `min(69vw, 390px)` (+15%).
- `scroll-margin-top: 76px` en secciones solo móvil: al navegar
  desde la hamburguesa se aterriza justo al inicio de la sección,
  sin asomar la anterior ni tapar el título. Desktop intacto.
- Foto de cards revertida a 118px fijos (el estirado se veía muy
  alto); el hueco bajo la foto queda pendiente de nueva idea.

## 2026-09-22 — LCP móvil: logo con prioridad y variante 500px

### Cambiado

- El logo del navbar (elemento LCP en móvil según PageSpeed)
  lleva `fetchpriority="high"` en las 8 páginas; el del footer
  no, para no desperdiciar la prioridad.
- Nueva variante `logo-crecepe-500.avif` (7.7 KB, RMSE 0.006):
  con DPR ×2 el navegador pedía el logo de 1928px porque el
  de 400px no alcanzaba; ahora elige el de 500px.

## 2026-09-22 — Imágenes responsive, fonts async y scroll con rAF

### Cambiado

- Variantes angostas AVIF (`servicios-*-700`, `logo-400`, RMSE
  < 0.024, −85/−91%) con `srcset`/`sizes` en las 3 cards de
  servicios y los 16 logos: el navegador descarga según el
  viewport en vez del archivo de 1200/1928px.
- CSS de Google Fonts en async (`media="print"` + `onload`,
  con `noscript` de respaldo) en las 8 páginas + generador:
  sale de la ruta crítica de render.
- Scroll handlers (navbar + volver-arriba) unificados en un
  solo listener con throttle por `requestAnimationFrame`.
  El `offsetHeight` del FAQ se conserva a propósito (evita el
  flash de transición al cargar) y el CLS 0.014 del swap de
  fuente se deja como está (umbral de aprobado: 0.1).

## 2026-09-22 — Rendimiento PageSpeed: CSS minificado y encabezados en orden

### Cambiado

- `styles.min.css` generado con clean-css (78.5 KB → 56.1 KB,
  −29%) y referenciado en las 8 páginas + `build_pages.py`.
  El CSS sigue render-blocking a propósito: es necesario sobre
  el pliegue y el async causaría FOUC. Fuentes ya óptimas
  (`display=swap` + preconnect).
- Encabezados en orden secuencial en las 8 páginas: pasos del
  Proceso y títulos del footer pasan de `h4` a `h3` con sus
  selectores CSS renombrados (visual idéntico).
- Imágenes: inventario con la skill image-optimizer — todo el
  contenido ya está en AVIF salvo la OG (PNG obligatorio para
  scrapers) y el retrato en WebP (9 KB); sin conversiones
  pendientes. Caché de GitHub Pages no configurable: se ignora
  ese aviso del reporte.

## 2026-09-22 — Enlaces absolutos en llms.txt (auditoría agéntica)

### Cambiado

- Sección "Páginas del sitio" de `llms.txt` con enlaces Markdown
  absolutos: el auditor de navegación agéntica exigía al menos
  un enlace y el archivo no tenía ninguno. Sin impacto en SEO
  (categoría experimental separada).

## 2026-09-22 — Dominio propio, OG y pulido SEO nacional

### Añadido

- Dominio `crecepe.com` conectado (DNS en DonWeb + `CNAME`,
  HTTPS activo con redirección 301 desde `http` y `www`).
- Imagen OG 1200×630 (`og-crecepe.png`) con tags `og:image`,
  `og:image:alt` y `twitter:image` en las 8 páginas; badge
  Seobility en el footer del index.
- Meta `google-site-verification` para Search Console.
- Ficha del servicio con intro en las 3 páginas de servicios
  (Inversión, Entrega, Recibes, Necesito de ti, Soporte) con
  entradas laterales reutilizando reveal.
- FAQs nuevos alineados a Google Trends PE: hosting + dominio
  con Hostinger (Presencia y Tienda), agencia vs independiente,
  diseño de tiendas online, qué es un chatbot y chatbot en
  WhatsApp (con schema FAQPage 1:1 con lo visible).
- Specs sincronizadas: `proceso-detalle`, `servicios-ficha`,
  `proceso-resaltado` y `ux-movil-compacto` (changes archivados
  `2026-09-22-*`).

### Cambiado

- Canonicals, OG, JSON-LD, sitemap, robots y `llms.txt`
  migrados de `crecepe.pe` a `crecepe.com`.
- Title y H1 nacionales: "Diseño Web y Tiendas Virtuales en
  Perú" + "Diseñamos páginas web exitosas y tiendas virtuales
  para todo el Perú" (Trujillo queda en badge, geo-tags y
  schema para lo local).
- Footer con posicionamiento nacional sin keyword stuffing
  (sin prometer hosting: lo contrata el cliente).
- Titles/descriptions recortados a rango (Presencia, IA y
  casos) y `priceRange` corregido a S/ 500 - S/ 900.
- Móvil: cards de Servicios muestran sus 3 bullets y botón
  "Ver detalle" en blanco con hover cyan (nunca azul oscuro).
- `robots.txt` bloquea `/CHANGELOG.md`.

## 2026-09-22 — Higiene SEO: CHANGELOG fuera de crawlers

### Cambiado

- `robots.txt` bloquea `/CHANGELOG.md`: es un archivo interno sin
  enlaces ni sitemap y no debe aparecer en resultados de búsqueda.

## 2026-09-20 — Tira de garantías con loop continuo real

### Cambiado

- La pista llevaba 2 sets (1830px) y no cubría el viewport en
  mitad del loop: tramo vacío ~14s y pop al reiniciar. Ahora
  lleva 4 grupos (2 mitades idénticas, ~3660px) con loop -50%
  exacto, medido en vivo sin huecos.
- Todos los puntos visibles (fuera asimetría de 9px por ciclo)
  y `flex-shrink: 0` en los spans.

## 2026-09-20 — Proceso: señales separadas y más aire

### Cambiado

- Timeline de Proceso: el scroll-spy solo enciende el punto y el
  hover (solo con mouse) tiñe el título — nunca más doble cyan.
  En táctil el brillo sigue al scroll sin interferencias.
- Más aire entre número y texto (gutter de 72px, 14px de
  respiro) con línea realineada al centro de los puntos.

## 2026-09-20 — Parallax en fondos y Proceso como timeline

### Añadido

- Efecto reveal tipo parallax en las imágenes de fondo (GEO,
  Opiniones, Proceso y page-heros de servicios, casos, privacidad
  y términos): la foto queda fija y el contenido la tapa al bajar
  y la descubre al subir. Excluidos hero principal y cards.
  Respeta `prefers-reduced-motion` y trae respaldo JS para iOS.
- Spec nueva `parallax-fondos` sincronizada a los specs
  principales (change archivado `2026-09-20-parallax-fondo-reveal`).

### Cambiado

- Sección Proceso: grid de 6 cards reemplazado por timeline
  vertical con punto numerado, mismo contenido. Hover con glow,
  paso activo al hacer scroll (scroll-spy que se suelta al salir
  de la franja central) y más aire entre número y texto.

## 2026-09-20 — Botón de tema a juego y fotos nuevas

### Cambiado

- Botón de tema blanco sobre el hero y azul con scroll en modo
  claro, en las 8 páginas.
- Nueva foto de fondo en Proceso (`proceso-fondo.avif`) y reemplazo
  de la del Diferenciador (`geo-fondo.avif`, más liviana) con velo
  más oscuro para legibilidad (aporte Gemini).

## 2026-09-20 — Menú móvil drawer lateral

### Cambiado

- Menú móvil como drawer lateral derecho marino (X, 7 links con
  icono + divisores, CTA y tema), con velo con blur, scroll de fondo
  bloqueado y cierre al tocar fuera, Escape o redimensionar.
- Fixes: links blancos sobre el drawer, navbar sin blur con el menú
  abierto (aplastaba el panel al hacer scroll) y hamburguesa con
  borde a la derecha.

## 2026-09-20 — Hero y Opiniones más visibles

### Cambiado

- H1 del hero sin coma y subtítulo extendido con cierre
  "cada día sin pausa".
- Descripción del hero y subtítulo de Opiniones con más tamaño,
  peso y brillo en ambos temas.

## 2026-09-20 — Opiniones, héroes legales y botones de casos

### Cambiado

- Opiniones alineadas a los servicios (web, tienda 24/7, IA) y
  Carlos Rivera renombrado a Dayron Chavez, fundador de Novedades Chávez.
- Héroes de Términos y Privacidad con texto blanco sobre foto,
  iguales a las páginas de servicios (`has-bg`).
- Hover de botones de casos sin salto de línea en desktop
  (fuera el `gap` animado que empujaba al segundo botón).

## 2026-09-19 — Overlays en cards

### Cambiado

- Overlays descriptivos al hover en fotos de casos (2 líneas) y de
  servicios (1 línea), con velo ligero; botones fijos debajo.
- Barra superior degradada de las cards de servicios eliminada.

## 2026-09-19 — SEO de contenido

### Corregido

- Título recortado bajo 580px, palabras del H1 sembradas en el cuerpo y
  headings/anchors duplicados diferenciados (h3 "Plan…", CTAs y casos
  con nombre propio).

## 2026-09-19 — Precios nuevos, planes iguales y fotos en casos

### Cambiado

- Precios: Presencia S/ 500, Tienda Virtual S/ 700, Automatización S/ 900
  en cards, FAQs, metadatos, schema, prefills y `llms.txt`.
- Planes sin jerarquía: 3 cards iguales con "Ideal si..." en la
  descripción y borde azul solo al hover con transición suave.
- Hover cian en la navbar en modo oscuro (antes marino invisible).
- Fotos reales en las 2 cards de casos (equipo y empacando pedidos),
  sin píldoras de URL encima.

## 2026-09-18 — Mensaje de beneficios, fotos de casos y detalles

### Agregado

- Fotos de fondo en las 2 páginas de casos (equipo en oficina y vendedora
  con pedidos) con texto del héroe en blanco.

### Cambiado

- Hero enfocado en beneficios: "Tu negocio vendiendo solo, todos los
  días", con visibilidad como mecanismo; meta y `llms.txt` sincronizados.
- Copy visible en lenguaje de cliente ("Tienda Virtual + IA", beneficios
  en vez de Bagisto/Schema/LLMs); tecnicismos reservados a schema y
  `llms.txt`.
- Diferenciador explicado como cambio de comportamiento (preguntar vs
  buscar listas), sin marcas fuera de las píldoras.
- Botón de tema al final de la navbar como icono plano sin círculo.
- Contacto con pastillas de marca (WhatsApp verde, email y reloj en
  blanco) y botón Agendar en verde.
- Enlaces de casos como botones táctiles separados (primario + borde).

## 2026-09-18 — GEO legible, nav adaptativa y fotos de servicios

### Agregado

- Fotos de fondo propias en las 3 páginas de servicios (emprendedor con
  laptop, vendedora con celular y negociante con IA) con texto del héroe
  en blanco legible sobre la foto.

### Cambiado

- Sección Diferenciador: cards en blanco sólido con texto marino (borde
  cyan en GEO) y píldoras de plataformas blancas con marca (Google,
  ChatGPT, Gemini, Perplexity, Claude, AI Overviews).
- Navbar adaptativa en modo claro: texto blanco sobre la foto al inicio y
  azul al aparecer el fondo blanco con scroll; logo y hamburguesa a juego.
- FAQ extra con expansión y colapso animados: al contraer, el botón queda
  a la vista sin saltar a Contacto.

## 2026-09-18 — Badges cyan y FAQ progresivo

### Cambiado

- Nombres de sección con borde cyan uniforme en modo claro y oscuro
  (antes solo el badge Diferenciador lo tenía en claro).
- FAQ con despliegue progresivo: muestra 6 preguntas y el botón "Ver todas
  las preguntas" revela las 5 restantes; el botón viaja al final de la
  lista y alterna a "Ver menos preguntas" para ocultarlas. Cada pregunta
  conserva su acordeón individual.

## 2026-09-17 — Fondos visibles, hero vidrio y comillas en oscuro

### Cambiado

- Fondos fotográficos del hero, SEO + GEO y Opiniones más visibles (velo más
  ligero) en modo claro y oscuro.
- Textos del hero y SEO + GEO en modo claro ahora en blanco legible sobre la
  foto, con sombra sutil también en modo oscuro.
- Botones del hero (Agendar diagnóstico y Ver servicios) con estilo vidrio:
  en claro ambos iguales, en oscuro Agendar en cian y Ver servicios
  blanquecino, con hover de relleno y elevación.

### Corregido

- Comillas de Opiniones invisibles al hover en modo oscuro (blanco sobre
  blanco): ahora pastilla blanca con comillas azules; modo claro intacto.

## 2026-09-16 — Fix: rutas relativas en páginas legales

### Corregido

- `privacidad.html` y `terminos.html` (en raíz) cargaban el CSS/JS/logo
  con `../assets/`, que apuntaba fuera del proyecto: se veían sin estilos.
  El generador ahora calcula el prefijo según la profundidad de cada
  página (`''` en raíz, `../` un nivel abajo).
- Enlaces a Privacidad/Términos en el footer de las subpáginas resolvían
  a `/servicios/privacidad.html` (404); ahora usan el prefijo correcto.

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
