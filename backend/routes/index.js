const express = require('express');

const usersRouter = require('./users.router');
const tasksRouter = require('./tasks.router');

function routerAPI(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/tasks', tasksRouter);
  router.use('/users', usersRouter);
}

module.exports = routerAPI;
