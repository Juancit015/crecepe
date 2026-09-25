#!/usr/bin/env python3
"""Genera las subpaginas de CrecePE reutilizando navbar, dial, to-top y footer del index.
AVISO: las páginas publicadas recibieron ediciones manuales (fichas, FAQs extra,
copy) que el generador NO reproduce. No correr sin verificar `git diff` antes."""
import re, json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
index = open(os.path.join(ROOT, 'index.html')).read()

# ---- Componentes compartidos extraidos del index ----
theme_script = re.search(r'    <!-- Aplica el tema guardado.*?</script>\n', index, re.S).group(0)
dial_raw = re.search(r'    <!-- =+ -->\n    <!-- DIAL DE CONTACTO ABANICO -->.*?</div>\n(?=\n    <!-- =+ -->\n    <!-- VOLVER ARRIBA)', index, re.S).group(0)
totop = re.search(r'    <!-- =+ -->\n    <!-- VOLVER ARRIBA -->.*?</button>\n', index, re.S).group(0)
navbar_raw = re.search(r'    <nav class="navbar".*?</nav>\n', index, re.S).group(0)
footer_raw = re.search(r'    <!-- =+ -->\n    <!-- FOOTER -->.*?</footer>\n', index, re.S).group(0)

def adapt(prefix):
    """Devuelve (navbar, footer, dial) con rutas correctas segun la profundidad.
    prefix: '' para paginas en raiz, '../' para un nivel abajo."""
    nav = navbar_raw.replace('href="#', 'href="{p}index.html#'.format(p=prefix))
    nav = nav.replace('src="assets/', 'src="{p}assets/'.format(p=prefix))
    nav = nav.replace('srcset="assets/', 'srcset="{p}assets/'.format(p=prefix))
    nav = nav.replace(', assets/', ', {p}assets/'.format(p=prefix))
    foot = footer_raw.replace('href="#', 'href="{p}index.html#'.format(p=prefix))
    foot = foot.replace('src="assets/', 'src="{p}assets/'.format(p=prefix))
    foot = foot.replace('srcset="assets/', 'srcset="{p}assets/'.format(p=prefix))
    foot = foot.replace(', assets/', ', {p}assets/'.format(p=prefix))
    # Footer: servicios apuntan a las paginas dedicadas
    foot = foot.replace('href="{p}index.html#servicios">Presencia Digital'.format(p=prefix), 'href="{p}servicios/presencia-digital.html">Presencia Digital'.format(p=prefix))
    foot = foot.replace('href="{p}index.html#servicios">Tienda Bagisto + IA'.format(p=prefix), 'href="{p}servicios/tienda-online-bagisto.html">Tienda Bagisto + IA'.format(p=prefix))
    foot = foot.replace('href="{p}index.html#servicios">Automatización con IA'.format(p=prefix), 'href="{p}servicios/automatizacion-ia.html">Automatización con IA'.format(p=prefix))
    # Footer: legales con prefijo correcto
    foot = foot.replace('href="privacidad.html"', 'href="{p}privacidad.html"'.format(p=prefix))
    foot = foot.replace('href="terminos.html"', 'href="{p}terminos.html"'.format(p=prefix))
    d = dial_raw.replace('href="#contacto"', 'href="{p}index.html#contacto"'.format(p=prefix))
    return nav, foot, d

HEAD = '''<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>{title}</title>

    <meta name="description" content="{desc}">
    <meta name="robots" content="index,follow">
    <link rel="canonical" href="{canonical}">
    <link rel="alternate" href="{canonical}" hreflang="es">
    <link rel="alternate" href="{canonical}" hreflang="x-default">
    <meta name="geo.region" content="PE-LAL">
    <meta name="geo.placename" content="Trujillo">
    <meta name="geo.position" content="-8.1116;-79.0287">

    <!-- Open Graph -->
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{desc}">
    <meta property="og:url" content="{canonical}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_PE">
    <meta property="og:image" content="https://crecepe.com/assets/img/og-crecepe.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="CrecePE - Webs y tiendas virtuales con IA en Perú">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="https://crecepe.com/assets/img/og-crecepe.png">
    <meta name="theme-color" content="#0B2FD4">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
    <noscript><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap" rel="stylesheet"></noscript>

    <!-- CSS -->
    <link rel="stylesheet" href="{p}assets/css/styles.min.css?v=30">

    <!-- PWA -->
    <link rel="manifest" href="{p}manifest.json">

    <!-- Favicon -->
    <link rel="icon" href="{p}assets/img/favicon/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="{p}assets/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="{p}assets/img/favicon/favicon-16x16.png">
    <link rel="apple-touch-icon" href="{p}assets/img/favicon/apple-touch-icon.png">

{schemas}
</head>

<body class="preload">

{theme}

{dial}

{totop}

{navbar}

    <main>

{content}

    </main>

{footer}

    <script src="{p}assets/js/main.js?v=30" defer></script>

</body>

</html>
'''

def schema_json(d):
    return '    <script type="application/ld+json">\n' + json.dumps(d, ensure_ascii=False, indent=6) + '\n    </script>\n'

def crumbs(items):
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": i+1, "name": n, "item": u}
            for i, (n, u) in enumerate(items)
        ]
    }

def faq_schema(faqs):
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": q,
             "acceptedAnswer": {"@type": "Answer", "text": a}}
            for q, a in faqs
        ]
    }

def service_schema(name, desc, price, url):
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": desc,
        "url": url,
        "provider": {"@type": "ProfessionalService", "name": "CrecePE", "url": "https://crecepe.com/"},
        "areaServed": "Perú",
        "offers": {"@type": "Offer", "price": price, "priceCurrency": "PEN"}
    }

def faq_html(faqs):
    items = []
    for q, a in faqs:
        items.append(f'''                <div class="faq-item reveal">
                    <button class="faq-question" aria-expanded="false">
                        {q}
                        <span class="faq-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
                    </button>
                    <div class="faq-answer">
                        <p>{a}</p>
                    </div>
                </div>''')
    return '\n\n'.join(items)

def bullets(items):
    svg = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>'
    return '\n'.join(f'                        <li>{svg}{i}</li>' for i in items)

def service_page(badge, title_hl, sub, desc_long, incluye, price, weeks, wa_text, related, faqs, name, url):
    rel_cards = []
    for href, rtitle, rdesc in related:
        rel_cards.append(f'''                <a href="{href}" class="svc-related-card reveal">
                    <h3>{rtitle}</h3>
                    <p>{rdesc}</p>
                    <span class="svc-related-link">Ver servicio <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                </a>''')
    return f'''    <!-- ===================== -->
    <!-- SERVICIO -->
    <!-- ===================== -->

    <section class="page-hero">
        <div class="container">
            <nav class="breadcrumbs" aria-label="Migajas de pan">
                <a href="../index.html">Inicio</a> <span aria-hidden="true">/</span> <span>{badge}</span>
            </nav>
            <h1>{title_hl}</h1>
            <p class="page-hero-sub">{sub}</p>
        </div>
    </section>

    <section class="page-body">
        <div class="container svc-layout">

            <div class="svc-main">
                <p class="svc-desc">{desc_long}</p>

                <h2 class="svc-h2">Qué incluye</h2>
                <ul class="service-list svc-list">
{bullets(incluye)}
                </ul>

                <h2 class="svc-h2">Preguntas frecuentes</h2>
                <div class="faq-list svc-faq">
{faq_html(faqs)}
                </div>
            </div>

            <aside class="svc-aside reveal">
                <span class="pricing-badge">Desde</span>
                <div class="svc-price">S/ {price}</div>
                <p class="svc-weeks">Entrega en {weeks}</p>
                <a href="https://wa.me/51970771835?text={wa_text}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg svc-wa">Consultar por WhatsApp</a>
                <p class="svc-note">Diagnóstico gratuito de 30 minutos. Sin compromiso.</p>
            </aside>

        </div>
    </section>

    <section class="page-related">
        <div class="container">
            <h2 class="svc-h2">También te puede interesar</h2>
            <div class="svc-related-grid">
{chr(10).join(rel_cards)}
            </div>
        </div>
    </section>
'''

# ============================================================
# CONTENIDO DE LAS 7 PAGINAS
# ============================================================

pages = {}

# ---------- 1. Presencia Digital ----------
faqs_p = [
    ("¿Qué necesito para empezar?", "Solo tu logo (si lo tienes), fotos de tu negocio y la información básica de tus servicios. Si no tienes logo ni textos, te ayudo a crearlos dentro del proyecto."),
    ("¿El dominio y el hosting están incluidos?", "Te asesoro para comprarlos a tu nombre (tú eres el dueño). El costo de dominio (.pe o .com) y hosting básico va por cuenta del cliente, típicamente S/ 100-150 al año."),
    ("¿Puedo editar el contenido después?", "Sí. Recibes una capacitación en video para actualizar textos e imágenes, y el plan de mantenimiento mensual cubre cambios si prefieres delegarlo."),
    ("¿En cuánto tiempo está lista mi web?", "En 2-3 semanas desde que me entregas tu logo, fotos e información. La mitad del plazo depende de ti: si el material llega todo junto, tu web sale en 2 semanas."),
    ("¿Apareceré en Google desde el primer día?", "El sitio sale optimizado y se registra en Search Console, pero Google tarda de 2 a 8 semanas en posicionar un dominio nuevo. El SEO técnico acelera ese proceso; la constancia en reseñas y contenido lo consolida."),
]
pages['servicios/presencia-digital.html'] = dict(
    title="Diseño de Páginas Web en Trujillo y Perú desde S/ 500 | CrecePE",
    desc="Página web profesional, responsive y rápida con SEO + GEO incluidos. Para negocios en Trujillo y todo el Perú. Desde S/ 500.",
    canonical="https://crecepe.com/servicios/presencia-digital.html",
    schemas=[
        service_schema("Presencia Digital Inteligente", "Sitio web profesional de hasta 7 secciones, responsive y rápido, con SEO técnico, GEO base, WhatsApp, Analytics y Search Console.", "500", "https://crecepe.com/servicios/presencia-digital.html"),
        crumbs([("Inicio", "https://crecepe.com/"), ("Presencia Digital", "https://crecepe.com/servicios/presencia-digital.html")]),
        faq_schema(faqs_p),
    ],
    content=service_page(
        "Servicios", 'Presencia Digital <span>Inteligente</span>',
        "Tu primera web profesional: rápida, visible en Google y preparada para que la IA te recomiende.",
        "Para negocios que parten de cero o tienen una web invisible. Un sitio profesional, rápido y preparado para buscadores e IA desde el primer día: tus clientes te encuentran en Google, te contactan por WhatsApp con un toque y los sistemas de IA entienden exactamente qué ofreces y dónde estás.",
        ["Web de hasta 7 secciones, responsive y veloz",
         "SEO técnico + GEO base (llms.txt, Schema.org)",
         "Botón de WhatsApp y formulario de contacto",
         "Google Analytics + Search Console configurados",
         "Capacitación en video para administrar tu sitio",
         "Soporte post-lanzamiento de 30 días"],
        "500", "2-3 semanas",
        "Hola%20CrecePE%2C%20me%20interesa%20el%20plan%20Presencia%20Digital%20para%20mi%20negocio",
        [("tienda-online-bagisto.html", "Tienda Online Bagisto + IA", "Vende 24/7 con catálogo, Yape/Plin y pedidos por WhatsApp."),
         ("automatizacion-ia.html", "Automatización con IA", "Chatbot 24/7 y agentes de IA trabajando para tu negocio.")],
        faqs_p,
        "Presencia Digital Inteligente", "https://crecepe.com/servicios/presencia-digital.html"),
)

# ---------- 2. Tienda Bagisto ----------
faqs_t = [
    ("¿Cómo recibo los pagos de mis clientes?", "Directo a tu Yape, Plin o cuenta bancaria: sin comisiones por venta ni intermediarios. El cliente paga y el dinero llega a ti."),
    ("¿Cómo funcionan los envíos?", "Los pedidos llegan a tu WhatsApp con los datos del cliente. Tú coordinas el envío con Shalom u otro courier, como ya lo hace la tienda Novedades Chavez."),
    ("¿Puedo cargar más de 50 productos?", "Sí. El plan incluye hasta 50 productos (20 cargados con IA). Después puedes cargar más tú mismo con la capacitación incluida, o con el plan de mantenimiento."),
    ("¿Qué necesito para empezar?", "Fotos de tus productos, precios y tu lista de categorías. Si tus fotos o descripciones no están listas, la IA las mejora dentro del proyecto."),
    ("¿Puedo cobrar con tarjeta?", "El plan base cobra con Yape, Plin y transferencia directo a ti, sin comisiones. Si quieres pasarela con tarjeta (MercadoPago u otra), se cotiza como adicional según tu volumen de ventas."),
]
pages['servicios/tienda-online-bagisto.html'] = dict(
    title="Crear Tienda Virtual en Perú desde S/ 700 | CrecePE",
    desc="Diseño de tiendas online que venden solas: catálogo, pagos Yape/Plin, pedidos por WhatsApp y envíos por Shalom. Desde S/ 700, entrega en 4-6 semanas.",
    canonical="https://crecepe.com/servicios/tienda-online-bagisto.html",
    schemas=[
        service_schema("Tienda Online Bagisto + IA", "Tienda e-commerce con Bagisto: catálogo, categorías y colecciones, hasta 50 productos cargados, pagos Yape/Plin, pedidos por WhatsApp y envíos coordinados.", "700", "https://crecepe.com/servicios/tienda-online-bagisto.html"),
        crumbs([("Inicio", "https://crecepe.com/"), ("Tienda Online Bagisto", "https://crecepe.com/servicios/tienda-online-bagisto.html")]),
        faq_schema(faqs_t),
    ],
    content=service_page(
        "Servicios", 'Tienda Online <span>Bagisto + IA</span>',
        "Tu tienda física vendiendo en internet las 24 horas, sin comisiones por venta.",
        "Para tiendas físicas y emprendimientos que quieren vender 24/7. Tu catálogo online con pagos y envíos coordinados, cargado con ayuda de IA: el cliente navega, pide por WhatsApp, paga con Yape o Plin y recibe por Shalom u otro courier. Sin comisiones de marketplace: cada venta es 100% tuya.",
        ["Bagisto: catálogo, categorías y colecciones",
         "Hasta 50 productos cargados (20 con IA)",
         "Pagos Yape / Plin y pedidos por WhatsApp",
         "Envíos coordinados (Shalom u otro courier)",
         "Schema Store + Product para Google e IA",
         "Capacitación en video + soporte 30 días"],
        "700", "4-6 semanas",
        "Hola%20CrecePE%2C%20me%20interesa%20el%20plan%20Tienda%20Online%20Bagisto%20para%20mi%20negocio",
        [("presencia-digital.html", "Presencia Digital Inteligente", "Tu primera web profesional visible en Google desde S/ 500."),
         ("automatizacion-ia.html", "Automatización con IA", "Chatbot 24/7 y carga masiva de productos con agentes.")],
        faqs_t,
        "Tienda Online Bagisto + IA", "https://crecepe.com/servicios/tienda-online-bagisto.html"),
)

# ---------- 3. Automatización IA ----------
faqs_a = [
    ("¿Funciona sobre mi web actual?", "Sí. La automatización se integra sobre Bagisto, WooCommerce o una web a medida. Si tu sitio es muy antiguo, te digo honestamente en el diagnóstico si conviene renovarlo primero."),
    ("¿El chatbot responde como una persona?", "Responde con la información de tu negocio (productos, precios, horarios, envíos) las 24 horas. Cuando una consulta necesita atención humana, te la deriva a tu WhatsApp."),
    ("¿Qué es la carga masiva con agentes de IA?", "Agentes que toman tu lista de productos (Excel, fotos, catálogo viejo) y generan fichas completas con títulos, descripciones y datos estructurados optimizados para Google e IA."),
    ("¿Necesito conocimientos técnicos?", "No. Yo configuro todo y te entrego capacitación en video. El mantenimiento mensual cubre ajustes y mejoras continuas de la IA."),
]
pages['servicios/automatizacion-ia.html'] = dict(
    title="Automatización con IA en Perú desde S/ 900 | CrecePE",
    desc="Chatbot con IA que atiende y vende 24/7 y deriva clientes a tu WhatsApp. Funciona con tu web actual o una hecha a medida. Desde S/ 900.",
    canonical="https://crecepe.com/servicios/automatizacion-ia.html",
    schemas=[
        service_schema("Automatización con IA", "Auditoría SEO + GEO, chatbot de atención y ventas 24/7, carga masiva de productos con agentes de IA y optimización de fichas para Google e IA.", "900", "https://crecepe.com/servicios/automatizacion-ia.html"),
        crumbs([("Inicio", "https://crecepe.com/"), ("Automatización con IA", "https://crecepe.com/servicios/automatizacion-ia.html")]),
        faq_schema(faqs_a),
    ],
    content=service_page(
        "Servicios", 'Automatización <span>con IA</span>',
        "Agentes de IA atendiendo clientes y cargando productos mientras tú duermes.",
        "Para negocios que ya tienen web o tienda y quieren escalar sin contratar más personal. Agentes de IA trabajando para ti las 24 horas: un chatbot que atiende y vende, carga masiva de productos automatizada y una auditoría SEO + GEO que detecta exactamente qué le falta a tu sitio para aparecer en Google y ser recomendado por la IA.",
        ["Auditoría SEO + GEO de tu sitio actual",
         "Chatbot de atención y ventas 24/7",
         "Carga masiva de productos con agentes IA",
         "Optimización de fichas para Google e IA",
         "Funciona sobre Bagisto, WooCommerce o web a medida",
         "Capacitación en video + soporte 30 días"],
        "900", "2-4 semanas",
        "Hola%20CrecePE%2C%20me%20interesa%20el%20plan%20Automatizaci%C3%B3n%20con%20IA%20para%20mi%20negocio",
        [("presencia-digital.html", "Presencia Digital Inteligente", "Tu primera web profesional visible en Google desde S/ 500."),
         ("tienda-online-bagisto.html", "Tienda Online Bagisto + IA", "Vende 24/7 con catálogo, Yape/Plin y pedidos por WhatsApp.")],
        faqs_a,
        "Automatización con IA", "https://crecepe.com/servicios/automatizacion-ia.html"),
)

# ---------- 4. Caso AZ Consulting ----------
pages['casos/az-consulting.html'] = dict(
    title="Caso: AZ Consulting — De página vacía a web corporativa rápida | CrecePE",
    desc="Cómo participé en la transformación de azconsultingperu.com: secciones de servicios y stack tecnológico, carga responsiva y SEO técnico con Schema LocalBusiness + FAQ.",
    canonical="https://crecepe.com/casos/az-consulting.html",
    schemas=[
        crumbs([("Inicio", "https://crecepe.com/"), ("Casos", "https://crecepe.com/index.html#casos"), ("AZ Consulting", "https://crecepe.com/casos/az-consulting.html")]),
    ],
    content='''    <section class="page-hero">
        <div class="container">
            <nav class="breadcrumbs" aria-label="Migajas de pan">
                <a href="../index.html">Inicio</a> <span aria-hidden="true">/</span> <a href="../index.html#casos">Casos</a> <span aria-hidden="true">/</span> <span>AZ Consulting</span>
            </nav>
            <h1>De página vacía a <span>web corporativa rápida</span></h1>
            <p class="page-hero-sub">Colaboración en azconsultingperu.com — consultora de tecnología peruana.</p>
        </div>
    </section>

    <section class="page-body">
        <div class="container case-detail">

            <div class="case-detail-block reveal">
                <h2 class="svc-h2">El punto de partida</h2>
                <p>El sitio partió de una sola página vacía: sin secciones de servicios, sin estructura para buscadores y con carga lenta que espantaba visitas antes de conocer la propuesta.</p>
            </div>

            <div class="case-detail-block reveal">
                <h2 class="svc-h2">Lo que hice</h2>
                <ul class="service-list svc-list">
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>Desarrollé las secciones de servicios y stack tecnológico</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>Implementé la carga responsiva y rápida: imágenes optimizadas y recursos diferidos</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>SEO técnico con Schema LocalBusiness + FAQ</li>
                </ul>
            </div>

            <div class="case-detail-block reveal">
                <h2 class="svc-h2">El resultado</h2>
                <p>Una web corporativa completa, rápida en móvil y desktop, con datos estructurados que le dicen a Google y a los sistemas de IA exactamente quién es AZ Consulting y qué ofrece.</p>
                <div class="case-stack">
                    <span>HTML / CSS / JS</span><span>SEO técnico</span><span>Schema.org</span><span>Rendimiento</span>
                </div>
                <a href="https://azconsultingperu.com/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">Ver sitio en vivo</a>
            </div>

        </div>
    </section>
''',
)

# ---------- 5. Caso Novedades Chavez ----------
pages['casos/novedades-chavez.html'] = dict(
    title="Caso: Novedades Chavez — De tienda invisible a tienda 24/7 | CrecePE",
    desc="Tienda Bagisto construida desde cero: catálogo, colecciones de campaña, envíos por Shalom, pedidos por WhatsApp y carga de productos automatizada con agentes de IA.",
    canonical="https://crecepe.com/casos/novedades-chavez.html",
    schemas=[
        crumbs([("Inicio", "https://crecepe.com/"), ("Casos", "https://crecepe.com/index.html#casos"), ("Novedades Chavez", "https://crecepe.com/casos/novedades-chavez.html")]),
    ],
    content='''    <section class="page-hero">
        <div class="container">
            <nav class="breadcrumbs" aria-label="Migajas de pan">
                <a href="../index.html">Inicio</a> <span aria-hidden="true">/</span> <a href="../index.html#casos">Casos</a> <span aria-hidden="true">/</span> <span>Novedades Chavez</span>
            </nav>
            <h1>De tienda invisible a <span>tienda 24/7</span></h1>
            <p class="page-hero-sub">Proyecto propio desde cero — e-commerce con Bagisto para ventas por catálogo.</p>
        </div>
    </section>

    <section class="page-body">
        <div class="container case-detail">

            <div class="case-detail-block reveal">
                <h2 class="svc-h2">El punto de partida</h2>
                <p>Una tienda con buenos productos pero invisible en internet: sin catálogo online, los pedidos dependían de mostrar fotos por WhatsApp una por una y no había forma de que nuevos clientes la encontraran.</p>
            </div>

            <div class="case-detail-block reveal">
                <h2 class="svc-h2">Lo que construí</h2>
                <ul class="service-list svc-list">
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>Tienda Bagisto completa: catálogo, categorías y colecciones de campaña</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>Pedidos por WhatsApp y envíos coordinados por Shalom</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>Carga de productos automatizada con agentes de IA</li>
                </ul>
            </div>

            <div class="case-detail-block reveal">
                <h2 class="svc-h2">El resultado</h2>
                <p>Una tienda que vende las 24 horas: el cliente navega el catálogo, pide por WhatsApp, paga con Yape o Plin y recibe por Shalom. La carga de productos que antes tomaba días ahora la hacen agentes de IA en minutos.</p>
                <div class="case-stack">
                    <span>Bagisto / Laravel</span><span>Agentes IA</span><span>WhatsApp</span><span>Shalom</span>
                </div>
                <a href="https://novedadeschavez.azconsultingperu.com/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">Ver tienda en vivo</a>
            </div>

        </div>
    </section>
''',
)

# ---------- 6. Privacidad ----------
pages['privacidad.html'] = dict(
    title="Política de Privacidad | CrecePE",
    desc="Política de privacidad de CrecePE: qué datos recopilamos, para qué los usamos y cómo ejercer tus derechos.",
    canonical="https://crecepe.com/privacidad.html",
    schemas=[crumbs([("Inicio", "https://crecepe.com/"), ("Privacidad", "https://crecepe.com/privacidad.html")])],
    content='''    <section class="page-hero">
        <div class="container">
            <nav class="breadcrumbs" aria-label="Migajas de pan">
                <a href="index.html">Inicio</a> <span aria-hidden="true">/</span> <span>Privacidad</span>
            </nav>
            <h1>Política de <span>Privacidad</span></h1>
            <p class="page-hero-sub">Última actualización: setiembre 2026.</p>
        </div>
    </section>

    <section class="page-body">
        <div class="container legal">

            <h2 class="svc-h2">1. Responsable</h2>
            <p>CrecePE, servicio independiente dirigido por Juan David desde Trujillo, La Libertad, Perú. Contacto: <a href="mailto:crecepe@azconsultingperu.com">crecepe@azconsultingperu.com</a> · WhatsApp <a href="https://wa.me/51970771835" target="_blank" rel="noopener noreferrer">+51 970 771 835</a>.</p>

            <h2 class="svc-h2">2. Datos que recopilamos</h2>
            <p>Solo los datos que tú nos das voluntariamente al contactarnos por WhatsApp, correo o formulario: nombre, teléfono, correo electrónico e información sobre tu negocio necesaria para cotizar y ejecutar el servicio.</p>

            <h2 class="svc-h2">3. Uso de los datos</h2>
            <p>Usamos tus datos exclusivamente para: responder tus consultas, preparar cotizaciones, ejecutar los proyectos contratados y darte soporte. No vendemos ni compartimos tus datos con terceros para fines publicitarios.</p>

            <h2 class="svc-h2">4. Analítica y cookies</h2>
            <p>El sitio usa Google Analytics (GA4) <strong>solo si aceptas</strong> el aviso de cookies: mide páginas visitadas, origen del tráfico y tipo de dispositivo, con IP anonimizada. Sin tu aceptación no se carga ningún rastreador de Google.</p>
            <p>Puedes cambiar de opinión cuando quieras con el enlace "Cookies" del pie de página: al rechazar se desactiva la medición de inmediato y tu elección se guarda en tu navegador. También puedes borrarla limpiando el almacenamiento del sitio.</p>

            <h2 class="svc-h2">5. Conservación y seguridad</h2>
            <p>Conservamos los datos solo mientras dure la relación comercial o sea necesario para cumplir obligaciones legales. Aplicamos medidas razonables de seguridad sobre los canales que controlamos.</p>

            <h2 class="svc-h2">6. Tus derechos</h2>
            <p>Conforme a la Ley N.° 29733 de Protección de Datos Personales del Perú, puedes solicitar acceso, rectificación, cancelación u oposición de tus datos escribiendo a <a href="mailto:crecepe@azconsultingperu.com">crecepe@azconsultingperu.com</a>.</p>

        </div>
    </section>
''',
)

# ---------- 7. Términos ----------
pages['terminos.html'] = dict(
    title="Términos del Servicio | CrecePE",
    desc="Términos del servicio de CrecePE: alcance de los paquetes, pagos, plazos, propiedad del sitio y soporte.",
    canonical="https://crecepe.com/terminos.html",
    schemas=[crumbs([("Inicio", "https://crecepe.com/"), ("Términos", "https://crecepe.com/terminos.html")])],
    content='''    <section class="page-hero">
        <div class="container">
            <nav class="breadcrumbs" aria-label="Migajas de pan">
                <a href="index.html">Inicio</a> <span aria-hidden="true">/</span> <span>Términos</span>
            </nav>
            <h1>Términos del <span>Servicio</span></h1>
            <p class="page-hero-sub">Última actualización: setiembre 2026.</p>
        </div>
    </section>

    <section class="page-body">
        <div class="container legal">

            <h2 class="svc-h2">1. Alcance</h2>
            <p>Cada proyecto se define en una propuesta con entregables, plazos y precio cerrados después del diagnóstico gratuito. Lo que no esté en la propuesta no está incluido y se cotiza por separado.</p>

            <h2 class="svc-h2">2. Pagos</h2>
            <p>Los proyectos se pagan 50% al inicio y 50% contra entrega, por Yape, Plin o transferencia bancaria. Los planes de mantenimiento se pagan por adelantado cada mes. Los precios publicados son referenciales ("desde") y el alcance final se confirma en la propuesta.</p>

            <h2 class="svc-h2">3. Plazos</h2>
            <p>Los plazos (2-3, 4-6 o 2-4 semanas según el paquete) empiezan cuando el cliente entrega los contenidos necesarios (logo, fotos, textos, accesos). Las demoras en la entrega de materiales extienden el cronograma en igual medida.</p>

            <h2 class="svc-h2">4. Propiedad</h2>
            <p>Con el pago final, el sitio y sus contenidos son del cliente. Dominio y hosting se registran siempre a nombre del cliente. CrecePE puede mostrar el proyecto como caso de éxito salvo que el cliente lo solicite por escrito.</p>

            <h2 class="svc-h2">5. Soporte</h2>
            <p>Todo proyecto incluye 30 días de soporte post-lanzamiento para correcciones. Después, los cambios y mejoras continuas se cubren con los planes de mantenimiento mensual desde S/ 149.</p>

            <h2 class="svc-h2">6. Resultados de SEO y GEO</h2>
            <p>Optimizamos cada sitio con las mejores prácticas técnicas conocidas, pero ningún proveedor serio puede garantizar posiciones específicas en Google ni menciones en sistemas de IA: esos resultados dependen de algoritmos de terceros, la competencia y la constancia del negocio.</p>

        </div>
    </section>
''',
)

# ============================================================
# GENERAR
# ============================================================
for path, p in pages.items():
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full) or ROOT, exist_ok=True)
    # Profundidad: raiz -> '', un nivel -> '../'
    depth = path.count('/')
    prefix = '../' * depth
    navbar, footer, dial = adapt(prefix)
    schemas = '\n'.join(schema_json(s) for s in p['schemas'])
    html = HEAD.format(
        p=prefix,
        title=p['title'], desc=p['desc'], canonical=p['canonical'],
        schemas=schemas, theme=theme_script, dial=dial, totop=totop,
        navbar=navbar, content=p['content'], footer=footer)
    open(full, 'w').write(html)
    print('OK', path, len(html), 'bytes')
