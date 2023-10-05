const express = require("express");

const routes = express.Router();

const successPageController = require("../controllers/success");

routes.get("/success", successPageController.getSuccesPage);

module.exports = routes;
