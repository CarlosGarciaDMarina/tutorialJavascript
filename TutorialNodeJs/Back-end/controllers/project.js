'use strict'
const project = require('../models/project');
//Necesitamos importar el modelo para poder usarlo en la creacion del proyecto
var Project = require('../models/project');

// Libreria File System
var fs = require('fs');

// Es un modulo de js que nos deja acceder a las rutas fisicas de nuetro sistema de archivos
var path = require('path');

// Lo creamos en formato JSON
var controller = {

    // Metodo home
    home: function(req, res){
        return res.status(200).send({
            message: 'Soy la home'
        });
    },

    // Metodo test
    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el método o acción test del controlador de project'
        });
    },

    //Guardar un nuevo proyecto en la base de datos
    saveProject: async function(req, res){
        var project = new Project();

        // Almacenamos la peticion en la variable params para luego darle a cada parametro su valor
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        try{
            await project.save();
            return res.status(200).send({project});
        } catch(err){
            return res.status(500).send({message: "Ha ocurrido un error.", error: err});
        }

    },

    //Funcion para mostrar 1 proyecto dependiendo de la id introducida
    getProject: async function(req, res) {
        // Guardamos el parametro id dentro de una variable
        var projectId = req.params.id;

        // Usamos el metodo findByID y le pasamos la ID que va a recoger de la URL del proyecto
        Project.findById(projectId)
            .then((project) =>{ // Lo envolvemos en una promesa para capturar errores y hacer la llamada correctamente
                if (!project) {
                    // Si es distinto devolverá el mensaje
                    return res.status(404).send({message: "El proyecto no existe."});
                }
                // Si sale bien
                return res.status(200).send({project});
            })
            .catch((err) =>{
                // Si encuentra un error
                return res.status(500).send({message: "Ha ocurrido un error al devolver los datos", error: err});
            });
    },

    //Funcion para mostrar todos los proyectos
    getProjects: async function(req, res){
        // Llamamos al proyecto y usamos el metodo find() que lo que hace es buscar todo, excepto si dentro del parantesis especificamos la busqueda, por ej. find({year:2019})
        Project.find().sort('year') //El sort es para ordenar, si ponemos un - delante de year ('-year) lo ordena de mayor a menor
            .then((projects) =>{ // Lo envolvemos en una promesa para capturar errores y hacer la llamada correctamente
                if (!projects) {
                    // Si es distinto devolverá el mensaje
                    return res.status(404).send({message: "No hay proyectos para mostrar."});
                }
                // Si sale bien
                return res.status(200).send({projects});
            })
            .catch((err) =>{
                // Si encuentra un error
                return res.status(404).send({message: "Ha ocurrido un error.", error: err});
            });
    },

    //Funcion para actualizar una tabla en la base de datos
    updateProject: async function(req, res){
        // Creamos las variables donde vamos a almacenar la ID y el body con los parametros nuevos
        var projectId = req.params.id; // Importante coger la id del params para que la recoja de la url
        var update = req.body;

        //Llamamos al proyecto y usamos el metodo findByIdAndUpdate()
        Project.findByIdAndUpdate(projectId, update)
            .then((projectUpdated) => { // Lo envolvemos en una promesa para capturar errores y hacer la llamada correctamente
                if (!projectUpdated) {
                    // Si es distinto devolverá el mensaje
                    return res.status(404).send({message: "No se ha podido actualizar el proyecto porque no lo encuentra."});
                }
                // Si lo encuentra
                return res.status(200).send({projectUpdated});

            })
            .catch((err) =>{
                // Si encuentra un error
                return res.status(500).send({message: "Ha ocurrido un error.", error: err});
            });
    },

    // Funcion para borrar una tabla en la base de datos
    deleteProject: async function(req, res){
        var projectId = req.params.id; // Guardamos en una variable la id que le vamos a pasar por la url

        Project.findByIdAndDelete(projectId)
            .then((projectRemoved) =>{
                if (!projectRemoved) {
                    return res.status(404).send({message: "No se ha podido encontrar."});
                }

                return res.status(200).send({projectRemoved});
            })
            .catch((err) =>{
                return res.status(500).send({message: "Ha ocurrido un error interno.", error: err});
            });

    },

    // Funcion que sirve para subir una imagen a la base de datos
    uploadImage: function(req, res){
        var projectId = req.params.id; // Guardamos en una variable la id que le vamos a pasar por la url
        var fileName = 'Imagen no subida...'; 

        // si encuentra el archivo
        if (req.files) {

            var filePath = req.files.image.path; // Le pasamos la ruta de la imagen
            var fileSplit = filePath.split('\\'); // usamos el metodo split par dividir en 2 la ruta a partir de las barras \\
            var fileName = fileSplit[1]; // Guardamos la parte 1 del split
            var extSplit = fileName.split('\.'); // Diidimos la ruta de nuevo a partir de \. para coger la extension
            var fileExt = extSplit[1]; // cogemos la extension

            // Establecemos un condicional para que, si no es una de esas extensiones, devuelva error.
            if ((fileExt == 'png') || (fileExt == 'jpg') || (fileExt == 'jpeg') || (fileExt == 'gif')) {
                
                // Utilizamos el metodo findByIdAndUpdate para coger la id del objeto de la base de datos y actualizarlo con la imagen
                project.findByIdAndUpdate(projectId, {image: fileName})
                    .then((projectUpdated) =>{ // Lo envolvemos en una promesa para capturar errores y hacer la llamada correctamente
                        if(!projectUpdated){
                            // Si no lo encuentra devolvemos error 404
                            return res.status(404).send({message: "El archivo no se encuentra."});
                        }
                        //Si lo encuentra updateamos
                        return res.status(200).send({project: projectUpdated});
                    })
                    .catch((err) =>{ // Capturamos el error 
                        return res.status(500).send({message: "Ha ocurrido un error interno.", error: err}); // Devolvemos msj de error
                    });
            } else {
                // Si no es una extension valida no sube el archivo y devuelve error
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({message: "La extension no es válida"});
                });
            }
        }
    },

    // Función que sirve para devolver una imagen
    getImageFile: function(req, res){
        // Almacenamos el parametro en la variable file .image es el nombre de la imagen que la vamos a pasar por la url
        var file = req.params.image;
        // Almacenamos la ruta de la imagen en sí 
        var path_file = "./uploads/" + file;

        // Usamos la libreria de fs para saber si el path existe
        fs.stat(path_file, (error) => {
            // Creamos las condiciones
            if(!error){
                //Si el resultado es distinto de error enviamos la imagen
                return res.sendFile(path.resolve(path_file));
            }else {
                // Si el resultado es un error mandamos un mensaje de error
                return res.status(200).send({
                    message: "No existe la imagen..."
                });
            }
        });
    } // End getImageFile














}; // End controller
//Exportamos los controladores para poder utilizarlos fuera de este archivo
module.exports = controller;

/*





*/