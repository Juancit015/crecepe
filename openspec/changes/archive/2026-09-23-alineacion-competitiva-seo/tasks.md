## 1. Ficha Presencia Digital (intención de búsqueda)

- [x] 1.1 Agregar bloque visible "¿Qué incluye?" + tiempos de entrega + autoadministrable en `servicios/presencia-digital.html`, con redacción propia, y verificar que H1, title y precio S/ 500 quedan intactos
- [x] 1.2 Replicar el cambio en `tools/build_pages.py` (o anotar divergencia en el commit) y validar `python3 -c json.loads` en cada bloque JSON-LD de la ficha
- [x] 1.3 Registrar en `CHANGELOG.md`, commitear punto 1 por separado y verificar `git status` limpio salvo lo esperado

## 2. Ficha Tienda Online (incluye + pagos honestos)

- [x] 2.1 Agregar bloque incluye (catálogo, Yape/Plin, WhatsApp, envíos, autoadministrable) + nota "pasarela con tarjeta a cotizar" en `servicios/tienda-online-bagisto.html`, sin tocar H1, title ni precio S/ 700
- [x] 2.2 Replicar en `tools/build_pages.py` y validar JSON-LD de la ficha con `python3 -c json.loads`
- [x] 2.3 Registrar en `CHANGELOG.md`, commitear punto 2 por separado

## 3. FAQ ampliado en home + schema

- [x] 3.1 Agregar 4 preguntas (precio web, precio tienda, tiempos, autogestión/tarjeta) al FAQ visible de `index.html` con respuestas de 2-3 líneas en lenguaje cliente
- [x] 3.2 Extender el schema FAQPage con las mismas 4 preguntas y validar que `python3 -c json.loads` pasa en todos los bloques y que el Rich Results Test no reporta errores
- [x] 3.3 Verificar en móvil que la sección contacto sigue a ≤3 scrolls desde el FAQ y commitear punto 3 por separado

## 4. Contacto humano sin exponer domicilio

- [x] 4.1 Agregar "Habla con Juan" + zona "Paiján, La Libertad · remoto todo el Perú" a la tarjeta de contacto de `index.html`, sin calle visible ni mapa exacto
- [x] 4.2 Verificar que `streetAddress` sigue solo en el JSON-LD y que el contraste en claro/oscuro sigue AA, luego commitear punto 4 por separado

## 5. Casos con datos reales

- [x] 5.1 Agregar fecha, tecnología, alcance, funciones y tiempos reales a `casos/az-consulting.html` y `casos/novedades-chavez.html`, sin inventar cifras de resultado
- [x] 5.1b Validar JSON-LD de ambos casos y commitear punto 5 por separado
