## 1. Sistema glass en modo claro

- [x] 1.1 Reemplazar las reglas outline del hero en claro por el sistema glass (fondo `rgba(10,31,68,0.08)`, borde `rgba(10,31,68,0.3)`, texto marino, blur 6px, transición spring) con hover marino + elevación, y verificar el par en reposo y hover
- [x] 1.2 Pasar el texto de ambos botones a blanco en modo claro (reposo y hover) y verificar lectura sobre la foto oscura

## 2. Sistema glass en modo oscuro

- [x] 2.1 Agregar reglas Agendar cian (fondo/borde/texto) con hover cian sólido + texto blanco, acotadas a `body.dark-mode .hero-actions`, y verificar contraste y cascada sobre la base
- [x] 2.2 Agregar reglas Ver servicios blanquecinas con hover blanco + texto marino, acotadas igual, y verificar que la base outline fuera del hero queda intacta

## 3. Verificación comparada con AZ

- [x] 3.1 Comparar el par en claro y oscuro (reposo + hover, desktop + móvil) con el hero de AZ Consulting y verificar cada escenario del spec, y validar con `openspec validate botones-estilo-az`
