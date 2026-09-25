## MODIFIED Requirements

### Requirement: Banner de cookies detrás del drawer

Con el drawer móvil abierto, el banner de cookies MUST quedar por debajo del panel del menú y de su X de cierre: el menú siempre gana el apilado y el banner nunca lo tapa ni bloquea sus links. Con el drawer cerrado, el banner MUST seguir visible por encima del contenido, del dial de contacto y del botón volver-arriba.

#### Scenario: Abrir la hamburguesa con banner visible

- **WHEN** el visitante ve el banner de cookies en móvil y abre la hamburguesa
- **THEN** el drawer y su X se muestran completos por encima del banner, y todos los links del menú responden

#### Scenario: Banner intacto con drawer cerrado

- **WHEN** el visitante cierra el drawer en móvil
- **THEN** el banner de cookies sigue visible y sus botones Aceptar/Rechazar responden
