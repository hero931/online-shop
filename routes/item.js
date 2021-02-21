const express = require('express');

const router = express.Router();

const newItem = require('../controllers/item');

router.get('/add-item', newItem.addItem);

router.get('/items', newItem.getItems);

router.post('/add-item', newItem.postAddItem);

router.get('/item-info/:itemId', newItem.getItemId);

router.post('/delete-item', newItem.deleteItem);

module.exports = router;