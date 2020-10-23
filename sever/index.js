const express = require('express');
const conectarDB = require('./config/database')


const app = express();
conectarDB();

const PORT = process.env.PORT || 4000;

//express json

app.use(express.json( { extended: true } ));

//importar rutas

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));


app.get('/', (req,res)=>{
    res.send("Hola Mundo")
})


app.listen(PORT, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
})