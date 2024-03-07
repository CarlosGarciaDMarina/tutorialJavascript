'use strict'
/*
    El metodo GET se utiliza para realizar consultas, sacar informacion y devolverla
    El metodo POST se utiliza para guardar nuevos recursos dentro de una API o Back-end
    El metodo PUT se utiliza para actualizar recursos dentro de una API o Back-end
    El metodo DELETE se utiliza para borrar recursos dentro de una API o Back-end
*/

// Aquí vamos a guardar toda la configuracion de express y de las peticiones 

var express = require('express'); // Cargamos el modulo de express para poder trabajar con él
var bodyParser = require('body-parser'); // Otra biblioteca paa trabajar

var app = express(); // Ejecutamos la funcion de express

// cargar archivos de rutas
var project_routes = require('./routes/project'); // Importante, cargamos el archivo de las rutas para poder tener disponible el objeto

// Middlewares : Es un metodo o capa que se ejecuta antes de ejecutar el resultado de la peticion de un controlador
// app es el objeto de express y usaremos el bodyparser para convertir cualquier dato que nos llegue a JSON
app.use(bodyParser.urlencoded({extended:false})); // La configuración
app.use(bodyParser.json()); // Conversion a JSON

// CORS
// Configurar cabeceras y cors: Esto se va a ejecutar siempre antes de cada peticion de esta manera permitimos el accese de un dominio a otro
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // En el asterisco hay que poner la url permitida o los origines permitidos
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Rutas
// Sobreescribimos la ruta para que la cargue dentro de app
// .use es para crear el middleware(segmento de la url, cargamos las rutas)
app.use('/api', project_routes);



// Usamos el metodo GET para manejar las solicitudes en la raiz del sitio web
app.get('/', (req, res) => {
    //Enviamos una respuesta al cliente con un estado de http 200 (OK)
    res.status(200).send(
        "<h1> Pagina de Inicio </h1>"
    );
});

//Ruta de prueba
// Usamos el metodo POST para pedirle los datos 
app.post('/test/:id', (req, res) => {
    //Hacemos un console.log para ver el contenido de la peticion
    console.log(req.body.nombre); // req.body es para recoger parametros del cuerpo de la peticion
    console.log(req.query.web); // req.body es para recoger parametros de la url
    console.log(req.params.id); // req.params es para recoger parametros que le hayas añadido previamente a la url ('/tes/:id')

    //Enviamos una respuesta al cliente con un estado de http 200 (OK)
    res.status(200).send({
        message: "Hola Mundo desde mi API de NodeJS"
    });
});


// Exportar
module.exports = app; // Exportamos toda la config de los middlewares