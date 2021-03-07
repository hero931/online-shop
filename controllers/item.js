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
  Item.create({
    title: title,
    imageUrl: imageUrl,
    description: description,
    price: price
  }).then(result => {
    res.redirect('/items');
  })
    .catch(err => {
      console.log(err);
    }); 
};

exports.getItems = (req, res, next) => {
  Item.findAll()
  .then(items => {
    res.render('items', {
      items: items,
      pageTitle: 'Items',
      path: '/items'
    }); 
  })
  .catch(err => console.log(err));     
};

exports.deleteItem = (req, res, next) => {
  const itemId = req.body.itemId;
  Item.findByPk(itemId)
  .then(item => {
    return item.destroy();
  })
  .then(item => {    
    res.redirect('/items');
  })
  .catch(err => console.log(err));
};

exports.getItemId = (req, res, next) => {
  const itemId = req.params.itemId;
  Item.findByPk(itemId)
    .then(item => {
      res.render('itemInfo', {
        item: item,
        pageTitle: 'Item Information',
        path: '/item-info'
      }); 
    })
    .catch(err => console.log(err));       
};