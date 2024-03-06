'use strict'

var mongoose = require('mongoose');
var app = require('./app'); // Cargamos la config de express que hemos configurado
var port = 3700; // Indicamos el puerto del servidor

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/portfolio")
        .then(() => {
            console.log("Conexion establecida con exito.");

            // Creacion del servidor
            // Listen es el metodo de express que tiene dos parámetros, el primero es el puerto y el segundo es un callback que indica si la conexion se ha establecido con exito
            app.listen(port, () => {
                console.log("Servidor corriendo correctamente en la url: Localhost:3700"); // Escribimos el mensaje de exito en la conexion
            });

        })
        .catch(err => console.log("Ha ocurrido un error" + err)); // Capturamos el error