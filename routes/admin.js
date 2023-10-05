const express = require("express");

const router = express.Router();

const addProductsPageControllers = require("../controllers/add-products");

router.get("/add-product", addProductsPageControllers.getAddProducts);

router.post("/add-product", addProductsPageControllers.postAddProducts);

module.exports = router;
