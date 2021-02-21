const express = require('express');

const router = express.Router();

const getCart = require('../controllers/cart');

router.get('/cart', getCart.getMyCart);

router.post('/cart', getCart.postMyCart);

module.exports = router;