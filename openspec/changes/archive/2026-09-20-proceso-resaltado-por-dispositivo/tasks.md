## 1. Regla por dispositivo

- [x] 1.1 Condicionar el scroll-spy en `assets/js/main.js` a `matchMedia('(hover: hover)')` (no crear el observer con mouse, con listener de `change`), y verificar en emulación desktop que el scroll no enciende ningún punto.
- [x] 1.2 Confirmar que en emulación móvil el spy sigue encendiendo cada número al cruzar el centro y soltándolo al salir, y que el toque no deja cyan pegado.
- [x] 1.3 Verificar `prefers-reduced-motion` en ambos modos (sin glow ni cyan) y que el resto del timeline (layout, copy, espaciados) queda intacto.
