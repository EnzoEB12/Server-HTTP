
const http = require("http");
const urls = require('url')
const port = 3000;

//utilizamos el metodo createServer
http.createServer(function (req, res){

    //creamos una variable url 
    //convertimos el contenido de la url en un objeto
    url = urls.parse(req.url).pathname; //utilizamos la propiedad pathname

    //console.log(req.url)
    router(rutas, url, res);

}).listen(port, 'localhost', function (){
    console.log('Servidor Funcionando en el puerto:'+port)
})

//Creamos una funcion para las rutas
function router(rutas, url, res)
{
    //Verificamos que la ruta sea equivalente a una funcion
    if(typeof rutas[url] === 'function'){

        /* let rut = typeof rutas[url]
        console.log(rut); */

        return rutas[url](res);
        
    }
}



var rutas = {};

rutas['/'] = root; 
rutas['/enviarArchivo'] = archivo;


//Creamos las funciones
function root(res)
{
    //Creamos las cabeceras
    //Si recibimos un status 200 se ejecuta.
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1 style="text-align:center"><a href="/enviarArchivo"  target="_blank" >Crear Archivo</a></h1>');
    //finalizamos la respuesta
    res.end();
}

//http://192.168.6.14:3000/

function archivo(res)
{
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<textarea  id="w3review" name="w3review" rows="4" cols="50"></textarea>');
    res.write('<h1 ><a href=/>Enviar Archivo</a></h1>');
    
    res.end();
}






