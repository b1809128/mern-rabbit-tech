const database = require("../database/connect");

const Auth = (data) => {
  this.user = data.user;
  this.password = data.password;
  this.role = data.role;
};

Auth.createUser = (data) => {
  const sql = "INSERT INTO khachhang(user,password,role) VALUES (?,?,'customer')";
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Auth.getAll = (result) => {
  const sql = "SELECT * FROM khachhang";
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Auth.checkLoginAuth = (user, result) => {
  const sql = `select * from khachhang where user='${user}'`;
  database.query(sql, (err, db) => {
    if (err) throw err;
    result(db);
  });
};

module.exports = Auth;
