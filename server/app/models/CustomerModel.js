const database = require("../database/connect");

const Customer = (data) => {
  this.id = data.id;
  this.user = data.user;
  this.password = data.password;
  this.role = data.role;
};

Customer.getAll = (result) => {
  const sql = "SELECT * FROM customer";
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Customer.getById = (id, result) => {
  const sql = `SELECT * FROM customer where id = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Customer.getAllOrderCustomerById = (id, result) => {
  const sql = `SELECT * FROM customer where id = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Customer.getDetailsOrderById = (id, result) => {
  const sql = `SELECT * FROM details_order where id_order = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Customer.addCustomer = (data) => {
  const sql =
    "INSERT INTO customer(id,user,password,role) values (?,?,?,'customer')";
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Customer.updatePutCustomerById = (id, data) => {
  const sql = `update customer set id=?,user=?,password=?,role=? where id='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Customer.updateCustomerNotAll = (id, data) => {
  const sql = `update customer set ? where user='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Customer.deleteCustomerById = (id) => {
  const sql = `delete from customer where id='${id}'`;
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
