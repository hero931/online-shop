const express = require('express');

const router = express.Router();

const newItem = require('../controllers/item');

router.get('/add-item', newItem.addItem);

module.exports = router;