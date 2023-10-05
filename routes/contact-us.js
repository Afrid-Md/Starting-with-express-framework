const express = require("express");

const router = express.Router();

const contactusPageController = require("../controllers/contactUs");

router.get("/contact-us", contactusPageController.getContactusPage);

router.post("/contact-us", contactusPageController.postContactusPage);

module.exports = router;
