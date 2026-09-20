## Context

- Las reglas blancas sobre foto están acotadas a `.page-hero.has-bg` (`styles.css:1831-1835`): migajas, H1, sub.
- Servicios y casos usan `<section class="page-hero has-bg" ...>`; `terminos.html:149` y `privacidad.html:149` usan `<section class="page-hero" ...>` sin `has-bg`, aunque ya traen fondo fotográfico inline. Por eso el texto ño hereda el blanco.

## Goals / Non-Goals

**Goals:**
- Héroes legales idénticos a servicios en ambos temas, solo con HTML.
- Cero cambios de CSS: las reglas ya existen y cubren los 4 textos.

**Non-Goals:**
- Duplicar reglas ni crear variantes; tocar fondos, textos o layout.

## Decisions

- **Agregar `has-bg` a ambas secciones** (`class="page-hero has-bg"`): activa migajas blancas, H1 blanco y sub blanco 90% con sombra. Alternativa (copiar reglas a `.page-hero` sin clase) se descarta: duplicaría CSS y rompería la convención que ya siguen 7 páginas.
- **Ño tocar `.page-hero` base**: su estilo sin foto (gradiente claro/oscuro) debe seguir igual para futuras páginas sin foto.

## Risks / Trade-offs

- Riesgo mínimo: cambio de una clase por archivo; si alguna página futura sin foto usa `has-bg` por error, heredaría texto blanco ilegible — mitigado porque el fix solo toca las dos legales con foto real.
