const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require('./routes/shop');
const contactusRoutes = require('./routes/contact-us');
const successRoutes = require('./routes/success');

const errorPageController = require('./controllers/404');


app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);
app.use(successRoutes);
app.use(errorPageController.error404Page);

app.listen(4000);