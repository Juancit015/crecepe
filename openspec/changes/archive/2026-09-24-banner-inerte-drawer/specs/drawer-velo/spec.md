## MODIFIED Requirements

### Requirement: Banner atenuado e inerte con drawer abierto

Con el drawer móvil abierto, el banner de cookies MUST atenuarse como el resto del fondo (efecto equivalente al velo oscuro) y MUST dejar de ser interactivo: ni Aceptar ni Rechazar ni sus enlaces responden mientras el menú esté abierto. Al cerrar el drawer, el banner MUST volver a su estado normal visible e interactivo.

#### Scenario: Abrir la hamburguesa atenúa el banner

- **WHEN** el visitante abre la hamburguesa en móvil con el banner visible
- **THEN** el banner se ve oscurecido como el fondo y sus botones no responden

#### Scenario: Cierre restaura el banner

- **WHEN** el visitante cierra el drawer
- **THEN** el banner vuelve a verse normal y Aceptar/Rechazar responden
