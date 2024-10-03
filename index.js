import express from 'express'

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

app.get('/start', (req, res) => {
    res.send({ message: 'Bienvenido' });
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`El servidor esta corriendo en el puert0 ${process.env.PORT || 3000}`);
})