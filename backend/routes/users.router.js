const express = require('express');
const router = express.Router();
const UsersService = require('../services/users.service');
const service = new UsersService;

router.get('/',
  async (req, res) => {
  const users = await service.getAll();
  res.json(users);
});

router.get('/:id',
  async (req, res) => {
    const { id } = req.params;
    const user = await service.getOne(id);
    res.json(user);
});

router.post('/',
  async (req, res) => {
    const data = req.body;
    const newUSer = await service.create(data)
    res.json(newUSer);
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
    const user = await service.delete(id);
    res.json(user);
})

module.exports = router;
