## MODIFIED Requirements

### Requirement: Card quieta + mini-barra post-card en móvil

En viewports ≤992px el aside MUST ser card completa estática en flujo (sin sticky ni fixed). Una mini-barra condensada (precio + CTA, máximo 64px de alto) MUST aparecer fijada abajo SOLO cuando la card real haya salido del viewport, MUST retirarse en relacionados/footer y MUST NOT apilarse con los flotantes (↑ y WhatsApp se desplazan mientras la barra está visible).

#### Scenario: Barra solo tras la card

- **WHEN** el visitante supera la card en móvil y sigue bajando
- **THEN** aparece la mini-barra con precio y Consultar; al volver arriba (card visible) desaparece

#### Scenario: Retirada y flotantes libres

- **WHEN** el visitante llega a relacionados o footer, o mira los flotantes
- **THEN** la barra se retira y ↑/WhatsApp quedan libres, sin superposiciones
