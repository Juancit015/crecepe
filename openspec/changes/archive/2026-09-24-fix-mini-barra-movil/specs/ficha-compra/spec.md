## MODIFIED Requirements

### Requirement: Mini-barra móvil que no tapa

En viewports ≤992px el aside MUST medir como máximo 92px de alto en una sola fila (precio + CTA), aparecer solo tras pasar el hero, esconderse al bajar y retirarse en relacionados/footer. Todo contenido extra del aside (badge, h3, mini-lista, nota) MUST permanecer oculto en este modo para no estirar la barra.

#### Scenario: Barra compacta

- **WHEN** el visitante hace scroll en móvil en una ficha
- **THEN** ve una barra fina con precio y Consultar que nunca cubre más de 92px ni aparece sobre relacionados o footer

#### Scenario: Regresión de barra gigante (2026-09-24)

- **WHEN** el visitante abre cualquier ficha en un viewport ≤992px con la caché limpia
- **THEN** la barra mide como máximo 92px de alto y muestra solo precio, plazo micro y CTA en una fila, sin bloques navy de pantalla completa
