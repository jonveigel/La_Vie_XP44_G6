const express = require('express');

const patientsController = require('../controllers/patientsController')
const servicesController = require('../controllers/servicesController')

const routes = express.Router();

routes.get('/patients', patientsController.listPatients);
routes.post('/patients', patientsController.createPatients);
routes.get('/patients/:id', patientsController.listbyId);
routes.put('/patients/:id', patientsController.update);
routes.delete('/patients/:id', patientsController.destroy);

routes.get('/services', servicesController.listServices);

module.exports = routes;
