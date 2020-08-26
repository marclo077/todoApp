<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Descripcion

Todo App.

## Instalar las dependencias

```bash
$ npm install
```

## Configurar acceso a la base de datos (Postgres)

```bash
Editar los archivos .env y orm.config.json
```

## Ejecutar las migraciones

```bash
$ npm run migration:generate --name
$ npm run migration:run
$ npm run migration:revert
```
## Ejecutar la aplicacion

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
