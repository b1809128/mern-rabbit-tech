const Customer = require("../models/CustomerModel");
const Order = require("../models/OrderModel");
const Product = require("../models/ProductModel");
const nodemailer = require("nodemailer");
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

//TODO: NodeMailer
exports.mailNewInfomation__Controller = (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "huyb1809128@student.ctu.edu.vn",
      pass: "A4#K8tBD",
    },
  });

  //Bat OFF de su gui mail
  //https://myaccount.google.com/lesssecureapps?gar=1&rapt=AEjHL4Ms34t8ay2ik7bMikD1S2aSjheiLbn5TJqFqnnohxkKH-K-ii5nvav1Kz37Y8i0NWRYVOnati4uBFbe67AGgQlwuvQkXA

  const mailOptions = {
    from: "huyb1809128@student.ctu.edu.vn",
    to: req.body.mailtext,
    subject: "Sending Email using Node JS",
    text: "QuocHuy, we're from Node JS to send you email by Quoc Huy Developer",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error: " + error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Send Mail Successful");
};

exports.mailClientInfomation__Controller = (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "huyb1809128@student.ctu.edu.vn",
      pass: "A4#K8tBD",
    },
  });

  //Bat OFF de su gui mail
  //https://myaccount.google.com/lesssecureapps?gar=1&rapt=AEjHL4Ms34t8ay2ik7bMikD1S2aSjheiLbn5TJqFqnnohxkKH-K-ii5nvav1Kz37Y8i0NWRYVOnati4uBFbe67AGgQlwuvQkXA

  const mailOptions = {
    from: "huyb1809128@student.ctu.edu.vn",
    to: "huyb1809128@student.ctu.edu.vn",
    subject: `Sending Email from ${req.body.mail}`,
    html: `<table style="width:100%">
    <tr>
      <th>Họ tên</th>
      <th>Email</th>
      <th>Số điện thoại</th>
      <th>Công ty</th>
      <th>Ghi chú</th>
    </tr>
    <tr>
      <td>${req.body.name}</td>
      <td>${req.body.mail}</td>
      <td>${req.body.phone}</td>
      <td>${req.body.company}</td>
      <td>${req.body.note}</td>
    </tr>
    
  </table>  
  `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error: " + error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Send Mail Successful");
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
