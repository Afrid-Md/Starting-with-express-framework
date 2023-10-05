const path = require("path");

exports.getAddProductsPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};
