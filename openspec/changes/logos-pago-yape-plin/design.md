## Context

Tres PNG con transparencia en `/home/juan/Descargas/logos/` (Yape 500px/164 KB, Plin 185px/5 KB, transferencia 512px/22 KB). Convención del proyecto: imágenes locales en `assets/img/*.avif`. Footer actual: 3 `<span class="pay-badge">` de texto (index.html ~1222). Schema: `ProfessionalService` + 3 bloques `Service` con `priceRange` viejo, replicados ×8 páginas vía `tools/build_pages.py`. Ver proposal.md - Why.

## Goals / Non-Goals

- Goals: badges nítidos y livianos en 3 ubicaciones, señal textual intacta, schema veraz.
- Non-Goals: no tocar flujos de pago reales (el sitio no cobra en línea); no rediseñar footer/Planes/banda; no hotlinks.

## Decisions

- **AVIF con alfa a ~120px de ancho (elegido):** redimensionar + convertir (avifenc/cwebp según disponibilidad) recorta ~90% del peso de Yape. PNG directo: 164 KB por un badge es inaceptable. Ño.
- **`<img>` con `alt` + `width`/`height` fijos:** conserva la señal SEO/GEO del texto, cero CLS, accesible. Solo-imagen sin alt perdería el texto que hoy citan las IA. Ño.
- **Pastilla clara condicional en oscuro:** si algún logo (transferencia/plomo) se pierde sobre fondo marino, envolverlo en pastilla blanca como el logo de CrecePE en el footer; si todos contrastan, sin pastilla. Se decide viendo el render, no por adelantado.
- **`priceRange: "S/ 149 - S/ 2,990"`:** mínimo real (mantenimiento) a máximo real (Tienda). Los "S/ 500 - S/ 900" son precios viejos ya eliminados del README.

## Risks / Trade-offs

- Logos de terceros: si Yape/Plin cambian su marca, los assets locales quedan viejos (revisar 1 vez al año). Uso factual "Aceptamos", sin modificar archivos.
