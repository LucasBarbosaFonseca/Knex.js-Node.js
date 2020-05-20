const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');

//Users
routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

//Projects      
routes.post('/projects', ProjectController.create);
routes.get('/projects', ProjectController.searchAll);
routes.get('/projects', ProjectController.searchByUserId);
routes.get('/projectsJoin', ProjectController.searchWithJoin);

module.exports = routes;