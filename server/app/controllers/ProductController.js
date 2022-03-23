const Product = require("../models/ProductModel");

//READ
exports.getAllProducts__Controller = (req, res) => {
  //Su dung query parameters de loc du lieu
  if (req.query.sortBy == "PRICE_ASC") {
    Product.getSortByPriceASC__Model((result) => res.send(result));
  } else if (req.query.sortBy == "PRICE_DESC") {
    Product.getSortByPriceDESC__Model((result) => res.send(result));
  } else if (req.query.sortBy == "NAME_ASC") {
    Product.getSortByNameASC__Model((result) => res.send(result));
  } else if (req.query.sortBy == "NAME_DESC") {
    Product.getSortByNameDESC__Model((result) => res.send(result));
  } else {
    Product.getAllProducts__Model((result) => res.send(result));
  }
};

exports.getProductDetailsById__Controller = (req, res) => {
  Product.getProductDetailsById__Model(req.params.id, (result) => {
    res.send(result);
  });
};

exports.getProductByGroup__Controller = (req, res,) => {
  Product.getProductByGroup__Model(req.params.id, (result) => {
    res.send(result);
  });
};

exports.sortByPriceASC__Controller = (req, res) => {
  Product.getSortByPriceASC__Model((result) => {
    res.send(result);
  });
};

exports.sortByPriceDESC__Controller = (req, res) => {
  Product.getSortByPriceDESC__Model((result) => {
    res.send(result);
  });
};

exports.sortByNameASC__Controller = (req, res) => {
  Product.getSortByNameASC__Model((result) => {
    res.send(result);
  });
};

exports.sortByNameDESC__Controller = (req, res) => {
  Product.getSortByNameDESC__Model((result) => {
    res.send(result);
  });
};

exports.getProductBestSale__Controller = (req, res) => {
  Product.getProductBestSale__Model((result) => {
    res.send(result);
  });
};

exports.getProductSearch__Controller = (req, res) => {
  const tagName = req.query.tag;
  Product.getProductSearch__Model(tagName, (result) => {
    res.send(result);
  });
};

//CREATE, UPDATE, DELETE in manage

//TEST
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

