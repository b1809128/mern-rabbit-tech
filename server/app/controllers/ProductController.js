const Product = require("../models/ProductModel");

//READ
exports.getAllProducts = (req, res) => {
  Product.getAllProducts((result) => res.send(result));
};


exports.details = (req, res) => {
  Product.getById(req.params.id, (result) => {
    res.send(result);
  });
};

exports.group = (req, res) => {
  Product.getByGroup(req.params.id, (result) => {
    res.send(result);
  });
};

exports.sortHigh = (req, res) => {
  Product.getSortHigh((result) => {
    res.send(result);
  });
};

exports.sortLow = (req, res) => {
  Product.getSortLow((result) => {
    res.send(result);
  });
};

exports.bestSale = (req, res) => {
  Product.getBestSale((result) => {
    res.send(result);
  });
};

//CREATE, UPDATE, DELETE in manage
