const express = require('express');
const router = express.Router();
const TasksService = require('../services/tasks.service');
const service = new TasksService;

router.get('/',
  async (req, res) => {
  const tasks = await service.getAll();
  res.json(tasks);
});

router.get('/:id',
  async (req, res) => {
    const {id} = req.params;
    const task = await service.getOne(id);
    res.json(task);
});

router.post('/',
  async (req, res) => {
    const data = req.body;
    const newtask = await service.create(data)
    res.json(newtask);
});

router.patch('/:id',
  async (req, res) => {
    const {id} = req.params;
    const changes = req.body;
    const update = await service.update(id, changes);

    res.json(update);
})

router.delete('/:id',
  async (req, res) => {
    const {id} = req.params;
    const task = await service.delete(id);
    res.json(task);
})

module.exports = router;

