const express = require('express');

const router = express.Router();

const newUser = require('../controllers/user');

router.get('/add-user', newUser.addUser);

router.post('/add-user', newUser.postUser);

router.get('/users', newUser.getUsers);

router.get('/user-details/:userId', newUser.getUserId);

router.post('/delete-user', newUser.deleteUser);

module.exports = router;