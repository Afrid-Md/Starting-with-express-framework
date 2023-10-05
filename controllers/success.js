const path = require("path");

exports.getSuccesPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "success.html"));
};
