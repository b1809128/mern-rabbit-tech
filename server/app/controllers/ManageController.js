const Customer = require("../models/CustomerModel");
const Product = require("../models/ProductModel");
const Staff = require("../models/StaffModel")
const Order = require("../models/OrderModel");
exports.getAPI = (req, res) => {
  Customer.getAll((result) => res.send(result));
  res.setHeader("Content-Type", "application/json");
};

exports.getAllProduct = (req, res) => {
  Product.getAll((result) => {
    res.send(result);
  });
};

exports.getAllUser = (req, res) => {
  Customer.getAll( (result) => {
    res.send(result);
  });
};
exports.getAllStaff = (req, res) => {
  Staff.getAll((result) => {
    res.send(result);
  });
};
exports.getAllOrder = (req, res) => {
  Order.getAll((result) => {
    res.send(result);
  });
};

exports.getOrderDetails = (req, res) => {
  Customer.getAllOrderCustomerById(req.params.id, (result) => {
    res.send(result);
  });
};

exports.addProduct = (req, res) => {
  data = [
    req.body.MSHH,
    req.body.TenHH,
    req.body.TenCongTy,
    req.body.SoDienThoai,
    req.body.Email,
    req.body.User,
    req.body.Password,
  ];
  Customer.addCustomer(data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Add User Successful");
};

exports.addStaff = (req, res) => {
  data = [
    req.body.MSKH,
    req.body.HoTenKH,
    req.body.TenCongTy,
    req.body.SoDienThoai,
    req.body.Email,
    req.body.User,
    req.body.Password,
  ];
  Customer.addCustomer(data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Add User Successful");
};

exports.updateProductById = (req, res) => {
  data = [
    req.body.MSKH,
    req.body.HoTenKH,
    req.body.TenCongTy,
    req.body.SoDienThoai,
    req.body.Email,
    req.body.User,
    req.body.Password,
  ];
  Customer.updateUserById(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update User Successful");
};

exports.updateUserById = (req, res) => {
  data = [
    req.body.MSKH,
    req.body.HoTenKH,
    req.body.TenCongTy,
    req.body.SoDienThoai,
    req.body.Email,
    req.body.User,
    req.body.Password,
  ];
  Customer.updateOrderById(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update User Successful");
};
exports.updateStaffById = (req, res) => {
  data = [
    req.body.MSKH,
    req.body.HoTenKH,
    req.body.TenCongTy,
    req.body.SoDienThoai,
    req.body.Email,
    req.body.User,
    req.body.Password,
  ];
  Customer.updateCustomerById(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update User Successful");
};

exports.updateOrderById = (req, res) => {
  data = [
    req.body.MSKH,
    req.body.HoTenKH,
    req.body.TenCongTy,
    req.body.SoDienThoai,
    req.body.Email,
    req.body.User,
    req.body.Password,
  ];
  Customer.updateCustomerById(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update User Successful");
};

exports.deleteProductById = (req, res) => {
  Customer.deleteCustomerById(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete User Successful");
};

exports.deleteUserById = (req, res) => {
  Customer.deleteCustomerById(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete User Successful");
};

exports.deleteStaffById = (req, res) => {
  Customer.deleteCustomerById(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete User Successful");
};

exports.deleteOrderById = (req, res) => {
  Customer.deleteCustomerById(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete User Successful");
};
