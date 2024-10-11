import db from "../database/db.js";
import { DataTypes, STRING } from "sequelize";
import bcrypt from "bcrypt"

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    confirm: DataTypes.BOOLEAN
}, {
    hooks: {
        beforeCreate: async (User) => {
            const salt =  bcrypt.genSaltSync(10);
            User.password = bcrypt.hashSync(User.password, salt);
        }
    }
})

export default User;