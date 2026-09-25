## 2026-09-25 — Umbral sticky medido

### Arreglado

- Media de altura de 800px a 600px (card real 493px, medida con Chromium): a 1366×753 el sticky vuelve y la card se ve entera; bajo 600px pasa a flujo.
- `?v=33` ×8 + generador + minificado.

## 2026-09-25 — Aside sin scroll interno

### Arreglado

- Fuera `max-height`/`overflow` del aside: con viewport bajo (≤800px de alto) la card pasa a flujo completo, siempre entera; en alto sigue sticky con `top: 88px`.
- `?v=32` ×8 + generador + minificado.

## 2026-09-25 — Aside sticky responsive

### Arreglado

- `.svc-aside` con `top: 88px` + `max-height: calc(100vh - 112px)` y scroll interno (`overscroll-behavior: contain`): nunca se corta en laptop 13"; móvil neutralizado (estática, sin altura máxima).
- `?v=31` ×8 + generador + minificado.

## 2026-09-25 — Restauración de fichas y casos

### Arreglado

- El generador tenía plantilla vieja: cada corrida borraba el contenido enriquecido de fichas/casos (Ficha, Prueba real, Cómo lo hacemos, QA, FAQs extra, héroes con foto). Restaurado desde `ab6b559` y reaplicados badges de pago + `?v=30` con sed, sin regenerar. Regla: no correr `build_pages.py` hasta sincronizar su plantilla (solo conserva el fix de `srcset`).
- `?v=30` ×8 + minificado.

## 2026-09-25 — Fondos de héroe en casos

### Arreglado

- (Revertido: las fotos ya existían inline; ver entrada de restauración.)
- `?v=30` ×8 + generador + minificado.

## 2026-09-25 — Logos y fondos rotos en subpáginas

### Arreglado

- Generador adapta `srcset`, incluyendo entradas tras la coma (conservado).
- (Clases de héroe revertidas: los héroes ya traían foto inline; ver entrada de restauración).

## 2026-09-25 — Logos de pago Yape/Plin + paymentAccepted

### Agregado

- Badges con logo oficial (AVIF local, 19.6 KB total) + texto en footer, Planes y banda de garantías; `alt` limpio y dimensiones fijas, sin CLS.
- `"paymentAccepted": ["Yape", "Plin", "Transferencia bancaria"]` en el schema y `priceRange` corregido a `"S/ 149 - S/ 2,990"` (fuera precios viejos).
- `?v=28` ×8 + generador + minificado.

## 2026-09-24 — Banner atenuado e inerte con drawer abierto

### Arreglado

- Con la hamburguesa abierta el banner se oscurece (`brightness(0.4)`, como el velo) y sus botones dejan de responder; al cerrar vuelve solo. Sin JS, con `:has` como el logo atenuado.
- `?v=27` ×8 + generador + minificado.

## 2026-09-24 — Banner de cookies detrás del drawer

### Arreglado

- `.consent-banner` a `z-index: 999`: el drawer (1000) y la hamburguesa/X (1001) quedan por encima en móvil; el banner sigue sobre dial, to-top y velo (empate a 999 ganado por orden DOM).
- `?v=26` ×8 + generador + minificado.

## 2026-09-24 — Fuera conectores de timeline en fichas

### Quitado

- Riel y segmentos en `.svc-steps` y
  `.qa-check` (más su aire extra): vuelven
  a lista limpia. Proceso intacto.
- `?v=25` ×8 + generador + minificado.

## 2026-09-24 — Timeline por segmentos (timeline-fichas rev)

### Arreglado

- Conectores por ítem solo en huecos
  (nunca atraviesan insignias/iconos),
  centrados y con oscuro. Viajan con el
  `li` en hover/active.
- `?v=24` ×8 + generador + minificado.

## 2026-09-24 — Timeline en pasos y QA (timeline-fichas)

### Cambiado

- Riel vertical + aire en `.svc-steps` y
  `.qa-check`, espejo de Proceso, con modo
  oscuro. Spy `.active` intacto.
- `?v=23` ×8 + generador + minificado.

## 2026-09-24 — Spy secuencial sin saltos (spy-secuencial-movil)

### Arreglado

- Pasos y QA ya no saltan de 1 a 4: el
  ganador es el más cercano al centro,
  no el último del lote. Ambos spies.
- `?v=22` ×8 + generador + minificado.

## 2026-09-24 — Fuera la mini-barra (quitar-buybar-movil)

### Quitado

- `.buybar` eliminada: markup ×3, CSS,
  observer y transición del dial. Solo
  queda la card fija. Simple y sin bordes.
- `?v=21` ×8 + generador + minificado.

## 2026-09-24 — Barra afinada: slim + flotantes quietos

### Arreglado

- Barra ~52px (era ~64): menos padding y type.
- Flecha ↑ intacta (libra por geometría);
  dial WA se oculta con barra visible y
  vuelve al esconderse. Cero choques.
- Spec hibrido actualizado en el change.

## 2026-09-24 — Híbrido Airbnb móvil (hibrido-airbnb-movil)

### Cambiado

- Card full quieta tras Prueba + mini-barra
  post-card (precio + CTA) por observers:
  aparece tras la card, se retira al final,
  flotantes libres. Sin heurísticas scroll-Y.
- `?v=20` ×8 + generador + minificado.

## 2026-09-24 — Seguidora tras Prueba (seguidora-tras-prueba)

### Cambiado

- Móvil: card compacta (~154px) tras Prueba
  con sticky (slot `order` 5/6, sin markup).
  Intro libre arriba; se suelta sola.
- `?v=19` ×8 + generador + minificado.

## 2026-09-24 — Card contenida en tablet (card-tablet-compacta)

### Cambiado

- Aside móvil con `max-width: 440px` +
  centrado: ya no domina en tablet. En
  móvil chico sigue a una columna.
- `?v=18` ×8 + generador + minificado.

## 2026-09-24 — Card móvil paridad Planes (card-paridad-planes)

### Cambiado

- Card móvil con métricas de la destacada:
  padding 38/30, banda de precio con bordes,
  lista ritmo pricing-features y CTA full
  radius 14 (no pill). Solo media 992px.
- `?v=17` ×8 + generador + minificado.

## 2026-09-24 — Card incrustada entre QA y FAQ (embed-card-precio-movil)

### Cambiado

- Móvil: card completa fija entre rigor y
  FAQ vía `display: contents` + `order`
  (CSS puro, sin markup). Cero flotantes.
- `?v=16` ×8 + generador + minificado.

## 2026-09-24 — Card compacta sticky en móvil (sticky-compacto-movil)

### Cambiado

- Adiós barra fixed: card compacta en flujo
  tras la intro con sticky (precio + CTA),
  se suelta sola antes de relacionados.
  Zona inferior libre para ↑ y WhatsApp.
- Retirado `buybar-*` de `main.js` (nadie
  más lo usaba). Desktop intacto.
- `?v=15` ×8 + generador + minificado.

## 2026-09-24 — Fix barra móvil gigante (fix-mini-barra-movil)

### Arreglado

- La barra tapaba la pantalla: heredaba
  `top: 110px` del sticky + `bottom: 10px` del
  fixed y se estiraba. `top: auto` (1 línea).
  Barra ≤92px, smart-hide y desktop intactos.
- `?v=14` ×8 + generador + minificado.

## 2026-09-24 — Copy de mini-listas del aside

### Cambiado

- Presencia: "SEO y GEO profesional incluido".
- Tienda: "Pagos por Yape, Plin y WhatsApp".
- IA: "Carga masiva con IA". Solo copy visible,
  sin tocar schemas ni headings (SEO intacto).

## 2026-09-24 — Sticky real del aside (aside-sticky-servicios)

### Arreglado

- El aside no seguía el scroll: `overflow-x:
  hidden` en `html`/`body` mataba todo sticky.
  Cascada `hidden` + `clip`: recorta igual las
  marquesinas y revive el sticky existente.
- `?v=13` ×8 + generador + minificado.

## 2026-09-24 — Aside espejo de Planes + mini-barra (ficha-compra)

### Cambiado

- Aside de las 3 fichas con h3 + mini-lista y
  hover lift, espejo de la destacada (navy, AA).
- Barra móvil mini (~56px): precio + CTA, sin
  h3/mini/badge/nota; conserva smart-hide.
- `?v=12` ×8 + generador + minificado.

## 2026-09-24 — Aside navy + barra móvil inteligente

### Cambiado

- Aside con look de card destacada (navy, badge
  cyan, CTA cyan) como en Planes, claro/oscuro.
- Móvil: la barra se esconde al bajar (vuelve al
  subir) y se retira en relacionados/footer.
  Desktop sticky ya moría solo: intacto.
- `?v=11` ×8 + generador. JSON válido.

## 2026-09-24 — Fix títulos fichas + spy + barra compra móvil

### Cambiado

- Títulos huérfanos (fichas) reciben `.reveal`
  antes del observer: ya no quedan ocultos.
- `fichas()` movido antes del spy: pasos y QA
  sí se iluminan en scroll/mouse.
- Aside en móvil: barra fija compacta
  (precio+CTA) que aparece tras 500px de scroll.
- `?v=10` ×8 + generador.

## 2026-09-24 — Fichas: reveal en h2, spy en pasos/QA, iconos QA

### Cambiado

- Word-reveal extendido a `.svc-h2` de fichas.
- Pasos con transición suave + spy `.active`
  (espejo Proceso, solo sin hover).
- QA sin clics: 14 iconos Lucide narrativos
  (zap, lupa, rayo...) con lift en hover/`.active`;
  fuera emoji 😊 (lo representa el icono smile).
- `?v=9` ×8 + generador. JSON válido.

## 2026-09-24 — Fichas interactivas (pasos, QA, contadores)

### Cambiado

- `main.js?v=8` + `styles.min.css?v=8` (×8 y
  generador): "Cómo lo hacemos" con pasos
  numerados (hover como Proceso); checklist QA
  clicable con teclado (role checkbox); contadores
  2000 y 8 animados (cifras reales). Clases por JS
  según encabezado: HTML casi intacto.

## 2026-09-24 — Fichas con prueba, proceso, fit y QA

### Cambiado

- 4 bloques nuevos en las 3 fichas (lenguaje
  general, sin centrar en Chávez): Prueba real
  (enlace al caso), Cómo lo hacemos, ¿Es para ti?
  y checklist "Nos tomamos en serio..." con visto
  bueno. Solo clases existentes, JSON válido.
  Generador no replicado (ya diverge): anotado.

## 2026-09-24 — Spy de comillas en opiniones (solo móvil)

### Cambiado

- `main.js?v=7`: `opinionSpy` espejo de Proceso
  (centro del viewport → `.active`, solo sin
  hover y sin `reduced-motion`).
- `styles.min.css?v=7`: `.opinion-card.active
  .opinion-quote` con lift + color (claro/oscuro).
  Transform puro, ?v=7 ×8.

## 2026-09-24 — Fix prueba reveal: acentos cyan acotados

### Cambiado

- Reglas `.section-title span` (×4, claro/oscuro)
  excluyen `.w-mask`/`.w-word`: el cyan queda solo
  en el span de acento original. Revisado: 14/14
  títulos+subtítulos con ancestro reveal (sin
  riesgo de texto oculto), stagger topado en 12,
  `?v=6` ×8, JSON válido.

## 2026-09-24 — PRUEBA: reveal enmascarado por palabra (revertible)

### Cambiado

- Títulos/subtítulos de sección suben por palabra
  desde máscara (stagger 55ms, transform puro).
  Sin JS el texto queda intacto. `?v=6` en 8
  páginas + generador. Si no gusta: revertir este
  commit.

## 2026-09-24 — Google Analytics con consentimiento (G-PFC4CHMJT4)

### Cambiado

- `assets/js/main.js?v=5`: banner de cookies
  inyectado (Aceptar/Rechazar, claro/oscuro); gtag
  se carga solo si acepta, con IP anonimizada.
  Sin elección no hay peticiones a Google.
- Enlace "Cookies" en footer de las 8 páginas
  (reabre y revoca con `ga-disable` inmediato).
- `privacidad.html` (página + generador): sección
  "Analítica y cookies" reescrita.
- `styles.min.css?v=5`. Lógica probada con stub.

## 2026-09-24 — Registro tardío (cierre de documentación)

### Cambiado

- Se documenta lo que quedó sin entrada propia:
  iconos Lucide oficiales (`977ede6`), `llms.txt`
  alineado a contenido real (`9f067d4`) y sync de
  specs + archive del change alineación
  competitiva (`bb92806`). Sin cambios de código
  en este commit, solo registro.

## 2026-09-24 — Anillos pulse componibles (PageSpeed desktop)

### Cambiado

- `assets/css/styles.css` (+ `styles.min.css?v=4`
  en 8 páginas y generador): `pulse` y `waPulse`
  (box-shadow animado, no componible) → `ringPulse`
  y `dialRing` con transform+opacity en `::after`.
  Efecto visual idéntico, cero repaint por frame.

## 2026-09-23 — Fix reflow forzado en scroll (PageSpeed)

### Cambiado

- `assets/js/main.js`: una sola lectura de scrollY
  por frame y solo escrituras después (adiós 119ms
  de reflow + 1 long task). `main.js?v=4` en las 8
  páginas + `tools/build_pages.py`. Lógica
  verificada con stub.

## 2026-09-23 — Hover con lift en iconos de servicios y opiniones

### Cambiado

- `assets/css/styles.css` (+ `styles.min.css`
  regenerado): `.service-card:hover .service-icon`
  se alza 6px y pasa a sólido (azul/blanco en claro,
  blanco/navy en oscuro); `.opinion-quote` suma
  lift de 4px a su cambio de color existente.
  `prefers-reduced-motion` global lo apaga.

## 2026-09-23 — Iconos narrativos en cards de servicios

### Cambiado

- `index.html`: ventana → lupa sobre página
  (Presencia, te encuentran), carrito → burbuja de
  chat con check (Tienda, vendes por WhatsApp), chip
  → destellos (IA, atiende sola). Mismo trazo 30px,
  sin CSS nuevo, dark-mode intacto.

## 2026-09-23 — Alineación competitiva punto 5: ficha de proyecto en casos

### Cambiado

- Bloque "Ficha del proyecto" (fecha, tecnología,
  alcance, tiempo — datos reales) en
  `casos/az-consulting.html` (ago 2026, Python +
  HTML/CSS/JS, 1 semana) y
  `casos/novedades-chavez.html` (ago 2026, Bagisto +
  IA, 2000 productos, 2 semanas). Sin métricas
  inventadas. JSON validado.

## 2026-09-23 — Alineación competitiva punto 4: contacto humano + zona

### Cambiado

- Contacto en `index.html`: "Habla con Juan ·
  Respuesta inmediata" y zona "Paiján, La Libertad ·
  Atención remota a todo el Perú". Calle exacta solo
  en schema (×4, validado). Sin estilos nuevos:
  contraste intacto.

## 2026-09-23 — Alineación competitiva punto 3: 2 FAQs nuevas en home

### Cambiado

- FAQs "¿Puedo administrar mi web o tienda yo mismo?"
  y "¿Mi tienda puede cobrar con tarjeta?" en
  `index.html` (bloque colapsado + schema FAQPage,
  validado). Sin empuje de layout: van en
  `faq-extra-wrap` colapsado por defecto.

## 2026-09-23 — Alineación competitiva punto 2: FAQ tarjeta en ficha Tienda

### Cambiado

- FAQ "¿Puedo cobrar con tarjeta?" en
  `servicios/tienda-online-bagisto.html` (visible +
  schema FAQPage) y en `tools/build_pages.py`: plan
  base Yape/Plin/transferencia, pasarela con tarjeta
  como adicional cotizado. H1, title y precio intactos.

## 2026-09-23 — Alineación competitiva punto 1: FAQ tiempos en ficha Presencia

### Cambiado

- FAQ "¿En cuánto tiempo está lista mi web?" en
  `servicios/presencia-digital.html` (visible + schema
  FAQPage) y en `tools/build_pages.py`. H1, title y
  precio intactos.

## 2026-09-23 — Schema postalCode 13720

### Cambiado

- `postalCode: 13720` en bloque principal + 3 providers
  (verdecito total en Rich Results). Puesto a mano por Juan.

## 2026-09-23 — Schema streetAddress

### Cambiado

- `streetAddress` en el schema (sin `postalCode`: código
  exacto de Paiján no verificado). Locality se mantiene
  Trujillo por estrategia.
- Providers anidados con teléfono, precio, dirección e
  imagen (limpia avisos no críticos).

## 2026-09-23 — Schema image ProfessionalService

### Cambiado

- Campo `image` (og-crecepe.png) en el bloque principal; los
  `provider` anidados quedan como están (ruido de Google).

## 2026-09-23 — Pulido SEO agente externo

### Cambiado

- `build_pages.py` con precios 500/700/900 + OG; AVISO: su
  salida diverge de lo publicado (no correr sin diff limpio).
- Sitemap `lastmod` al 2026-09-23.
- Hero móvil compacto (título + CTAs sin scroll).
- Línea "2 proyectos en línea" → `#casos` (solo móvil;
  actualizar el número al sumar casos).
- Testimonios sin estrellas (textos intactos; CSS
  `.opinion-stars` conservado reversible).

### Excluido a propósito

- Schema Review propio (spam) y botón fijo (decisión previa).
  Minificado regenerado y verificado.

## 2026-09-22 — Contacto card sólida sin badges

### Cambiado

- Versión de assets `?v=2` → `?v=3` en 8 páginas + generador
  (fuerza CSS/JS nuevo tras tantos cambios).

- Fuera badges de pago de la tarjeta (footer los conserva).
- Fondo sólido (`#fff` claro, `#0F1D3A` oscuro, sin blur) y
  textos adaptados por tema con contraste AA.
  Minificado regenerado y verificado.

## 2026-09-22 — Hero mouse blanco + GEO oscuro

### Cambiado

- `.mouse`/`.wheel` en blanco (ambos temas).
- `.geo-card` en navy con textos claros y `.geo-engines span`
  glass con texto blanco en modo oscuro; claro intacto.
  Minificado regenerado y verificado.

## 2026-09-22 — Servicios móvil limpio + atajos blancos

### Cambiado

- Caption de servicios revertida (`display:none`); foto
  centrada con `align-self:center` (caption de casos intacta).
- `.service-link` y toggles de planes en blanco con hover cyan
  solo en oscuro móvil (en claro las cards son blancas).
  Minificado regenerado y verificado.

## 2026-09-22 — Toggle visible en card destacada

### Cambiado

- `.pricing-card--featured .pricing-toggle` en blanco con hover
  cyan (mismo patrón que proceso), válido en ambos temas.
  Minificado regenerado y verificado.

## 2026-09-22 — Overlays visibles + textos de servicios

### Cambiado

- Overlays de servicios a 2 líneas (beneficio + entrega).
- En móvil el texto aparece como barra-caption al pie de la
  foto (casos 2 líneas, servicios 3); se retira el
  `display:none` del compacto. El hover PC queda intacto por
  CSS (el fallo reportado era caché vieja).
  Minificado regenerado y verificado.

## 2026-09-22 — Paleta oscura fija para precios

### Cambiado

- Bloque `Precios en oscuro`: hermanas sobre `#0F1D3A`,
  títulos/precios blancos, cuerpo `#DCE6FA`, checks cyan;
  badge base legible y popular en cyan también en oscuro.
  Corrige títulos/features invisibles (navy sobre navy).
  Minificado regenerado y verificado.

## 2026-09-22 — Card Tienda en navy + CTAs por plan

### Cambiado

- `.pricing-card--featured` en fondo navy (`--primary`) con texto
  en claro y CTA blanco; badge `⭐ Más Popular` con fondo cyan
  (`--accent-light`). Ajuste para modo oscuro incluido.
- CTAs con nombre de plan: Consultar Presencia / Tienda /
  Automatización (icono WhatsApp y `wa.me` intactos).
- Fix: título visible con doble clase (la regla base lo pisaba)
  y fondo oscuro explícito `#16294F` en modo oscuro.
  Minificado regenerado y verificado.

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
