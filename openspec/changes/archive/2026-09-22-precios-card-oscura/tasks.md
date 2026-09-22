## 1. Card oscura + CTAs por plan

- [x] 1.1 Reescribir `.pricing-card--featured` a fondo navy con texto en claro (título, desc, precio, features, badge) en `assets/css/styles.css` con ajustes para modo oscuro, badge `⭐ Más Popular` con fondo cyan (`--accent-light`), regenerar `styles.min.css` y verificar llaves balanceadas
- [x] 1.2 Cambiar los 3 CTA a `Consultar Presencia` / `Consultar Tienda` / `Consultar Automatización` conservando icono WhatsApp y links `wa.me`, y verificar que el HTML sigue válido

## 2. Verificación y cierre

- [x] 2.1 Verificar en móvil y desktop (claro y oscuro): contraste legible en la card oscura, botón largo sin roturas a 360px, tiers y toggles intactos
- [x] 2.2 Documentar en `CHANGELOG.md`, validar con `openspec validate --strict` y commitear
