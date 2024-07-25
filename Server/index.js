const express = require('express'); //uso de express
const {sql, poolPromise} = require('./app/models/DB'); //importacion de la configuracion de la database
const bycript = require('bcrypt');
const cors = require('cors'); //Para conseguir el uso del api con angular
const userRoutes = require('./app/routes/users_routes');

const app = express();  // inicio de la app 
app.use(express.json()); // Indica que usaremos js para el back de este proyecto 
app.use(cors()); 
app.use('/register', userRoutes); //rutas de registro y login de usuarios

const PORT = process.env.PORT || 3000; //condicion para observar puertos

app.listen(PORT,() =>{
    console.log(`Server runing on port ${PORT}`)
});