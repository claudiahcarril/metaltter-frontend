# Metaltter (Fronted) 

Frontend desarrollado con Vue y TypeScript en el contexto de la práctica final del Bootcamp de Desarrollo Web de Women in Tech de Keepcoding.

Metaltter es una plataforma que permite la publicación de mini contenidos, de manera pública o privada.


## Detalles del desarrollo:
### Componentes principales de la plataforma

#### La plataforma debe contar con 2 componentes principales:
1. ZONA PÚBLICA: será la zona donde lleguen usuarios que no están registrados (usuarios públicos).
2. ZONA PRIVADA: los usuarios que se registren, podrán acceder a su zona privada para poder publicar y personalizar los contenidos que consumen.


## Roles definidos:
#### Tras un análisis del proyecto, detectamos los siguientes roles definidos:
- Usuario anónimo: usuario de la zona pública cuyo principal interés es la búsqueda y visualización de contenidos.
- Miembro de la plataforma: usuario de la zona privada cuyo principal objetivo es la publicación de nuevos contenidos, así como recibir contenidos más adecuados a sus gustos.

## Detalles técnicos:
### Vue y TypeScript
- Se ha utilizado Vue CLI para la creación de la plataforma con TypeScript, Vue Router y Vuex
- Se han configurado las rutas con Vue Router
- Se ha utilizado la librería Vuex para la gestión de estados del store
- Se ha utilizado la librería Axios para realizar las peticiones a la API (Metaltter Backend)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# Endpoints
## Access_token:
```
[POST] https://api.escuelajs.co/api/v1/auth/login
```

## Get products:
```
[GET] https://api.escuelajs.co/api/v1/products
```

### Filter:

- &word= filter by word

### Pagination:
- &skip= 
- &limit=


## Get users:
```
[GET] https://api.escuelajs.co/api/v1/users
```

## Get user profile:
```
[GET] https://api.escuelajs.co/api/v1/auth/profile
```

## Get mets:
