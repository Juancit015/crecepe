## 1. Seguidora tras Prueba en móvil

- [x] 1.1 Auditar clases de las listas de Pasos, Fit, QA y FAQ en las 3 fichas y definir selectores `:has` estables para el slot (o pedir aprobación para mover markup), y registrar el hallazgo
- [x] 1.2 Ubicar el aside tras Prueba (`order: 5`, posteriores en `order: 6`) como card compacta con sticky bajo el header, retirando las reglas del embed, y verificar que la intro se lee libre y la card viaja
- [x] 1.3 Verificar card pegada ≤180px, suelta antes de relacionados, sin scroll horizontal y desktop intacto

## 2. Cierre

- [ ] 2.1 Bump `?v` de assets en las 8 páginas + `tools/build_pages.py`, regenerar `styles.min.css`, registrar en `CHANGELOG.md` y commitear
