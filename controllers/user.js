const User = require('../models/user');

exports.addUser = (req, res, next) => {
    res.render('addUser', {
        pageTitle: 'Add New User',
        path: '/add-user'
    });
};