const Customer = require("../models/CustomerModel");
const Product = require("../models/ProductModel");
const Order = require("../models/OrderModel");
const Images = require("../models/ImagesModel");

//TODO: READ
exports.getAPICustomers__Controller = (req, res) => {
  Customer.getAllCustomers__Model((result) => res.send(result));
  res.setHeader("Content-Type", "application/json");
};

exports.getAllProducts__Controller = (req, res) => {
  Product.getAllProducts__Model((result) => {
    res.send(result);
  });
};

exports.getAllBrandProducts__Controller = (req, res) => {
  Product.getAllBrandProducts__Model((result) => {
    res.send(result);
  });
};

exports.getAllStaff = (req, res) => {
  Staff.getAll((result) => {
    res.send(result);
  });
};

exports.getAllOrder__Controller = (req, res) => {
  Order.getAllOrders__Model((result) => {
    res.send(result);
  });
};

exports.getOnlyAllOrderById__Controller = (req, res) => {
  Order.getOnlyAllOrderById__Model(req.params.id, (result) => {
    res.send(result);
  });
};

exports.getOrderDetailsById__Controller = (req, res) => {
  Order.getOrderDetailsById__Model(req.params.id, (result) => {
    res.send(result);
  });
};

exports.getTableCustomerSearch__Controller = (req, res) => {
  Customer.getAllCustomers__Model((result) => {
    const { q } = req.query;
    const keys = ["id", "user", "role"];
    const search = (result) => {
      return result.filter((data) =>
        keys.some((item) => data[item].toString().toLowerCase().includes(q))
      );
    };

    q ? res.json(search(result)) : res.json(result);
  });
};

exports.getTableProductSearch__Controller = (req, res) => {
  Product.getAllProducts__Model((result) => {
    const { q } = req.query;
    const keys = ["MSHH", "TenHH", "SoLuongHang", "Gia", "MaLoaiHang", "tags"];
    const search = (result) => {
      return result.filter((data) =>
        keys.some((item) => data[item].toString().toLowerCase().includes(q))
      );
    };

    q ? res.json(search(result)) : res.json(result);
  });
};

exports.getTableOrderSearch__Controller = (req, res) => {
  Order.getAllOrders__Model((result) => {
    const { q } = req.query;
    const keys = ["id_order", "id", "id_staff", "created_at", "status"];
    const search = (result) => {
      return result.filter((data) =>
        keys.some((item) => data[item].toString().toLowerCase().includes(q))
      );
    };

    q ? res.json(search(result)) : res.json(result);
  });
};

//TODO:CREATE
exports.addProduct__Controller = (req, res) => {
  data = [
    req.body.MSHH,
    req.body.TenHH,
    req.body.Gia,
    req.body.SoLuongHang,
    JSON.stringify(req.body.Mota),
    req.body.MaLoaiHang,
    req.body.tags,
  ];
  Product.addProduct__Model(data);
  //SetHeader fix err_http
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Add Product Successful");
};

exports.addStaff = (req, res) => {
  data = [
    req.body.MSNV,
    req.body.HoTenNV,
    req.body.ChucVu,
    req.body.DiaChi,
    req.body.SoDienThoai,
    req.body.User,
    req.body.Password,
  ];
  Staff.addStaff(data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Add User Successful");
};

exports.uploadImage = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.json(err);
    } else {
      if (req.file == undefined) {
        res.json("Error: No File Selected!");
      } else {
        res.json("File Uploaded!");
      }
    }
  });
};

//FIXME: Must be stringify the JSON data after push to mysql
exports.uploadImageJson = (req, res) => {
  data = [req.body.MSHH, JSON.stringify(req.body.PATH)];
  Images.uploadImageJson(data);
  // res.send(data);
  res.status(200).json("Images Uploaded Successful");
};

//TODO: UPDATE
exports.updateProductById__Controller = (req, res) => {
  data = [
    req.body.MSHH,
    req.body.TenHH,
    req.body.Gia,
    req.body.SoLuongHang,
    JSON.stringify(req.body.Mota),
    req.body.MaLoaiHang,
    req.body.tags,
  ];
  Product.updateProductById__Model(req.params.id, data);
  //SetHeader fix err_http
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update Product Successful");
};

exports.updateProductImageById__Controller = (req, res) => {
  data = [JSON.stringify(req.body.PATH)];
  Images.updateProductImageById__Model(req.params.id, data);
  //SetHeader fix err_http
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update Product Images Successful");
};

//FIXME: [add more column check already]
exports.updateOrderById__Controller = (req, res) => {
  data = [req.body.check];
  Order.updateOrderById(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update User Successful");
};

exports.updateProductNotAll__Controller = (req, res) => {
  data = [req.body];
  Product.updateProductNotAll__Model(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update Product Successful");
};

exports.updateCustomerNotAll__Controller = (req, res) => {
  data = [req.body];
  Customer.updateCustomerNotAll__Model(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update Customer Successful");
};

exports.updateOrderNotAll__Controller = (req, res) => {
  data = [req.body];
  Order.updateOrderNotAll__Model(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update Order Successful");
};

exports.updateOrderDetailsNotAll__Controller = (req, res) => {
  data = [req.body];
  Order.updateOrderDetailsNotAll__Model(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update Order Successful");
};

//TODO: DELETE
exports.deleteProductById__Controller = (req, res) => {
  Product.deleteProductById__Model(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete Product Successful");
};

exports.deleteCustomerById__Controller = (req, res) => {
  Customer.deleteCustomerById__Model(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete User Successful");
};

exports.deleteOrderById__Controller = (req, res) => {
  Order.deleteOrderById__Model(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete Order Successful");
};
