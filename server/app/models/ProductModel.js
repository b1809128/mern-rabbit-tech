const database = require("../database/connect");

const Product = (data) => {
  this.MSHH = data.MSHH;
  this.TenHH = data.TenHH;
  this.Gia_Cu = data.Gia_Cu;
  this.Gia = data.Gia;
  this.SoLuongHang = data.SoLuongHang;
  this.Mota = data.Mota;
  this.HinhAnh = data.HinhAnh;
  this.MaLoaiHang = data.MaLoaiHang;
};

Product.getAll = (result) => {
  const sql = "SELECT * FROM hanghoa";
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getById = (id, result) => {
  const sql = `SELECT * FROM hanghoa where MSHH = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getByGroup = (id, result) => {
  const sql = `SELECT * FROM hanghoa where MaLoaiHang = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getSortHigh = (result) => {
  const sql = `SELECT * FROM hanghoa order by Gia desc`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getSortLow = (result) => {
  const sql = `SELECT * FROM hanghoa order by Gia asc`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};
Product.getBestSale = (result) => {
  const sql = `SELECT * FROM hanghoa where SoLuongHang <= 10`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.addProduct = (data) => {
  const sql =
    "INSERT INTO hanghoa(MSHH,TenHH,Gia_Cu,Gia,SoLuongHang,Mota,HinhAnh,MaLoaiHang) values (?,?,?,?,?,?,?,?)";
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Product.updateProductById = (id, data) => {
  const sql = `update hanghoa set MSHH = ?,TenHH = ?,Gia_Cu = ?,Gia = ?,SoLuongHang = ?,Mota = ?,HinhAnh = ?,MaLoaiHang = ? where MSHH='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Product.updateProductNotAll = (id, data) => {
  const sql = `update hanghoa set ? where MSHH='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Product.deleteProductById = (id) => {
  const sql = `delete from hanghoa where MSHH = '${id}'`;
  database.query(sql, (err, db) => {
    if (err) throw err;
  });
};

/**
 {
    "MSHH":"as_004",
    "TenHH":"ASUS ZEN444",
    "Gia_Cu":"31000000",
    "Gia":"20000000",
    "SoLuongHang":"3",
    "HinhAnh":"tma",
    "Mota":"tma@123",
    "MaLoaiHang":"AS"
}
 */
module.exports = Product;
