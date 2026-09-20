## Why

Los botones del hero de AZ Consulting (`Proyectos IESTP/azconsulting`) tienen un sistema glass con animación spring que el usuario quiere replicar en CrecePE como cierre final: en claro ambos botones iguales (texto marino + contorno grisáceo, hover marino), en oscuro Agendar en color de acento y Ver servicios blanquecino, cada uno con su hover invertido.

## What Changes

Solo `assets/css/styles.css`, alcance `.hero-actions`, ambos temas:
- Claro (ambos botones, réplica AZ con nuestra paleta): fondo `rgba(10,31,68,0.08)`, borde 2px `rgba(10,31,68,0.3)`, texto blanco, blur 6px, sombra suave y transición spring `all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)`; hover: fondo marino, texto blanco, elevación −5px y sombra fuerte. Reemplaza las reglas outline actuales del hero en claro.
- Oscuro Agendar (naranja AZ → cyan nuestro): fondo `rgba(0,194,255,0.12)`, borde `rgba(0,194,255,0.4)`, texto cian; hover: fondo cian sólido con texto blanco.
- Oscuro Ver servicios: fondo `rgba(255,255,255,0.06)`, borde `rgba(255,255,255,0.3)`, texto `#fff`; hover: fondo blanco con texto marino.
- Se mantiene el radio y tamaño actuales de `.btn` CrecePE; el resto del sitio intacto.

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `textos-sobre-foto`: el requisito del botón Ver servicios se retira (REMOVED, superado por el sistema completo) y se agregan los tres requisitos del sistema glass (ADDED).

## Impact

- Afectado: bloque de botones del hero en `assets/css/styles.css` (reemplazo de las reglas outline claras + nuevas reglas oscuras acotadas). Base `.btn`/`.btn-primary`/`.btn-outline` y modo fuera del hero intactos.
- Riesgo visual: el hover cian con texto blanco hereda el contraste justo del original naranja; se verifica en revisión.
- Sin impacto en HTML, textos, velos, SEO ni generador de páginas.
