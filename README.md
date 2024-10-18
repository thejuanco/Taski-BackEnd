# Proyecto: API de autenticacion y Registro de Usuarios: Taski


## Descripción

En este repositorio de momento contiene la API para el registro y autenticación de usuarios de Taski, pero en un futuro contendra todas las operaciones logicas que necesita la app como registrar tareas, agregar colaboradores y demás.
Esta API actualmente está desarrollada con Node JS, JavaScript, Express, Sequelize como ORM, y utiliza una base de datos SQL.

### Instalacion 
> [!IMPORTANT]
> Debes de tener instalado NodeJS 20.12 o superior

      git clone https://github.com/thejuanco/Taski-BackEnd.git
      cd Taski-Backend
      npm install
      node --watch index.js

### Variables de entorno
Esta API necesita las siguientes variables de entorno:
- `PORT` Puerto para correr el servidor
- `DATABASE_NAME` Nombre de la base de datos
- `DATABASE_PASS` Contraseña para el acceso a la base de datos
- `DATABASE_USER` Usuario para acceder a la base de datos
- `DATABASE_HOST` Host en donde se encuentra la base
- `DATABASE_PORT` Puerto de la base
- `JWT_SECRET` Palabra para el token
- `BREVO_APIKEY` Llave para el envio de correos con brevo (crear una cuenta en brevo y generar la apikey)

### Uso
El uso de esta aplicación es unica y exclusivamente para la demostración de habilidades, el uso en el futuro inmediato o lejano es resposabilidad del autor: Juan Manuel Cruz Ortiz
