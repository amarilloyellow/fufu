/* const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
})
server.listen(3000, () => {
    console.log('Server on Port 3000')
}); */

/* const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('Hello Wordl');
})

app.listen(3000, () => {
    console.log('Server en puerto 3000')
}); */

// Routing

const express = require('express');




const app = express()

// Tonto pendejo hay que decile

// funcion a middlewerear
function logger(req, res, next){ // ERROOOOOORRRRR
    console.log(req.get('host'));
    next();
}

app.use(express.json())

// MiddleWare: va a ejecuta la funcion ante de rutea la weaa
app.use(logger())


// Es una Ruta
app.get('/', (req, res) => {
    res.send('Hello Wordl');
})

// Creando Ruta About
app.get('/about', (req, res) => {
    res.send('About me')
})

// Creando Ruta About
app.get('/test', (req, res) => {
    res.send('<h1>TEST</h1>')
})

/* METODOS HTTP */
// Pasa primero por esta funcion en la ruta /get
app.all('/get', (req, res, next) => {
    // Intersecta
    console.log('Por aqui paso');
    // Continua con la ruta
    next();
});

app.get('/get', (req, res) => {
    res.json({
        username: 'miguel1212',
        password: '12122002'
    })
})

// Enviar datos al server
app.post('/post', (req, res) => {
    // Ver datos enviados
            //  req.body solo recive objetos json
    console.log(req.body);
    res.send('//POST');
})

// Rutas Dinamicas
app.post('/id/:id', (req, res) => {
    // Ver datos enviados
            //  Recive el parametro id
    console.log(req.params);
    res.send('//POST');
})

app.put('/put', (req, res) => {
    res.send('//PUT');
})

app.delete('/delete/:userid', (req, res) => {
    res.send(`User ${req.params.userid} ha sido eliminao`);
})

app.listen(5000, () => {
    console.log('Server en puerto 5000')
});
