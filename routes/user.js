const express = require('express');

const router = express.Router();

const newUser = require('../controllers/user');

router.get('/add-user', newUser.addUser);

module.exports = router;