# ficha-compra Specification

## Purpose

La card de compra del aside en las fichas de servicio convierte tanto como la card destacada de Planes del home porque se ve igual, y en móvil acompaña sin tapar el contenido.

## Requirements

### Requirement: Aside espejo de la card destacada

El aside de cada ficha MUST mostrar badge pill, nombre del plan (h3), precio con plazo, mini-lista de 3 entregables y CTA cyan, con el mismo radio, sombra y hover lift de `.pricing-card--featured` en desktop.

#### Scenario: Paridad visual con Planes

- **WHEN** el visitante compara el aside de una ficha con la card destacada del home
- **THEN** reconoce el mismo diseño (badge, precio, CTA) adaptado al plan de la ficha

### Requirement: Mini-barra móvil que no tapa

En viewports ≤992px el aside MUST medir como máximo 92px de alto en una sola fila (precio + CTA), aparecer solo tras pasar el hero, esconderse al bajar y retirarse en relacionados/footer. Todo contenido extra del aside (badge, h3, mini-lista, nota) MUST permanecer oculto en este modo para no estirar la barra.

#### Scenario: Barra compacta

- **WHEN** el visitante hace scroll en móvil en una ficha
- **THEN** ve una barra fina con precio y Consultar que nunca cubre más de 92px ni aparece sobre relacionados o footer

#### Scenario: Regresión de barra gigante (2026-09-24)

- **WHEN** el visitante abre cualquier ficha en un viewport ≤992px con la caché limpia
- **THEN** la barra mide como máximo 92px de alto y muestra solo precio, plazo micro y CTA en una fila, sin bloques navy de pantalla completa
