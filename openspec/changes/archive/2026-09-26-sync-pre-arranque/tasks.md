## 1. Puerta de decisión

- [x] 1.1 Confirmar con Juan el rango real de precios (¿techo 2,990 vigente o nuevo valor?) y verificar que la decisión queda anotada antes de tocar schemas

## 2. Schemas priceRange + paymentAccepted

- [x] 2.1 Unificar `priceRange` al rango decidido en los 4 bloques de `index.html` y verificar con `grep -rn priceRange` que quedan cero ocurrencias del valor viejo
- [x] 2.2 Validar cada bloque JSON-LD tocado con `python3 -c json.loads` y verificar que el Rich Results Test Ño reporta errores

## 3. FAQ index ↔ schema ↔ llms.txt

- [x] 3.1 Adaptar las 10 respuestas/preguntas divergentes de `llms.txt` al wording exacto del index visible y verificar con diff de sets que quedan 13/13 idénticos
- [x] 3.2 Verificar paridad FAQ visible ↔ schema FAQPage (13/13) y validar JSON con `python3 -c json.loads`

## 4. Candado del generador

- [x] 4.1 Reforzar el aviso en el header de `tools/build_pages.py` (Ño correr sin `git diff` revisado) y verificar que el archivo conserva su plantilla intacta
- [x] 4.2 Correr verificación de preservación (grep de los 7 bloques en fichas/casos) y verificar que todos siguen presentes tras el change

## 5. Higiene de cierre

- [x] 5.1 Actualizar `lastmod` en `sitemap.xml` a la fecha de publicación y verificar las 8 URLs con la fecha nueva
- [x] 5.2 Sincronizar `README.md` (13 FAQs, testimonios sin estrellas) y agregar entrada en `CHANGELOG.md`, verificando que cada dato coincide con lo publicado
- [x] 5.3 Sincronizar specs principales (`seo-contenido`, nota de generador) vía archive del change y verificar `openspec status` en verde
