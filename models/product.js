const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "../", "data", "products.json");

const readFileData = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Produt {
  constructor(t) {
    this.title = t;
  }

  save() {
    readFileData((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    readFileData(cb);
  }
};
