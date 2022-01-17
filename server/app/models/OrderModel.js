const database = require("../database/connect");

const Order = (data) => {
  this.id_order = data.id_order;
  this.id = data.id;
  this.id_staff = data.id_staff;
  this.created_at = data.created_at;
  
};

Order.getAll = (result) => {
  const sql = "SELECT * FROM order_product";
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Order.getOrderCustomerById = (id, result) => {
  const sql = `SELECT * FROM details_order where id_order=${id}`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Order.updateOrderNotAll = (id, data) => {
  const sql = `update order_product set ? where id_order='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Order.deleteOrderById = (id) => {
  const sql = `delete from order_product where id_order = '${id}'`;
  database.query(sql, (err, db) => {
    if (err) throw err;
  });
};

module.exports = Order;
