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
    if (typeof req.session.cart === "undefined") {
      req.session.cart = [];
      req.session.cart.push({
        MSHH: slug,
        SoLuongHang: 1,
        Gia: result.map((data) => data.Gia),
      });
    } else {
      var cart = req.session.cart;
      var newItem = true;
      for (let i = 0; i < cart.length; i++) {
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
    // res.cookie("cart", array, { expire: 400000 + Date.now() });
    res.send(req.session.cart);
    console.log(req.session.cart);
  });
};

exports.productSetCookie = (req, res) => {
  res.cookie("cart", "value", { expire: 400000 + Date.now() });
  res.send(req.cookies);
};

exports.getCheckOut = (req, res) => {
  res.send(req.session.cart);
};

exports.testAPI = (req, res) => {
  const data = [req.body.cart]
  res.send(data);
  console.log(data);
};
