const express = require('express');

const Ongcontroller = require('./controllers/ongController');
const IncidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.get('/ongs', Ongcontroller.index);
routes.get('/incidents', IncidentController.index);
routes.get('/profile', profileController.index);

routes.post('/incidents', IncidentController.create);
routes.post('/ongs', Ongcontroller.create);
routes.post('/sessions', SessionController.create);

routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;    