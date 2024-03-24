/* const http = require('http');

const manejador = function (req, res) {
    res.writeHead(200, {'Tipo_de_Contenido':'text/html'});
    res.write('<h1>Hola Mundo 2</h1>');
    res.end();
}

http.createServer(manejador).listen(3000); */

const http = require('http');
const colors = require('colors');

const manejador = function (req, res) {
    res.writeHead(404, {'Content_type':'text/plain'});
    res.write('Hola Mundo 2');
    res.end();
}

const server = http.createServer(manejador);

server.listen(3000, function(){
    console.info('Server on Port 3000'.bgRed)
});