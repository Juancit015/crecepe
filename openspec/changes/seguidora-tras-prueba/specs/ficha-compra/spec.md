## MODIFIED Requirements

### Requirement: Seguidora compacta tras Prueba en móvil

En viewports ≤992px el aside MUST mostrarse como card compacta (nombre del plan, precio con plazo y CTA de ancho natural; mini-lista, badge y nota ocultos), ubicada tras la sección "Prueba real" y con `position: sticky` bajo el header. MUST acompañar la lectura sin tapar la intro (que queda encima) y soltarse sola al terminar el layout, sin superponerse nunca a "También te puede interesar" ni al footer.

#### Scenario: Precio con contexto que acompaña

- **WHEN** el visitante supera "Prueba real" en móvil y sigue bajando
- **THEN** la card compacta lo acompaña bajo el header y se suelta antes de relacionados, habiendo leído la intro libremente

#### Scenario: Intro libre arriba

- **WHEN** el visitante abre una ficha en móvil
- **THEN** lo primero que ve es propuesta de valor + prueba, no la card de precio
