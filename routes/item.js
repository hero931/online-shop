const express = require('express');

const router = express.Router();

const newItem = require('../controllers/item'); 

router.get('/add-item', newItem.addItem);

router.post('/add-item', newItem.postAddItem);

router.get('/items', newItem.getItems);

module.exports = router;