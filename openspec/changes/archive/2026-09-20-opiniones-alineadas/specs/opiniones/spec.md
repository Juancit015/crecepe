## Purpose

Que los testimonios de la sección Opiniones hablen de lo que CrecePE vende (webs, tiendas online, IA) con clientes vinculados a sus casos reales.

## ADDED Requirements

### Requirement: Testimonios alineados a los servicios
El sistema SHALL mostrar 3 testimonios cuyos textos describan resultados de web profesional, tienda 24/7 y atención con IA, cada uno firmado por un cliente de esos servicios.

#### Scenario: Cada opinión vende un servicio
- **WHEN** el visitante lee las 3 opiniones
- **THEN** una habla de web visible en Google, otra de tienda que vende sola y otra de IA que atiende, sin menciones a consultoría genérica ni ERP

#### Scenario: Dayron Chavez firma la tienda
- **WHEN** el visitante lee la opinión de la tienda
- **THEN** está firmada por Dayron Chavez, Fundador de Novedades Chávez, con su avatar y su nombre en los datos estructurados

#### Scenario: Datos estructurados coherentes
- **WHEN** un buscador lee el JSON-LD de reseñas
- **THEN** los autores coinciden con los nombres visibles en las tarjetas
