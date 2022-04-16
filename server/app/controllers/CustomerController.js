const Customer = require("../models/CustomerModel");
const Order = require("../models/OrderModel");
const Product = require("../models/ProductModel");
//READ
exports.getAllHaveAddressById__Controller = (req, res) => {
  Customer.getAllHaveAddressById__Model(req.params.id, (result) => {
    res.send(result);
  });
};

exports.getAllOrderCustomerById__Controller = (req, res) => {
  Customer.getAllOrderCustomerById__Model(req.params.id, (result) => {
    res.send(result);
  });
};

exports.getDetailsOrderById__Controller = (req, res) => {
  Customer.getDetailsOrderById__Model(req.params.id, (result) => {
    res.send(result);
  });
};

//CREATE
exports.addCustomer__Controller = (req, res) => {
  data = [req.body.id, req.body.user, req.body.password, req.body.role];
  Customer.addCustomer__Model(data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Add User Successful");
};

exports.addAddressCustomer__Controller = (req, res) => {
  data = [
    req.body.id,
    req.body.fullname,
    req.body.phonenumber,
    req.body.email,
    req.body.addressdetails,
  ];
  Customer.addAddressCustomer__Model(data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Add Address Successful");
};

exports.addOrder__Controller = (req, res) => {
  const id_order =
    Math.floor(Math.random() * 10000) + Math.floor(Math.random() * 100);
  const data = [id_order, req.params.id];
  Order.addOrder__Model(data);
  // console.log(data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ id_order: id_order });
};

exports.addOrderDetails__Controller = (req, res) => {
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
      Order.addOrderDetails__Model(array);
      updateQuantityProductCallBack(array);
    }
  }
  res.status(200).json("Add Order-Details Successful");
};

exports.addTestOrderDetails__Controller = (req, res) => {
  for (var key in req.body) {
    var array = [];
    if (req.body.hasOwnProperty(key)) {
      array.push(
        req.body[key].id_order,
        req.body[key].MSHH,
        req.body[key].SoLuong
      );
      Product.getAllProducts__Model((result) => {
        let test = result.filter((data) => data.MSHH === array[1]);
        console.log({ SoLuongHang: test[0].SoLuongHang - array[2] });
        // console.log({length:test.length});
        // Product.updateProductNotAll(test[0].MSHH, {
        //   SoLuongHang: test[0].SoLuongHang - array[2],
        // });
        // console.log(test[0].SoLuongHang);
      });
      // updateQuantityProductCallBack();
      // console.log(array);
      // console.log("break");
    }
  }
  res.status(200).json("Add Order-Details Successful");
};

const updateQuantityProductCallBack = (array) => {
  Product.getAllProducts__Model((result) => {
    const test = result.filter((data) => data.MSHH === array[1]);
    Product.updateProductNotAll__Model(test[0].MSHH, {
      SoLuongHang: test[0].SoLuongHang - array[2],
    });
  });
};

//UPDATE
exports.updateCustomerById__Controller = (req, res) => {
  data = [req.body.id, req.body.user, req.body.password, req.body.role];
  Customer.updateCustomerById__Model(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update User Successful");
};

exports.updateAddressById__Controller = (req, res) => {
  data = [
    req.body.fullname,
    req.body.phonenumber,
    req.body.email,
    req.body.addressdetails,
  ];
  Customer.updateAddressAll__Model(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Add Address Successful");
};

//DELETE
exports.deleteCustomerById__Controller = (req, res) => {
  Customer.deleteCustomerById__Model(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete User Successful");
};
