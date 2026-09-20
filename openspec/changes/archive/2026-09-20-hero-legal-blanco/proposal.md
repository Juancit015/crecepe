## Why

En "Términos" y "Privacidad" el bloque "Inicio / … / Título / Última actualización" ño sale en blanco como en las páginas de servicios, aunque también va sobre foto. Deben verse iguales.

## What Changes

- Agregar la clase `has-bg` a la sección `.page-hero` de `terminos.html` y `privacidad.html`, activando las reglas blancas ya existentes (migajas, H1, sub).
- Sin cambios de CSS, textos, fondos ni otras páginas.

## Capabilities

### New Capabilities
<!-- Ninguna: se extiende cobertura de un spec existente. -->

### Modified Capabilities
- `textos-sobre-foto`: el texto de héroes con foto en páginas legales también sale en blanco como en servicios.

## Impact

- `terminos.html`, `privacidad.html` (una clase por archivo).
- Sin cambios de CSS ni de otras páginas; mismo comportamiento en ambos temas.
