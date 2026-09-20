## Why

En modo oscuro, el hover de los enlaces de la navbar usa `accent-dark` (`#08218F`, azul marino) y se vuelve invisible sobre fondos oscuros, arriba y con scroll. La propuesta: hover cian (`accent-light`) solo en oscuro.

## What Changes

Solo `assets/css/styles.css`, una regla:
- `body.dark-mode .nav-links a:hover { color: var(--accent-light); }` (cubre arriba, con scroll y menú móvil, porque el hover actual es global).
- Modo claro intacto (hover marino sobre fondo blanco).

## Capabilities

### New Capabilities

- `nav-hover`: hover cian en enlaces de la navbar en modo oscuro.

### Modified Capabilities

- Ninguna.

## Impact

- Afectado: 1 regla en `styles.css`. Sin HTML, JS ni otras secciones.
