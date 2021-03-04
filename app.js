const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const pageNotFound = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const addItemRoute = require('./routes/item');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(addItemRoute);

app.use(pageNotFound.notFound);

sequelize
.sync()
.then(result => {    
    app.listen(3000);
})
.catch(err => {
    console.log(err);
})

