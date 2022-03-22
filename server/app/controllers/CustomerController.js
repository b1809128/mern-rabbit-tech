const Customer = require("../models/CustomerModel");
const Order = require("../models/OrderModel");
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
  data = [req.body.id, req.body.user, req.body.password, req.body.role];
  Customer.addCustomer(data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Add User Successful");
};

exports.addAddressCustomer = (req, res) => {
  data = [
    req.body.id,
    req.body.fullname,
    req.body.phonenumber,
    req.body.email,
    req.body.addressdetails,
  ];
  Customer.addAddressCustomer(data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Add Address Successful");
};

exports.addOrder = (req, res) => {
  const id_order = Math.floor(Math.random() * 10000)+Math.floor(Math.random() * 100)
  const data = [id_order, req.params.id];
  Order.addOrder(data);
  // console.log(data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({id_order: id_order});
};

exports.addOrderDetails = (req, res) => {
  for (var key in req.body) {
    var array = [];
    if (req.body.hasOwnProperty(key)) {
      array.push(
        req.body[key].id_order,
        req.body[key].MSHH,
        req.body[key].SoLuong
      );
      // console.log(req.body[key].id_order,req.body[key].MSHH,req.body[key].SoLuong);
      // console.log(array);
      Order.addOrderDetails(array);
    }
  }
  res.status(200).json("Add Order-Details Successful");
};

//UPDATE
exports.updatePutCustomerById = (req, res) => {
  data = [req.body.id, req.body.user, req.body.password, req.body.role];
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
