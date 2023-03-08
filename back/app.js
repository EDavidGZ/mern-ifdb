import express from 'express';
import cors from 'cors';
import dbs from './database/dbs.js';
import blogRoutes from './routes/routes.js';



const app = express();

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await dbs.authenticate()
    console.log('Conexion exitosa a la db')
} catch (err) {
    console.log(`El error es: ${err}`)
}

// app.get('/', (req, res) =>{
//     res.send('hola Mundo')
// })

app.listen(8000, () =>{
    console.log('server corriendo en el puerto: http://localhost:8000/')
})