const Customer = require("../models/CustomerModel");
exports.getList = (req, res) => {
  Customer.getAll((result) => res.send(result));
};

exports.details = (req, res) => {
  Customer.getById(req.params.id, (result) => {
    res.send(result);
  });
};

exports.orderCustomerId = (req, res) => {
  Customer.getAllOrderCustomerById(req.params.id, (result) => {
    res.send(result);
  });
};

exports.orderById = (req, res) => {
  Customer.getDetailsOrderById(req.params.id, (result) => {
    res.send(result);
  });
};

exports.add = (req, res) => {
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

exports.updateById = (req, res) => {
  data = [
    req.body.MSKH,
    req.body.HoTenKH,
    req.body.TenCongTy,
    req.body.SoDienThoai,
    req.body.Email,
    req.body.User,
    req.body.Password,
  ];
  Customer.updateCustomerById(req.params.id,data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update User Successful");
};


exports.deleteById = (req, res) => {
  Customer.deleteCustomerById(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete User Successful");
};
