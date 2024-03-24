// -EXPRESSS
const express = require("express");

// -- Creando Servidor -EasyMode-
const app = express();

// REQUEST BODY 

// Procesamos segun el tipo de respuesta
app.use(express.text()) // Tipo de dato TEXT
app.use(express.json()) // Tipo de dato JSON

// Recibir Objeto JSON
app.post/*Metodo Post ya que se recive info*/('/user', (req, res) => {
    console.log(req.body)// En el body se encuentra la respuesta
    res.send('New User Created')
    // Recibir Respuesta
    
})

// Escuchando Peticion
app.listen(3000);
console.log("Escuchando...");
