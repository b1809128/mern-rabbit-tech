const Product = require("../models/ProductModel");

//READ
exports.getAllProducts = (req, res) => {
  //Su dung query parameters de loc du lieu
  if (req.query.sortBy == "PRICE_ASC") {
    Product.getSortByPriceASC((result) => res.send(result));
  } else if (req.query.sortBy == "PRICE_DESC") {
    Product.getSortByPriceDESC((result) => res.send(result));
  } else if (req.query.sortBy == "NAME_ASC") {
    Product.getSortByNameASC((result) => res.send(result));
  } else if (req.query.sortBy == "NAME_DESC") {
    Product.getSortByNameDESC((result) => res.send(result));
  } else {
    Product.getAllProducts((result) => res.send(result));
  }
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

exports.sortByPriceASC = (req, res) => {
  Product.getSortByPriceASC((result) => {
    res.send(result);
  });
};

exports.sortByPriceDESC = (req, res) => {
  Product.getSortByPriceDESC((result) => {
    res.send(result);
  });
};

exports.sortByNameASC = (req, res) => {
  Product.getSortByNameASC((result) => {
    res.send(result);
  });
};

exports.sortByNameDESC = (req, res) => {
  Product.getSortByNameDESC((result) => {
    res.send(result);
  });
};

exports.bestSale = (req, res) => {
  Product.getBestSale((result) => {
    res.send(result);
  });
};

//CREATE, UPDATE, DELETE in manage
