const express = require("express");

const addProductsController = require("../controllers/shopPage");

const routes = express.Router();

routes.get("/", addProductsController.getAddProductsPage);

module.exports = routes;
