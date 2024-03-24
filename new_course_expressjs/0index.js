
console.log('Hello Word')

// HTTP VS EXPRESSS

// -HTTP
/* 
// --Importamos el modulo
const http = require('http');

// --Modulo Para leer Archivos (usado para leer index.html)
const fs = require('fs');

// --Creamos el servidor
//                          Peticion - Respuesta
const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./static/index.html') // Leyendo archivo Html

    // Cuendo termine de leer index.html, mandalo al response
    read.pipe(res)

})

server.listen(3000)
console.log(`Server in port ${3000}`)
 */

// -EXPRESSS
const express = require('express');

// -- Creando Servidor -EasyMode-
const app = express();

// -- Creando Peticion GET (VER PETICIONES HTTP)
//      Peticion - Respuesta
/* app.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname // Leelo desde la ruta principal mmgv
    }) // Enviar index.html
}) */

// --RUTAS

// ---Ruta Principal '/'
app.get('/', (req, res) => {
    // Enviar Texto Plano
    // res.end('Hello Word')
    // Enviar Texto y Definr su tipo
    res.send('Hello Word')
})

// ---Ruta About '/'
app.get('/about', (req, res) => {
    res.send('Hello Word, About')
})

// ---Ruta Weather '/'
app.get('/weather', (req, res) => {
    res.send('Hello Word, Weathee')
})

// --Metodos HTTP
// --- Respuesta a cualquier ruta
app.use((req, res) => {
    //Se ejecuta cuando el servidor no encuentra la ruta
    // Definiendo el estado - Enviando Respuesta
    res.status(404).send('Elmanao, que te ta inventando tu')
})
// Escuchando Peticion
app.listen(3000);
console.log('Escuchando...');