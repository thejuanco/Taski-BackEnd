//Define la logica de la autenticacion y registro del usuario
import User from "../models/User.js"
import { generateId } from "../helpers/token.js";
import { sendEmail } from "../helpers/email.js";

export const createUser = async (req, res) => {
    try {
      //Obteniendo los datos del body
      const { name, lastName, email, password } = req.body;

      //Validando los datos
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        console.log("El usuario ya existe");
        return;
      }

      const newUser = await User.create({
        name,
        lastName,
        email,
        password,
        token: generateId() 
      });

      console.log("Se creo al usuario");

      //Enviando el correo
      sendEmail()

      //Retorna los datos del usuario generado
      res.json({
        name: newUser.name,
        lastName: newUser.lastName,
        email: newUser.email,
        password: newUser.password,
      });

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const authenticateUser = async (req, res) => {
    
}