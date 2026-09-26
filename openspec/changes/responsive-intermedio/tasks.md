## 1. Rango 769–992px (ventana media)

- [x] 1.1 Colapsar `cases-grid` y `pricing-grid` a 1 columna con tope 600px centrado en 769–992px y verificar por captura a ~800px que las cards Ño se estiran de borde a borde (incluye huérfana de Planes)
- [x] 1.2 Extender el tope 600px centrado a `contact-grid` y `faq-list` en 769–992px y verificar por captura que tarjeta y filas respiran con aire lateral
- [ ] 1.3 Verificar por captura que GEO y Opiniones siguen en 2 col sin cambios y que desktop >992px queda intacto

## 2. Subrango 600–768px (compactación)

- [x] 2.1 Compactar cards apiladas de Casos (foto contenida ~140–150px, aire reducido) y verificar por captura a ~670px contra la referencia 09-23-26
- [x] 2.2 Compactar Opiniones (menos padding, líneas contenidas) y Contacto (tarjeta y botones con aire lateral) y verificar por captura a ~670px contra 09-23-39 y 09-23-52
- [ ] 2.3 Verificar por captura a 360px que teléfono queda intacto y que modo oscuro Ño pierde contraste en los cambios

## 3. Cierre

- [x] 3.1 Regenerar `styles.min.css`, subir `?v=` en las 8 páginas + generador y verificar que Ño queda ninguna referencia al `?v=` anterior
- [ ] 3.2 Agregar entrada en `CHANGELOG.md`, commitear y pushear, verificando que el diff solo toca CSS, `?v=`, CHANGELOG y docs
