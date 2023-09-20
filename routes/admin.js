const express = require("express");

const router = express.Router();

router.get('/add-product',(req, res, next)=>{
    res.send('<form action="/admin/add-product" method="POST"><label>Name of the product</label><input type="text" name="title"/><label>Quantity</label><input type="number" name="quantity"/><button type="submit">Add</button></form>');
});

router.post('/add-product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;

