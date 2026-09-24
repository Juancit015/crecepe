/* ============================================================
   CrecePE — main.js
   Navbar scroll + menú móvil + FAQ accordion + reveal on scroll
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Quitar bloqueo de transiciones tras la carga ---------- */
    function unpreload() {
        document.body.classList.remove('preload');
    }

    if (document.readyState === 'complete') {
        unpreload();
    } else {
        window.addEventListener('load', unpreload);
        // Respaldo por si 'load' tarda (fuentes externas)
        setTimeout(unpreload, 2500);
    }

    /* ---------- Tema claro / oscuro ---------- */
    var themeToggle = document.getElementById('themeToggle');

    function setTheme(dark) {
        document.body.classList.toggle('dark-mode', dark);
        try {
            localStorage.setItem('crecepe-theme', dark ? 'dark' : 'light');
        } catch (e) {}
    }

    // Sincroniza con lo aplicado por el script anti-destello
    try {
        var stored = localStorage.getItem('crecepe-theme');
        if (stored === 'dark' || stored === 'light') {
            setTheme(stored === 'dark');
        }
    } catch (e) {}

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            setTheme(!document.body.classList.contains('dark-mode'));
        });
    }

    /* ---------- Navbar: fondo al hacer scroll ---------- */
    var navbar = document.getElementById('navbar');

    // Lee UNA vez por frame y luego escribe: leer después de mutar
    // el DOM fuerza reflow (lo marcaba Lighthouse: 119ms).
    function onScroll(y) {
        navbar.classList.toggle('scrolled', y > 40);
    }

    window.addEventListener('scroll', onScrollY, { passive: true });
    // Difiere la lectura inicial de scrollY fuera del parsing para evitar reflow
    requestAnimationFrame(onScrollY);

    /* ---------- Botón volver arriba (desvanecido) ---------- */
    var toTop = document.getElementById('to-top');

    function syncToTop(y) {
        toTop.classList.toggle('is-visible', y > 300);
    }

    // Un solo listener con rAF: una lectura geométrica por frame y
    // solo escrituras después (cero reflows forzados en scroll)
    var scrollTicking = false;
    function onScrollY() {
        if (!scrollTicking) {
            scrollTicking = true;
            requestAnimationFrame(onScrollFrame);
        }
    }
    function onScrollFrame() {
        var y = window.pageYOffset || document.documentElement.scrollTop;
        onScroll(y);
        syncToTop(y);
        scrollTicking = false;
    }
    window.addEventListener('scroll', onScrollY, { passive: true });
    requestAnimationFrame(function () {
        var y = window.pageYOffset || document.documentElement.scrollTop;
        onScroll(y);
        syncToTop(y);
    });

    toTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ---------- Dial de contacto (abanico, patrón iestpaijan) ---------- */
    var dial = document.getElementById('contact-dial');

    if (dial && !dial.dataset.initialized) {
        dial.dataset.initialized = '1';
        var dialMain = dial.querySelector('.contact-dial__main');

        function syncDialToTop() {
            if (!toTop) return;
            toTop.classList.toggle('to-top--dial-open', dial.classList.contains('is-open'));
        }

        // Observa cambios de clase para sincronizar to-top (cubre hover CSS y touch)
        if (window.MutationObserver) {
            new MutationObserver(syncDialToTop).observe(dial, { attributes: true, attributeFilter: ['class'] });
        }

        var isTouchDial = (window.matchMedia && window.matchMedia('(hover: none)').matches) ||
            ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

        if (!isTouchDial) {
            // Escritorio: is-open por JS con retardo de cierre para cruzar el hueco
            // entre el botón principal y los satélites sin que el abanico colapse
            var hideTimer;
            function dialEnter() { clearTimeout(hideTimer); dial.classList.add('is-open'); syncDialToTop(); }
            function dialLeave() { hideTimer = setTimeout(function () { dial.classList.remove('is-open'); syncDialToTop(); }, 280); }
            dial.addEventListener('mouseenter', dialEnter);
            dial.addEventListener('mouseleave', dialLeave);
            var dialActions = dial.querySelector('.contact-dial__actions');
            if (dialActions) { dialActions.addEventListener('mouseenter', dialEnter); dialActions.addEventListener('mouseleave', dialLeave); }
            dial.querySelectorAll('.contact-dial__btn').forEach(function (b) { b.addEventListener('mouseenter', dialEnter); });
            dial.addEventListener('focusin', dialEnter);
            dial.addEventListener('focusout', function () {
                setTimeout(function () {
                    if (!dial.contains(document.activeElement)) { dial.classList.remove('is-open'); syncDialToTop(); }
                }, 100);
            });
        } else if (dialMain) {
            // En táctil: primer toque abre el abanico, segundo toque sigue el enlace
            dialMain.addEventListener('click', function (e) {
                if (!dial.classList.contains('is-open')) {
                    e.preventDefault();
                    e.stopPropagation();
                    dial.classList.add('is-open');
                    syncDialToTop();
                }
            });

            document.addEventListener('click', function (e) {
                if (!dial.contains(e.target)) {
                    dial.classList.remove('is-open');
                    syncDialToTop();
                }
            });

            dial.querySelectorAll('.contact-dial__btn').forEach(function (b) {
                b.addEventListener('click', function () {
                    setTimeout(function () { dial.classList.remove('is-open'); syncDialToTop(); }, 180);
                });
            });
        }

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                dial.classList.remove('is-open');
                syncDialToTop();
            }
        });
    }

    /* ---------- Menú móvil ---------- */
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');
    var navBackdrop = document.getElementById('navBackdrop');

    function syncBackdrop(isOpen) {
        if (navBackdrop) {
            navBackdrop.classList.toggle('open', isOpen);
        }
    }

    function lockScroll(lock) {
        var value = lock ? 'hidden' : '';
        document.documentElement.style.overflow = value;
        document.body.style.overflow = value;
    }

    navToggle.addEventListener('click', function () {
        var isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        lockScroll(isOpen);
        syncBackdrop(isOpen);
    });

    // Cerrar menú al tocar el velo
    if (navBackdrop) {
        navBackdrop.addEventListener('click', function () {
            closeMenu();
        });
    }

    // Cerrar menú con la X interna del drawer
    var drawerClose = navLinks.querySelector('.drawer-close');
    if (drawerClose) {
        drawerClose.addEventListener('click', function () {
            closeMenu();
        });
    }

    // Cerrar menú al hacer clic en un enlace
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });

    // Cerrar menú al tocar fuera de él
    document.addEventListener('click', function (e) {
        if (navLinks.classList.contains('open') &&
            !navLinks.contains(e.target) &&
            !navToggle.contains(e.target)) {
            closeMenu();
        }
    });

    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navLinks.classList.contains('open')) {
            closeMenu();
        }
    });

    // Cerrar menú al volver a vista escritorio
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && navLinks.classList.contains('open')) {
            closeMenu();
        }
    });

    function closeMenu() {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        document.body.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
        lockScroll(false);
        syncBackdrop(false);
    }

    /* ---------- FAQ accordion ---------- */
    document.querySelectorAll('.faq-item').forEach(function (item) {
        var question = item.querySelector('.faq-question');
        var answer = item.querySelector('.faq-answer');

        question.addEventListener('click', function () {
            var isOpen = item.classList.contains('open');

            // Cerrar todos
            document.querySelectorAll('.faq-item.open').forEach(function (other) {
                other.classList.remove('open');
                other.querySelector('.faq-answer').style.maxHeight = null;
                other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Abrir el actual si estaba cerrado
            if (!isOpen) {
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    /* ---------- FAQ: revelado progresivo ---------- */
    var faqToggleAll = document.getElementById('faqToggleAll');
    var faqExtraWrap = document.querySelector('.faq-extra-wrap');
    var faqExtra = document.querySelectorAll('.faq-item.faq-extra');
    if (faqToggleAll && faqExtraWrap && faqExtra.length) {
        // Colapso inicial vía JS: sin JS las 11 preguntas quedan visibles.
        // Sin transición para que no se anime al cargar la página.
        faqExtraWrap.style.transition = 'none';
        faqExtraWrap.classList.add('faq-collapsed');
        // Doble rAF: difiere la restauración de la transición fuera del layout
        // inicial, evitando el reflow forzado que causaba offsetHeight.
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                faqExtraWrap.style.transition = '';
            });
        });

        faqToggleAll.addEventListener('click', function () {
            var expanded = faqToggleAll.getAttribute('aria-expanded') === 'true';
            var moreWrap = faqToggleAll.closest('.faq-more-wrap');
            var faqList = faqToggleAll.closest('.faq-list');

            if (expanded) {
                faqExtra.forEach(function (item) {
                    // Al ocultar: cerrar su respuesta para que no reaparezca abierta
                    item.classList.remove('open');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                    item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                });
                faqExtraWrap.classList.add('faq-collapsed');

                // Botón de vuelta al medio y a la vista: sin salto a Contacto
                if (moreWrap && faqList) {
                    faqList.insertBefore(moreWrap, faqExtraWrap);
                    moreWrap.scrollIntoView({ block: 'nearest' });
                }
            } else {
                faqExtraWrap.classList.remove('faq-collapsed');

                // El botón viaja al final al revelar
                if (moreWrap && faqList) {
                    faqList.appendChild(moreWrap);
                }
            }

            faqToggleAll.textContent = expanded ? 'Ver todas las preguntas' : 'Ver menos preguntas';
            faqToggleAll.setAttribute('aria-expanded', String(!expanded));
        });
    }

    /* ---------- Planes: acordeón de features en móvil ---------- */
    // El botón .pricing-toggle solo es visible en móvil (CSS display:none en desktop).
    // Cuando se hace clic, abre/cierra la lista .pricing-features con clase .is-open.
    document.querySelectorAll('.pricing-toggle').forEach(function (btn) {
        var featuresId = btn.getAttribute('aria-controls');
        var featuresList = featuresId ? document.getElementById(featuresId) : null;
        if (!featuresList) return;

        btn.addEventListener('click', function () {
            var isOpen = featuresList.classList.contains('is-open');
            featuresList.classList.toggle('is-open', !isOpen);
            btn.setAttribute('aria-expanded', String(!isOpen));
            // Actualizar texto del botón
            var textNode = btn.firstChild;
            if (textNode && textNode.nodeType === 3) {
                textNode.nodeValue = isOpen ? 'Ver qué incluye ' : 'Ocultar detalles ';
            }
        });
    });

    /* ---------- PRUEBA: reveal enmascarado por palabra ---------- */
    // Parte .section-title/.section-subtitle en palabras con máscara.
    // Sin JS no toca el DOM (texto intacto, SEO intacto).
    (function wordReveal() {
        var els = document.querySelectorAll('.section-title, .section-subtitle');
        if (!els.length) return;
        els.forEach(function (el) {
            var n = 0;
            function wrapWords(node) {
                var children = Array.prototype.slice.call(node.childNodes);
                children.forEach(function (child) {
                    if (child.nodeType === 3) {
                        var frag = document.createDocumentFragment();
                        child.textContent.split(/(\s+)/).forEach(function (part) {
                            if (!part) return;
                            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
                            var mask = document.createElement('span');
                            mask.className = 'w-mask';
                            var w = document.createElement('span');
                            w.className = 'w-word';
                            w.style.setProperty('--w-i', Math.min(n++, 12));
                            w.textContent = part;
                            mask.appendChild(w);
                            frag.appendChild(mask);
                        });
                        node.replaceChild(frag, child);
                    } else if (child.nodeType === 1) {
                        wrapWords(child);
                    }
                });
            }
            wrapWords(el);
        });
    })();

    /* ---------- Reveal on scroll ---------- */
    var revealEls = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(function (el) { observer.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ---------- Proceso: paso activo al hacer scroll (solo sin hover) ---------- */
    // Marca con .active el paso del timeline que cruza el centro del viewport.
    // Solo corre sin mouse: en desktop manda el hover y el spy queda apagado.
    (function processSpy() {
        var steps = document.querySelectorAll('.process-step');
        if (!steps.length || !('IntersectionObserver' in window)) return;
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        var hoverMQ = window.matchMedia ? window.matchMedia('(hover: hover)') : null;
        var current = null;
        var spy = null;

        function onEntries(entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    if (current && current !== entry.target) current.classList.remove('active');
                    current = entry.target;
                    current.classList.add('active');
                } else if (entry.target === current) {
                    // Salió de la franja central: suelta el resaltado, no se queda pegado
                    entry.target.classList.remove('active');
                    current = null;
                }
            });
        }

        function clearActive() {
            steps.forEach(function (s) { s.classList.remove('active'); });
            current = null;
        }

        function start() {
            if (spy) return;
            spy = new IntersectionObserver(onEntries, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
            steps.forEach(function (s) { spy.observe(s); });
        }

        function stop() {
            if (spy) { spy.disconnect(); spy = null; }
            clearActive();
        }

        function sync() {
            // Con mouse hay hover y el spy sobra; sin hover el scroll manda
            if (hoverMQ && hoverMQ.matches) { stop(); } else { start(); }
        }

        if (hoverMQ) {
            if (hoverMQ.addEventListener) { hoverMQ.addEventListener('change', sync); }
            else if (hoverMQ.addListener) { hoverMQ.addListener(sync); }
        }
        sync();
    })();

    /* ---------- Opiniones: comilla activa al hacer scroll (solo sin hover) ---------- */
    // Espejo del spy de Proceso: marca con .active la card que cruza el
    // centro del viewport para alzar su comilla. En desktop manda el hover.
    (function opinionSpy() {
        var cards = document.querySelectorAll('.opinion-card');
        if (!cards.length || !('IntersectionObserver' in window)) return;
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        var hoverMQ = window.matchMedia ? window.matchMedia('(hover: hover)') : null;
        var current = null;
        var spy = null;

        function onEntries(entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    if (current && current !== entry.target) current.classList.remove('active');
                    current = entry.target;
                    current.classList.add('active');
                } else if (entry.target === current) {
                    entry.target.classList.remove('active');
                    current = null;
                }
            });
        }

        function clearActive() {
            cards.forEach(function (c) { c.classList.remove('active'); });
            current = null;
        }

        function start() {
            if (spy) return;
            spy = new IntersectionObserver(onEntries, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
            cards.forEach(function (c) { spy.observe(c); });
        }

        function stop() {
            if (spy) { spy.disconnect(); spy = null; }
            clearActive();
        }

        function sync() {
            if (hoverMQ && hoverMQ.matches) { stop(); } else { start(); }
        }

        if (hoverMQ) {
            if (hoverMQ.addEventListener) { hoverMQ.addEventListener('change', sync); }
            else if (hoverMQ.addListener) { hoverMQ.addListener(sync); }
        }
        sync();
    })();

    /* ---------- Parallax: respaldo para navegadores sin background-attachment: fixed (iOS) ---------- */
    // Emula el fondo fijo de .parallax-fondo ajustando background-position-y
    // con rAF solo en los elementos visibles. No corre con reduced-motion.
    (function parallaxFallback() {
        var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var noHover = window.matchMedia && window.matchMedia('(hover: none)').matches;
        if (reduceMotion || noHover) return;

        var ua = navigator.userAgent || '';
        var isIOS = /iPad|iPhone|iPod/.test(ua) ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        if (!isIOS) return; // el resto usa el fixed nativo de .parallax-fondo

        var targets = Array.prototype.slice.call(document.querySelectorAll('.parallax-fondo'));
        if (!targets.length || !('IntersectionObserver' in window)) return;

        var visible = [];
        var ticking = false;

        function update() {
            ticking = false;
            visible.forEach(function (el) {
                var top = el.getBoundingClientRect().top;
                el.style.backgroundPositionY = Math.round(-top) + 'px';
            });
        }

        function requestUpdate() {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(update);
            }
        }

        var visObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var i = visible.indexOf(entry.target);
                if (entry.isIntersecting) {
                    if (i === -1) visible.push(entry.target);
                } else if (i !== -1) {
                    visible.splice(i, 1);
                    entry.target.style.backgroundPositionY = '';
                }
            });
            requestUpdate();
        });

        targets.forEach(function (el) { visObserver.observe(el); });
        window.addEventListener('scroll', requestUpdate, { passive: true });
        window.addEventListener('resize', requestUpdate);
        requestUpdate();
    })();

    /* ---------- Consentimiento de cookies + Google Analytics ---------- */
    // GA solo se carga si el visitante acepta (Ley 29733). Sin elección
    // guardada no se hace ninguna petición a Google. Revocar = desactivar
    // inmediato vía ga-disable + la elección rige futuras visitas.
    (function consent() {
        var KEY = 'crecepe-consent';
        var GA_ID = 'G-PFC4CHMJT4';
        var loaded = false;
        var banner = null;

        function loadGA() {
            if (loaded) return;
            loaded = true;
            window['ga-disable-' + GA_ID] = false;
            window.dataLayer = window.dataLayer || [];
            window.gtag = function () { window.dataLayer.push(arguments); };
            var s = document.createElement('script');
            s.async = true;
            s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
            document.head.appendChild(s);
            window.gtag('js', new Date());
            window.gtag('config', GA_ID, { anonymize_ip: true });
        }

        function disableGA() {
            window['ga-disable-' + GA_ID] = true;
        }

        function hideBanner() {
            if (banner) banner.classList.remove('consent-visible');
        }

        function choose(value) {
            try { localStorage.setItem(KEY, value); } catch (e) {}
            if (value === 'accepted') { loadGA(); }
            else { disableGA(); }
            hideBanner();
        }

        function policyUrl() {
            var p = location.pathname;
            return (p.indexOf('/servicios/') !== -1 || p.indexOf('/casos/') !== -1) ? '../privacidad.html' : 'privacidad.html';
        }

        function showBanner() {
            if (banner) { banner.classList.add('consent-visible'); return; }
            banner = document.createElement('div');
            banner.className = 'consent-banner';
            banner.setAttribute('role', 'dialog');
            banner.setAttribute('aria-label', 'Aviso de cookies');
            banner.innerHTML = '<p>Usamos cookies de medición (Google Analytics) solo si aceptas. Ver <a href="' + policyUrl() + '">Política de Privacidad</a>.</p>' +
                '<div class="consent-actions"><button type="button" data-consent="accepted">Aceptar</button>' +
                '<button type="button" data-consent="rejected">Rechazar</button></div>';
            document.body.appendChild(banner);
            banner.addEventListener('click', function (e) {
                var t = e.target;
                var v = t && t.getAttribute ? t.getAttribute('data-consent') : null;
                if (v) choose(v);
            });
            requestAnimationFrame(function () { banner.classList.add('consent-visible'); });
        }

        var stored = null;
        try { stored = localStorage.getItem(KEY); } catch (e) {}
        if (stored === 'accepted') { loadGA(); }
        else if (stored === 'rejected') { disableGA(); }
        else if (document.readyState === 'complete' || document.readyState === 'interactive') { showBanner(); }
        else { document.addEventListener('DOMContentLoaded', showBanner); }

        // Enlace "Cookies" del footer: borra la elección y reabre el banner
        document.addEventListener('click', function (e) {
            var t = e.target;
            if (t && t.getAttribute && t.getAttribute('data-consent-open') !== null) {
                e.preventDefault();
                try { localStorage.removeItem(KEY); } catch (err) {}
                disableGA();
                showBanner();
            }
        });
    })();

})();
