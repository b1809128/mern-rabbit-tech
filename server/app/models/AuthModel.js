const database = require("../database/connect");

const Auth = (data) => {
  this.user = data.user;
  this.password = data.password;
  this.role = data.role;
};

Auth.createUser = (data) => {
  const sql = "INSERT INTO customer(user,password,role) VALUES (?,?,'customer')";
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Auth.checkLoginAuth = (user, result) => {
  const sql = `select * from customer where user='${user}'`;
  database.query(sql, (err, db) => {
    if (err) throw err;
    result(db);
  });
};

module.exports = Auth;
