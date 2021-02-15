exports.addItem = (req, res, next)=> {
  res.render('addItem', {
    pageTitle: 'Add Item',
    path: '/add-item'
  });
};