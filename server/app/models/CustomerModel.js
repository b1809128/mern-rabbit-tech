const database = require("../database/connect");

const Customer = (data) => {
  this.id = data.id;
  this.user = data.user;
  this.password = data.password;
  this.role = data.role;
};

Customer.getAllCustomers__Model = (result) => {
  const sql = "SELECT * FROM khachhang";
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Customer.getAllHaveAddressById__Model = (id, result) => {
  const sql = `SELECT * FROM  khachhang INNER JOIN diachi ON khachhang.id = diachi.id WHERE khachhang.id = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Customer.getAllOrderCustomerById__Model = (id, result) => {
  const sql = `SELECT * FROM dathang where id = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Customer.getDetailsOrderById__Model = (id, result) => {
  const sql = `SELECT * FROM chitietdathang where id_order = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Customer.addCustomer__Model = (data) => {
  const sql =
    "INSERT INTO khachhang(id,user,password,role) values (?,?,?,'khachhang')";
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Customer.addAddressCustomer__Model = (data) => {
  const sql =
    "INSERT INTO diachi(id, fullname,phonenumber,email,addressdetails) values (?,?,?,?,?)";
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Customer.updateCustomerById__Model = (id, data) => {
  const sql = `update khachhang set id=?,user=?,password=?,role=? where id='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Customer.updateCustomerNotAll__Model = (id, data) => {
  const sql = `update khachhang set ? where id='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Customer.updateAddressAll__Model = (id, data) => {
  const sql = `update diachi set fullname=?,phonenumber=?,email=?,addressdetails=? where id='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Customer.deleteCustomerById__Model = (id) => {
  const sql = `delete from khachhang where id='${id}'`;
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
