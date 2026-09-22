## 1. Marcado de las 3 cards

- [x] 1.1 Añadir `span` de tier (Starter / Más popular / Enterprise) con clases de `case-role` y clase `pricing-card--featured` en Tienda, y verificar que el HTML de las 8 páginas sigue válido
- [x] 1.2 Unificar los 3 CTA a texto `Consultar plan` con SVG inline de WhatsApp, `aria-label` por plan y mismo `wa.me` con prefill, y verificar links intactos

## 2. Estilos + verificación

- [x] 2.1 Añadir reglas de etiqueta tier, variante destacada (borde + elevación, sin escala) y CTA con icono en `assets/css/styles.css` con soporte claro/oscuro, regenerar `styles.min.css` y verificar llaves balanceadas
- [x] 2.2 Verificar visualmente en móvil y desktop (claro y oscuro): etiquetas correctas, Tienda destacada, icono nítido, toggles `Ver qué incluye` funcionando y precios/copy sin cambios

## 3. Cierre

- [ ] 3.1 Documentar en `CHANGELOG.md`, validar con `openspec validate --strict` y commitear
