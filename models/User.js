import db from "../database/db.js";
import { DataTypes, STRING } from "sequelize";

const User = db.define('User', {
    name: {
        DataTypes: STRING,
        allowNull: false
    },
    email: {
        DataTypes: STRING,
        allowNull: false,
        unique: true
    },
    password: {
        DataTypes: STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    confirm: DataTypes.BOOLEAN
})

export default User;