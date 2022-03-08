const express = require('express');
const router = express.Router();
const TasksService = require('../services/tasks.service');
const service = new TasksService;

router.get('/',
  async (req, res, next) => {
  try{
    const tasks = await service.getAll();
    res.json(tasks);
  }catch(err){
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try{
      const {id} = req.params;
      const task = await service.getOne(id);
      res.json(task);
    }catch(err){
      next(err);
    }
});

router.post('/',
  async (req, res, next) => {
    try{
      const data = req.body;
      const newtask = await service.create(data)
      res.json(newtask);
    }catch(err){
      next(err);
    }
});

router.patch('/:id',
  async (req, res, next) => {
    try{
      const {id} = req.params;
      const changes = req.body;
      const update = await service.update(id, changes);
      res.json(update);
    }catch(err){
      next(err);
    }
})

router.delete('/:id',
  async (req, res, next) => {
    try{
      const {id} = req.params;
      const task = await service.delete(id);
      res.json(task);
  } catch(err){
    next(err);
  }
})

module.exports = router;

