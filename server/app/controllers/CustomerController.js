const Customer = require("../models/CustomerModel");
exports.getList = (req, res) => {
  Customer.getAll((result) => res.send(result));
};

exports.details = (req, res) => {
  Customer.getById(req.params.id, (result) => {
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
