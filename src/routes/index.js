const express = require('express');

const patientsController = require('../controllers/patientsController')

const routes = express.Router();

routes.get('/patients', patientsController.listPatients);

module.exports = routes;
