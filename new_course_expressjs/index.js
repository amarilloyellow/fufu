// // -EXPRESSS
const express = require("express");
const morgan = require("morgan");
require('ejs');

// -- Creando Servidor -EasyMode-
const app = express();

const mainRoutes = require('./routes/index.js')
const homeRoutes = require('./routes/home.js')

// TEMPLATES

// Settings

// Establrecer mudulo para las vistas
app.set('view engine', 'ejs')
app.set('views', (__dirname, 'views'))

// Funcion a interceptar la ruta /profile
//   Captar la Request
//        ^
app.use(morgan('dev'))

app.use(express.static("./static"))

// Middleware Auntenticate
/* app.use((req, res, next) => {
    // Va a pasar por aqui antes de ir a cualquier otra ruta
    if (req.query.login === 'miguel') {
        next()
    } else {
        res.send('No autorisao')
    }

}) */

// Importando las Rutas
app.use(mainRoutes)
app.use(homeRoutes)

// Escuchando Peticion
app.listen(3000);
console.log("Escuchando...");

// 1:28