
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method="POST"><label>Name of the product</label><input type="text" name="title"/><label>Quantity</label><input type="number" name="quantity"/><button type="submit">Add</button></form>');
});

app.post('/product',(req, res, next)=>{
    console.log(req.body.title);
    console.log(req.body.quantity);
    res.redirect('/');
});

app.use('/',(req, res, next)=>{
    res.send('<h1>This is home page</h1>');
});


app.listen(4000);