## ADDED Requirements

### Requirement: Aside de compra sticky en desktop

El aside `.svc-aside` de cada página de servicio SHALL acompañar el scroll en viewport desktop, manteniendo precio y CTA visibles mientras el visitante lee la ficha, y SHALL detenerse antes de la sección "También te puede interesar" sin superponerse a ella ni al footer.

#### Scenario: Aside visible durante la lectura

- **WHEN** el visitante hace scroll por la ficha en desktop (ancho ≥961px)
- **THEN** el aside sigue visible junto al contenido hasta que termina la columna, y nunca tapa "También te puede interesar" ni el footer

#### Scenario: Móvil sin cambios

- **WHEN** el visitante abre una ficha en móvil (ancho ≤960px)
- **THEN** el aside NO es sticky; la mini-barra inteligente sigue siendo el mecanismo de compra visible

#### Scenario: Sin movimiento reducido afectado

- **WHEN** el visitante tiene `prefers-reduced-motion` activado
- **THEN** el sticky sigue funcionando (es posición, no animación) sin transiciones asociadas
