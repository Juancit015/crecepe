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

    function onScroll() {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Botón volver arriba (desvanecido) ---------- */
    var toTop = document.getElementById('to-top');

    function syncToTop() {
        var y = window.pageYOffset || document.documentElement.scrollTop;
        toTop.classList.toggle('is-visible', y > 300);
    }

    window.addEventListener('scroll', syncToTop, { passive: true });
    syncToTop();

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

    navToggle.addEventListener('click', function () {
        var isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

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
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
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
    var faqExtra = document.querySelectorAll('.faq-item.faq-extra');
    if (faqToggleAll && faqExtra.length) {
        // Oculto inicial vía JS: sin JS las 11 preguntas quedan visibles
        faqExtra.forEach(function (item) {
            item.classList.add('faq-hidden');
        });

        faqToggleAll.addEventListener('click', function () {
            var expanded = faqToggleAll.getAttribute('aria-expanded') === 'true';
            var moreWrap = faqToggleAll.closest('.faq-more-wrap');
            var faqList = faqToggleAll.closest('.faq-list');

            faqExtra.forEach(function (item) {
                if (expanded) {
                    // Al ocultar: cerrar su respuesta para que no reaparezca abierta
                    item.classList.remove('open');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                    item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    item.classList.add('faq-hidden');
                } else {
                    item.classList.remove('faq-hidden');
                }
            });

            // El botón viaja: al final al revelar, de vuelta al medio al ocultar
            if (moreWrap && faqList) {
                if (expanded) {
                    faqList.insertBefore(moreWrap, faqExtra[0]);
                } else {
                    faqList.appendChild(moreWrap);
                }
            }

            faqToggleAll.textContent = expanded ? 'Ver todas las preguntas' : 'Ver menos preguntas';
            faqToggleAll.setAttribute('aria-expanded', String(!expanded));
        });
    }

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

})();
