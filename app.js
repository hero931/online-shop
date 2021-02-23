const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const pageNotFound = require('./controllers/error');
const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const addItemRoute = require('./routes/item');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(addItemRoute);

app.use(pageNotFound.notFound);

app.listen(3000);