const express = require('express'); //uso de express
const {sql, poolPromise} = require('./app/models/DB'); //importacion de la configuracion de la database
const bycript = require('bcrypt');
const cors = require('cors'); //Para conseguir el uso del api con angular
const userRoutes = require('./app/routes/users_routes');
const mediaRoutes = require('./app/routes/MediaRoutes')
const favoritesRoutes = require('./app/routes/favoritesRoute')
const path = require('path');


const app = express();  // inicio de la app 
app.use(express.json()); // Indica que usaremos js para el back de este proyecto 
app.use(cors()); 
app.use('/register', userRoutes); //rutas de registro y login de usuarios
app.use('/movies', mediaRoutes); // Rutas para obtener peliculas y series 
app.use('/favorites',favoritesRoutes); // Rutas para obtener favoritos del usuario

app.use('/img', express.static(path.join(__dirname, 'app/img'))); // rutas estaticas para acceder a las imagenes de las peliculas
                                                                    // ----- series 

const PORT = process.env.PORT || 3000; //condicion para observar puertos

app.listen(PORT,() =>{
    console.log(`Server runing on port ${PORT}`)
});