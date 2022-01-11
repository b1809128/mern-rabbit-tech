const database = require("../database/connect");

const Customer = (data) => {
  this.MSKH = data.MSKH;
  this.HoTenKH = data.HoTenKH;
  this.TenCongTy = data.TenCongTy;
  this.SoDienThoai = data.SoDienThoai;
  this.Email = data.Email;
  this.User = data.User;
  this.Password = data.Password;
};

Customer.getAll = (result) => {
  const sql = "SELECT * FROM khachhang";
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Customer.getById = (id, result) => {
  const sql = `SELECT * FROM khachhang where User = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Customer.getAllOrderCustomerById = (id, result) => {
  const sql = `SELECT * FROM dathang where MSKH = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Customer.getDetailsOrderById = (id, result) => {
  const sql = `SELECT * FROM chitietdathang where SoDonDH = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Customer.addCustomer = (data) => {
  const sql =
    "INSERT INTO khachhang(MSKH,HoTenKH,TenCongTy,SoDienThoai,Email,User,Password) values (?,?,?,?,?,?,?)";
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Customer.updateCustomerById = (id, data) => {
  const sql = `update khachhang set MSKH=?,HoTenKH=?,TenCongTy=?,SoDienThoai=?,Email=?,User=?,Password=? where MSKH='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Customer.updateCustomerNotAll = (id, data) => {
  const sql = `update khachhang set ? where MSKH='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Customer.deleteCustomerById = (id) => {
  const sql = `delete from khachhang where MSKH='${id}'`;
  database.query(sql, (err, db) => {
    if (err) throw err;
  });
};
/**
 {
    "MSKH":"KH007",
    "HoTenKH":"NHQH",
    "TenCongTy":"TMA",
    "SoDienThoai":"001001001",
    "Email":"tma@gmail.com",
    "User":"tma",
    "Password":"tma@123"
}
 */
module.exports = Customer;
