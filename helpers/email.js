//Script para el envio de correos
import brevo from '@getbrevo/brevo'
import dotenv from 'dotenv'
dotenv.config({path: '.env'})

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_APIKEY
)

//Cofigurando el SMTP
const smtpEmail = new brevo.SendSmtpEmail()

export const sendEmail = async () => {
    try {
        smtpEmail.subject = "Bienvenido a Taksi"
        smtpEmail.to = [{email: "juanffo874@gmail.com", name: "Juan Manuel Cruz Ortiz"}]
        smtpEmail.htmlContent = `<html><body><h1>Bienvenido a Task</h1></body></html>`
        smtpEmail.sender = { name: "Juan Manuel Cruz", email: "210373@utxicotepec.edu.mx" }

        await apiInstance.sendTransacEmail(smtpEmail)
        console.log('se envio el correo correctamente')
    } catch (error) {
        console.log(error)
    }
}

