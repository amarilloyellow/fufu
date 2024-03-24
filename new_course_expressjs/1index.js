// -EXPRESSS
const express = require('express');

// -- Creando Servidor -EasyMode-
const app = express();

// Metodos HTTPS

// Crear Ruta Para Mostrar Productos
app.get('/products', (req, res) => {
    res.send('Lista de Productos')

})

app.post('/products', (req, res) => {
    res.send('Craendo Productos')
})

app.put('/products', (req, res) => {
    res.send('Actualizando Productos')
})
app.delete('/products', (req, res) => {
    res.send('Eliminado Productos')
})
app.patch('/products', (req, res) => {
    res.send('Actualizando Producto')
})

// Escuchando Peticion
app.listen(3000);
console.log('Escuchando...');