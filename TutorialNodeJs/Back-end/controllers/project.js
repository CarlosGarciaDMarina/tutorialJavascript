'use strict'

// Es una clase que contiene metodos o acciones que va a poder hacer relacionado con la entidad del proyecto

// Lo creamos en formato JSON
var controller = {

    // Metodo home
    home: function(req, res){
        return res.status(200).send({
            message: 'Soy la home'
        });
    },

    // Metodo home
    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el método o acción test del controlador de project'
        });
    }

}; // End controller

//Exportamos los controladores para poder utilizarlos fuera de este archivo
module.exports = controller;