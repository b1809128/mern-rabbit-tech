const Customer = require("../models/CustomerModel");

//READ
exports.getAllHaveAddressById = (req, res) => {
  Customer.getAllHaveAddressById(req.params.id, (result) => {
    res.send(result);
  });
};

exports.getAllOrderCustomerById = (req, res) => {
  Customer.getAllOrderCustomerById(req.params.id, (result) => {
    res.send(result);
  });
};

exports.getDetailsOrderById = (req, res) => {
  Customer.getDetailsOrderById(req.params.id, (result) => {
    res.send(result);
  });
};

//CREATE
exports.addCustomer = (req, res) => {
  data = [
    req.body.id,
    req.body.user,
    req.body.password,
    req.body.role,
  ];
  Customer.addCustomer(data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Add User Successful");
};

//UPDATE
exports.updatePutCustomerById = (req, res) => {
  data = [
    req.body.id,
    req.body.user,
    req.body.password,
    req.body.role,
  ];
  Customer.updatePutCustomerById(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update User Successful");
};

//DELETE
exports.deleteCustomerById = (req, res) => {
  Customer.deleteCustomerById(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete User Successful");
};
