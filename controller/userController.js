//Define la logica de la autenticacion y registro del usuario
import User from "../models/User.js"

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}