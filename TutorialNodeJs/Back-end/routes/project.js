'use strict'
// Aquí vamos a almacenar todas las rutas

var express = require('express'); // Cargamos el modulo de express
var ProjectController = require('../controllers/project'); // Aqui cargamos el controlador

var router = express.Router(); // Cargamos el router para usar sus metodos

// Middleware : se ejecuta antes de que se ejecute el metodo del controlador
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads'});

router.get('/home', ProjectController.home); // Creamos una ruta por get
router.post('/test', ProjectController.test); // Creamos una ruta por post
router.post('/save-project', ProjectController.saveProject); 
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject); // Creamos una ruta por put
router.delete('/project/:id', ProjectController.deleteProject); // Creamos una ruta por delete
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImageFile);

module.exports = router;