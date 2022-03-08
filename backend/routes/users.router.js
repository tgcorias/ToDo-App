const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const users = {
    email: 'Test',
    password: 'test',
  }
  res.json(users);
});


router.get('/:id', (req, res) => {
  const id = req.params;
  const users = {
    id: 1,
    email: 'Test',
    password: 'test',
  }
  res.json(users);
});


router.post('/', (req, res) => {
  const newUser = req.body;
  const users = {
    id: 1,
    email: 'Test',
    password: 'test',
  }
  res.json(users.push(newUser));
});


router.patch('/:id', (req, res) => {
  const id = req.params;
  const changes = req.body;
  const users = changes.users;

  res.json(users);
})

router.delete('/:id', (req, res) => {
  const id = req.params;
  const users = {
    id: 1,
    email: 'Test',
    password: 'test',
  }
  res.json(users);
})

module.exports = router;


