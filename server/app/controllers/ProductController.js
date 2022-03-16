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
    Product.getAll((result) => res.send(result));
  }
};

exports.details = (req, res) => {
  Product.getDetailsById(req.params.id, (result) => {
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

exports.search = (req, res) => {
  const tagName = req.query.tag;
  Product.getSearch(tagName, (result) => {
    res.send(result);
  });
};

//CREATE, UPDATE, DELETE in manage

//Create

exports.addToCart = (req, res) => {
  var slug = req.params.slug;
  Product.getDetailsById(slug, (result) => {
    if (typeof req.cookies.cart === "undefined") {
      req.cookies.cart = [];
      req.cookies.cart.push({
        MSHH: slug,
        SoLuongHang: 1,
        Gia: result.map((data) => data.Gia),
      });
    } else {
      var cart = req.cookies.cart;
      var newItem = true;
      for (let i = 0; i < cart.lenght; i++) {
        if (cart[i].MSHH === slug) {
          cart[i].SoLuongHang++;
          newItem = false;
          break;
        }
      }
      if (newItem) {
        cart.push({
          MSHH: slug,
          SoLuongHang: 1,
          Gia: result.map((data) => data.Gia),
        });
      }
    }
    res.send(req.cookies.cart);
    console.log(req.cookies.cart);
  });
};

exports.getCheckOut = (req, res) => {
  res.send(req.cookies.cart);
};
