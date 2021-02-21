const Item = require('../models/item');
const Cart = require('../models/cart');

exports.getMyCart = (req, res, next) => {
    res.render('cart', {
        path: '/cart',
        pageTitle: 'My Cart'        
    });
};

exports.postMyCart = (req, res, next) => {
    const myItemId = req.body.itemId;    
    Item.findById(myItemId, (item) => {
        Cart.addItem(myItemId, item.price);
    });
    res.redirect('/cart');
};