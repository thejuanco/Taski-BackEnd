# Proyecto: API de autenticacion y Registro de Usuarios: Taski


## Descripción

En este repositorio de momento contiene la API para el registro y autenticación de usuarios de Taski, pero en un futuro contendra todas las operaciones logicas que necesita la app como registrar tareas, agregar colaboradores y demás.
Esta API actualmente está desarrollada con Node JS, JavaScript, Express, Sequelize como ORM, y utiliza una base de datos SQL.

# 1. Instalacion 
1. Clonar el repositorio.
   
3. Instalar las dependecias.
   npm install

4. Crear un archivo .env para almacenar las credenciales
5. Configurar y crear un usuario para la base de datos (en este ejemplo esta en MySQL)
6. Crear una cuenta en brevo para el envio de correo transnacionales
7. En las credenciales agregar un secreto (palabra secreto) para el token
8. Iniciar el servidor de desarrollo.
   node --watch index.js
