//Servidor Con HTTP
const { write } = require("fs");
const http = require("http");
const urls = require('url')
const port = 3000;


http.createServer(function (req, res){
    url = urls.parse(req.url).pathname;
    
    router(rutas, url, res);

}).listen(port, 'localhost', function (){
    console.log('Servidor Funcionando en el puerto:'+port)
})

function router(rutas, url, res)
{
    if(typeof rutas[url] === 'function'){
        return rutas[url](res);
    }
}

var rutas = {};
rutas['/'] = root;
rutas['/enviarArchivo'] = admin;

function root(res)
{
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1 style="text-align:center"><a href="enviarArchivo" target="_blank" >Crear Archivo</a></h1>');
    res.end();
}

//http://192.168.6.14:3000/  IP DEL GRUPO 2 

function admin(res)
{
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<textarea style="margin-left: 35%;" id="w3review" name="w3review" rows="4" cols="50"></textarea>');
    res.write('<h1 style="text-align:center"><a href="/">Enviar Archivo</a></h1>');
    
    res.end();
}





//Servidor con Express

/* const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send(
    
    "<h1><a href=# >Crear Archivo</a> <br><br> <a href=# >Enviar archivo</a></h1>  "
   )
})

app.listen(3000) */

