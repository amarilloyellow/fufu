// -EXPRESSS
const express = require("express");
const morgan = require("morgan");

// -- Creando Servidor -EasyMode-
const app = express();

const mainRoutes = require('./routes/index.js')
// MIDDLEWARE

// Funcion a interceptar la ruta /profile
//   Captar la Request
//        ^
app.use(morgan('dev'))

app.use(express.static("./static"))

// Middleware Auntenticate
app.use((req, res, next) => {
    // Va a pasar por aqui antes de ir a cualquier otra ruta
    if (req.query.login === 'miguel') {
        next()
    } else {
        res.send('No autorisao')
    }

})

// Importando las Rutas
app.use(mainRoutes)

// Escuchando Peticion
app.listen(3000);
console.log("Escuchando...");

// 1:28