const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const users = {
    email: 'Test',
    password: 'test',
  }
  res.json(users);
})

module.exports = router;
