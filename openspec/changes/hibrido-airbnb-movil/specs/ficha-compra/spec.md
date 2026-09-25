## MODIFIED Requirements

### Requirement: Card quieta + mini-barra post-card en móvil

En viewports ≤992px el aside MUST ser card completa estática en flujo (sin sticky ni fixed). Una mini-barra condensada (precio + CTA, máximo 64px de alto) MUST aparecer fijada abajo SOLO cuando la card real haya salido del viewport, MUST retirarse en relacionados/footer y MUST NOT pelear con los flotantes: la flecha ↑ queda intacta (libra por geometría) y el dial de WhatsApp se oculta mientras la barra está visible (la barra ya lleva su CTA).

#### Scenario: Barra solo tras la card

- **WHEN** el visitante supera la card en móvil y sigue bajando
- **THEN** aparece la mini-barra con precio y Consultar; al volver arriba (card visible) desaparece

#### Scenario: Retirada y flotantes libres

- **WHEN** el visitante llega a relacionados o footer, o mira los flotantes
- **THEN** la barra se retira y ↑/WhatsApp quedan libres, sin superposiciones
