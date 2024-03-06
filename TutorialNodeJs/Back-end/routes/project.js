'use strict'
// Aquí vamos a almacenar todas las rutas

var express = require('express'); // Cargamos el modulo de express
var ProjectController = require('../controllers/project'); // Aqui cargamos el controlador

var router = express.Router(); // Cargamos el router para usar sus metodos

router.get('/home', ProjectController.home); // Creamos una ruta por get
router.post('/test', ProjectController.test); 
router.post('/save-project', ProjectController.saveProject); 

module.exports = router;