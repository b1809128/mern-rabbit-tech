const database = require("../database/connect");

const Order = (data) => {
  this.id_order = data.id_order;
  this.id = data.id;
  this.id_staff = data.id_staff;
  this.created_at = data.created_at;
  this.status = data.status;
};

Order.getAllOrders__Model = (result) => {
  const sql = "SELECT * FROM order_product";
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Order.getOnlyAllOrderById__Model = (id, result) => {
  const sql = `SELECT * FROM order_product where id_order=${id}`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Order.getOrderDetailsById__Model = (id, result) => {
  const sql = `SELECT * FROM details_order as a, hinhanh as b, hanghoa as c where a.id_order=${id} and a.MSHH = c.MSHH and b.MSHH = c.MSHH`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Order.addOrder__Model = (data) => {
  const sql =
    "INSERT INTO order_product(id_order,id,id_staff,status) values (?,?,1,'Not Yet')";
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Order.addOrderDetails__Model = (data) => {
  const sql = "INSERT INTO details_order(id_order,MSHH,SoLuong) values (?,?,?)";
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Order.updateOrderNotAll__Model = (id, data) => {
  const sql = `update order_product set ? where id_order='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Order.updateOrderDetailsNotAll__Model = (id, data) => {
  const sql = `update details_order set ? where id_order='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Order.deleteOrderById__Model = (id) => {
  const sql = `delete from order_product where id_order = '${id}'`;
  database.query(sql, (err, db) => {
    if (err) throw err;
  });
};

module.exports = Order;
