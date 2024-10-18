import swaggerJsdoc from 'swagger-jsdoc'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Taski API',
            version: '1.0.0',
            description: 'API para gestionar tareas',
            contact: {
                name: 'Juanco',
                email: 'juanffo874@gmail.com',
            }
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server'
            }
        ]
    },
    apis: ['./routes/*js']
}

const specs = swaggerJsdoc(options)
export default specs