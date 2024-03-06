'use strict'
//Necesitamos importar el modelo para poder usarlo en la creacion del proyecto
var Project = require('../models/project');

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

    getProject: async function(req, res) {
        var projectId = req.params.id;
        let project;
        if(projectId == null) return res.status(404).send({message: "El proyecto no existe"});

        try {
            project = await Project.find({}).sort('-year').exec();
            return res.status(200).send({project});
        } catch (err) {
            return res.status(404).send({message: "El proyecto no existe", error: err});
        }
    },

    getProjects: async function(req, res) {
        
        try {
            let projects = await Project.find({}).sort('-year').exec();
            if(!projects) return res.status(404).send({message: 'No hay proyectos para mostrar'});
            return res.status(200).send({projects});
        } catch (err) {
            return res.status(500).send({message: "Error al devolver los datos"});
        }
    }


}; // End controller
//Exportamos los controladores para poder utilizarlos fuera de este archivo
module.exports = controller;