const database = require("../database/connect");

const Order = (data) => {
  this.SoDonDH = data.SoDonDH;
  this.MSKH = data.MSKH;
  this.MSNV = data.MSNV;
  this.NgayDH = data.NgayDH;
  this.NgayGH = data.NgayGH;
};

Order.getAll = (result) => {
  const sql = "SELECT * FROM dathang";
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Order.getOrderCustomerById = (id, result) => {
  const sql = `SELECT * FROM chitietdathang where SoDonDH=${id}`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Order.updateOrderNotAll = (id, data) => {
  const sql = `update dathang set ? where SoDonDH='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Order.deleteOrderById = (id) => {
  const sql = `delete from dathang where SoDonDH = '${id}'`;
  database.query(sql, (err, db) => {
    if (err) throw err;
  });
};

module.exports = Order;
