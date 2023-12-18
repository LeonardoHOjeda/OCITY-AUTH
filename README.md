# O-CITY AUTH (NodeJS - TypeScript)

El proyecto es un microservicio de autenticación para la plataforma O-CITY.

# Instalación del proyecto

## Descargar Repositorio
### HTTPS
`git clone https://github.com/ysolve-solutions/ocity_auth.git`

## Instalar dependencias de desarrollo

Una vez descargado el repositorio, ejecutar el siguiente comando
`npm install`

## Configuración de variables de entorno
El proyecto cuenta con un archivo `.env.example` que contiene las variables de entorno necesarias para el correcto funcionamiento del proyecto.

Para configurar las variables de entorno, se debe crear un archivo `.env` en la raíz del proyecto y copiar el contenido del archivo `.env.example` en él.
## Base de datos
El proyecto usa PostgreSQL como DBMS y TypeORM como ORM. 

### Docker Compose
El proyecto cuenta con un archivo docker compose que contiene lo necesario para levantar el proyecto y poder trabajar con él.

Para levantar el proyecto con docker compose, ejecutar el siguiente comando:
`docker-compose up -d`

### Migraciones
Una vez levantado el contenedor con la base de datos, se debe de crear la base de datos con el nombre de `ocity_db` y ejecutar el siguiente comando para crear las tablas en la base de datos:
`npm run m:run`

### Seeders
Para poblar la base de datos con datos de prueba, ejecutar el siguiente comando:
`npm run db:seed`

## Comando para correr el proyecto en **MODO DESARROLLO**

`npm run dev`

# Tecnologías y Librerías Instaladas

## ESLint usado

- [ts-standard](https://www.npmjs.com/package/ts-standard)

## ORM
- [TypeORM](https://typeorm.io/#/)