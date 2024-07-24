const express = require('express'); //uso de express
const {sql, poolPromise} = require('./DB'); //importacion de la configuracion de la database
const bycript = require('bcrypt');

const app = express();  // inicio de la app 
app.use(express.json()); // Indica que usaremos js para el back de este proyecto 

const PORT = process.env.PORT || 3000; //condicion para observar puertos



app.listen(PORT,() =>{
    console.log(`Server runing on port ${PORT}`)
});