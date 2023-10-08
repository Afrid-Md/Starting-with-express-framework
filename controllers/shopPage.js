const path = require("path");
const Product = require('../models/product');

exports.getAddProductsPage = (req, res, next) => {
  Product.fetchAll((produts)=>{console.log(produts)});
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};
