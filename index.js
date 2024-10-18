import express from 'express'
import swaggerUI from 'swagger-ui-express'
import specs from './swagger/swagger.js';
import db from './database/db.js';
import userRoutes from './routes/userRoutes.routes.js';

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

// Swagger setup
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

//Routing
app.use('/auth', userRoutes)

app.get('/start', (req, res) => {
    res.send({ message: 'Bienvenido' });
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`El servidor esta corriendo en el puert0 ${process.env.PORT || 3000}`);
})

//Conexion a la base de datos
try {
    await db.authenticate();
    db.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }