## MODIFIED Requirements

### Requirement: Aside sticky nunca cortado

En desktop (>992px) el aside sticky MUST mostrar su contenido completo en cualquier altura de viewport ≥600px: si la card no cabe entre el `top` y el borde inferior, MUST ofrecer scroll interno en vez de cortar la parte baja (CTA/nota). El scroll interno MUST NOT atrapar el scroll de la página al llegar a sus extremos.

#### Scenario: Laptop 13" sin cortes

- **WHEN** el visitante abre una ficha a 1366×753 (captura evidencial: presencia cortada, tienda al límite)
- **THEN** la card muestra CTA y nota completos, con scroll interno solo si la altura no alcanza

#### Scenario: Scroll interno no atrapa la página

- **WHEN** el visitante rueda sobre la card hasta el final de su scroll interno
- **THEN** la página sigue scrolleando con normalidad
