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

exports.getUsers = (req, res, next) => {
    User.findAll()
    .then(users => {
        res.render('users', {
            users: users,
            pageTitle: 'List of users',
            path: '/users'
        });
    }).catch(err => console.log(err));
};

exports.getUserId = (req, res, next) => {
    const userId = req.params.userId;
    User.findByPk(userId)
    .then(user => {        
        res.render('userDetails', {
            user: user,
            pageTitle: 'Details about user',
            path: '/user-details'
        });
    }).catch(err => console.log(err));
};

exports.deleteUser = (req, res, next) => {
    const userId = req.body.userId;
    User.findByPk(userId)
    .then(user => {
        return user.destroy();
    })
    .then(user => {
        res.redirect('/users')
    })
    .catch(err => console.log(err));
};

