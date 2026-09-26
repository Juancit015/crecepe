## 1. Schemas de las 3 fichas

- [x] 1.1 Agregar `"paymentAccepted": ["Yape", "Plin", "Transferencia bancaria"]` al `provider` del schema `Service` en las 3 fichas y verificar con `grep -rn paymentAccepted` que aparece en home + 3 fichas y en ninguna otra página
- [x] 1.2 Validar cada bloque JSON-LD tocado con `python3 -c json.loads` y verificar que Ño hay errores de sintaxis

## 2. Generador

- [x] 2.1 Incluir el campo en `service_schema()` de `tools/build_pages.py` y verificar que la función genera el `provider` con `paymentAccepted` (prueba en seco sin escribir páginas)

## 3. Cierre

- [x] 3.1 Sincronizar el spec principal `seo-contenido` vía archive del change y verificar `openspec status` en verde
- [x] 3.2 Agregar entrada en `CHANGELOG.md`, commitear y pushear, verificando que el diff solo toca schemas, generador y docs
