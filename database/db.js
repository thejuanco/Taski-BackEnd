//Script para la conexion de la base de datos
import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config({path: '.env'})

const db = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASS, {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
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