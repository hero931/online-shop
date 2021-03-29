const express = require('express');

const router = express.Router();

const newUser = require('../controllers/user');

router.get('/add-user', newUser.addUser);

router.post('/add-user', newUser.postUser);


module.exports = router;