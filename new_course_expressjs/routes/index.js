/* // Aqui se guardaran las rutas
function mainRoutes(app){
    app.get('/profile', (req, res) => {
        res.send('Profile')
    })
}

// Exportar Funcion
module.exports = mainRoutes */

// Express Routes
const express = require('express');

const app = express.Router();
require('ejs');

app.get('/profile', (req, res) => {

    const title = 'Webonnnnnn'
    res.render('indexe', {title: title})
})

// Exprotar Rutas
module.exports = app;
