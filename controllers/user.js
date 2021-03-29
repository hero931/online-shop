const User = require('../models/user');

exports.addUser = (req, res, next) => {
    res.render('addUser', {
        pageTitle: 'Add User',        
        path: '/add-user'
    });
};

exports.postUser = (req, res, next) => {
    const imageUrl = req.body.imageUrl;
    const userName = req.body.userName;
    const fullName = req.body.fullName;    
    User.create({
        imageUrl: imageUrl,
        userName: userName,
        fullName: fullName        
    }).then(result => {
        res.redirect('/users');
    }).catch(err => {
        console.log(err);
    });
};

