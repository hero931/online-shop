const Item = require('../models/item');

exports.addItem = (req, res, next)=> {  
  res.render('addItem', {
    pageTitle: 'Add Item',
    path: '/add-item'    
  });
};

exports.postAddItem = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const item = new Item(title, imageUrl, description, price);
  item.save();
  res.redirect('/');
};

exports.getItems = (req, res, next) => {
  Item.fetchAll(items => {
    res.render('items', {
      items: items,
      pageTitle: 'Items',
      path: '/items'
    });
  });
};

exports.deleteItem = (req, res, next) => {
  const itemId = req.body.itemId;
};

exports.getItemId = (req, res, next) => {
  const itemId = req.params.itemId;
  Item.findById(itemId, item => {
    res.render('itemInfo', {
      item: item,
      pageTitle: 'Item Information',
      path: '/item-info'
    });
  });  
};