const Customer = require("../models/CustomerModel");
const Product = require("../models/ProductModel");
const Staff = require("../models/StaffModel");
const Order = require("../models/OrderModel");
const path = require("path");
const multer = require("multer");
// Set The Storage Engine
const storage = multer.diskStorage({
  destination: "./images",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 10*1024*1024 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("myImage");

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

//READ
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
  Customer.getAll((result) => {
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
  Order.getOrderCustomerById(req.params.id, (result) => {
    res.send(result);
  });
};

//CREATE
exports.addProduct = (req, res) => {
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
      res.json(
         err
      );
    } else {
      if (req.file == undefined) {
        res.json(
          "Error: No File Selected!",
        );
      } else {
        res.json("File Uploaded!");
      }
    }
  });
};

//UPDATE
exports.updateProductById = (req, res) => {
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
  Product.updateProductById(req.params.id, data);
  //SetHeader fix err_http
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update Product Successful");
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
  Customer.updateCustomerById(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update User Successful");
};

exports.updateStaffById = (req, res) => {
  data = [
    req.body.MSNV,
    req.body.HoTenNV,
    req.body.ChucVu,
    req.body.DiaChi,
    req.body.SoDienThoai,
    req.body.User,
    req.body.Password,
  ];
  Staff.updateStaffById(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update User Successful");
};

//None Complete [add more column check already]
exports.updateOrderById = (req, res) => {
  data = [req.body.check];
  Order.updateOrderById(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update User Successful");
};

exports.updateProductNotAll = (req, res) => {
  data = [req.body];
  Product.updateProductNotAll(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update Product Successful");
};

exports.updateUserNotAll = (req, res) => {
  data = [req.body];
  Customer.updateCustomerNotAll(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update User Successful");
};

exports.updateStaffNotAll = (req, res) => {
  data = [req.body];
  Staff.updateStaffNotAll(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update Staff Successful");
};

exports.updateOrderNotAll = (req, res) => {
  data = [req.body];
  Order.updateOrderNotAll(req.params.id, data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Update User Successful");
};

//DELETE
exports.deleteProductById = (req, res) => {
  Product.deleteProductById(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete User Successful");
};

exports.deleteUserById = (req, res) => {
  Customer.deleteCustomerById(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete User Successful");
};

exports.deleteStaffById = (req, res) => {
  Staff.deleteStaffById(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete User Successful");
};

exports.deleteOrderById = (req, res) => {
  Order.deleteOrderById(req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Delete User Successful");
};
