## ADDED Requirements

### Requirement: Espaciado amplio en banda tablet
En la banda 769–1100px el sistema MUST mostrar los enlaces de la navbar con `gap` amplio (`clamp(14px, 2vw, 22px)`) y tamaño de fuente reducido (0.88rem) para que todo quepa sin overflow: los 7 enlaces, el CTA, el toggle y el logo en una sola línea con aire entre items. Queda prohibido el gap mínimo (~9px) que deja los items pegados.

#### Scenario: Aire a 960px
- **WHEN** el visitante abre la página a 960px
- **THEN** los enlaces se ven separados con aire, en una sola línea y sin overflow horizontal

#### Scenario: Desktop y móvil intactos
- **WHEN** el visitante abre la página en desktop (>1100px) o móvil (drawer ≤768px)
- **THEN** la navbar se ve igual que antes del cambio
