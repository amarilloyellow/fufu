// -EXPRESSS
const express = require("express");

// -- Creando Servidor -EasyMode-
const app = express();

// REQUEST PARAMS
// Recibir parametros de la url
            // Definir Parametro User
app.get('/hello/:username', (req, res) => {
    // Imprimir Parametros
    console.log(req.params.username)
    res.send(`Hello ${req.params.username}`)
})

// Recibir dos parametros
app.get('/sumar/:x/:y',(req, res) => {
    // Extraer parametros del objeto params
    const {x, y} = req.params
    res.send(`Result: ${parseInt(x) + parseInt(y)}`)
})

// Escuchando Peticion
app.listen(3000);
console.log("Escuchando...");

// 1:28