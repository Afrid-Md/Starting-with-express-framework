const path = require("path");

exports.getContactusPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact-us.html"));
};

exports.postContactusPage = (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
};
