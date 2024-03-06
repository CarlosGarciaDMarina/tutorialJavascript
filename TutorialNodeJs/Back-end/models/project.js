'use strict'

// Importamos mongoose que es el que se encarga de trabajar con los models
var mongoose = require('mongoose');

// Definimos el esquema del modelo
var Schema = mongoose.Schema;

// y, por último, creamos el esquema del proyecto, es el molde sobre el cual trabajaremos para crear nuevos proyectos en nuestra base de datos
// Le pasamos un objeto JSON con las propiedades que debe tener el proyecto
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

// Para poder exportarlo e importarlo en otros ficheros usamos el .exports
// mongoose.model es para poder coger el esquema y utilizarlo como modelo ('nombre de la entidad', el esquema)
// mongoose guarda el nombre siempre en minuscula y lo pluraliza
module.exports = mongoose.model('Project', ProjectSchema);
// projects --> guarda los documentos en la base de datos que tenga ese nombre y, si no hay ninguna la crea.