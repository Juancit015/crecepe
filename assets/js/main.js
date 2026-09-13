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
