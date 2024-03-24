// Express Routes
const express = require('express');
const axios = require('axios')

const app = express.Router();
require('ejs');

app.get('/posts', async (req, res) => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    res.render('posts', {posts: response.data})
    
})

// Exprotar Rutas
module.exports = app;