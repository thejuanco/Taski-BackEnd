//Script para la conexion de la base de datos
import { Sequelize } from "sequelize";

const db = new Sequelize('tareas_inteligentes_db', 'Admin_TI', '123456789', {
    host: 'localhost',
    dialect: 'mysql', // tipo de motor de base de datos
    //... otros parámetros de la conexión
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

export default db;