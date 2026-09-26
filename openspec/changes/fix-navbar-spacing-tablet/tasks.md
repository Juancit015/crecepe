## 1. Espaciado de navbar en banda tablet

- [ ] 1.1 Subir el gap a `clamp(14px, 2vw, 22px)` con compensaciones (enlaces 0.88rem, CTA padding lateral 10px, logo 34px) dentro de la query 769–1100 existente, y verificar por captura a 960px que hay aire sin overflow
- [ ] 1.2 Verificar por captura a ~800px y en desktop/móvil que Ño hay wrap, overflow ni cambios fuera de la banda

## 2. Cierre

- [ ] 2.1 Regenerar `styles.min.css`, subir `?v=` en las 8 páginas + generador y verificar cero restos del valor anterior
- [ ] 2.2 Agregar entrada en `CHANGELOG.md`, commitear y pushear, verificando que el diff solo toca CSS, `?v=`, CHANGELOG y docs
