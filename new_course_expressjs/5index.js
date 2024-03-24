// -EXPRESSS
const express = require("express");

// -- Creando Servidor -EasyMode-
const app = express();

// QUERIES

app.get('/search', (req, res) => {
    console.log(req.query)
    if (req.query.q === 'java'){
        res.send('hola')
    } else {
        res.send('pagina normal')
    }
})

// Imprimir Queriees
app.get('/hello/:username', (req, res) => {
    // Ej:
    //                                     Variable Concatenador "&"
    //                                         ^     ^
    // URL: http://localhost:3000/hello/miguel?x=wea?&y=wea2
    //                                            ^
    //                                          Valor

    //Imprimir Queries
    console.log(req.query)
    res.send(`Hello ${req.params.username}`)
})

// Recibir dos parametros
app.get('/sumar/:x/:y',(req, res) => {

    const {x, y} = req.params
    res.send(`Result: ${parseInt(x) + parseInt(y)}`)
})

// Escuchando Peticion
app.listen(3000);
console.log("Escuchando...");

// 1:28