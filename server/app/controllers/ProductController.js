const Product = require("../models/ProductModel");

//READ
exports.getAllProducts = (req, res) => {
  Product.getAll((result) => res.send(result));
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

//CREATE
exports.add = (req, res) => {
  data = [
    req.body.MSHH,
    req.body.TenHH,
    req.body.Gia_Cu,
    req.body.Gia,
    req.body.SoLuongHang,
    req.body.Mota,
    req.body.HinhAnh,
    req.body.MaLoaiHang,
  ];
  Product.addProduct(data);
  //SetHeader fix err_http
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Add Product Successful");
};

//UPDATE
exports.updateById = (req, res) => {
  data = [
    req.body.MSHH,
    req.body.TenHH,
    req.body.Gia_Cu,
    req.body.Gia,
    req.body.SoLuongHang,
    req.body.Mota,
    req.body.HinhAnh,
    req.body.MaLoaiHang,
  ];
  Product.updateProduct(req.params.id, data);
  //SetHeader fix err_http
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update Product Successful");
};

//DELETE
exports.deleteById = (req, res) => {
  Product.deleteProduct(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete Product Successful");
};
