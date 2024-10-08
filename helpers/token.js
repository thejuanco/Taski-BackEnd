import jwt from 'jsonwebtoken'

//Definiendo el token
export const generateJWT = data => {jwt.sign({id: data.id, name: data.name}, process.env.process.env.JWT_SECRET), {
    expiresIn: '1d'  //Expira en 24 horas
}}

export const generateId = () =>  Math.random().toString(32).substring(2) +  Date.now().toString(32)