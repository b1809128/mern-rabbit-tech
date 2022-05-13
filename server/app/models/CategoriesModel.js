const database = require("../database/connect");

const Category = (data) => {
  this.MaLoaiHang = data.MaLoaiHang;
  this.TenLoaiHang = data.TenLoaiHang;
};

Category.getAllCategories__Model = (result) => {
  const sql = "SELECT * FROM loaihanghoa";
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Category.addCategories__Model = (data) => {
  const sql = "INSERT INTO loaihanghoa(MaLoaiHang,TenLoaiHang) values (?,?)";
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Category.deleteCategories__Model = (id) => {
  const sql = `delete from loaihanghoa where MaLoaiHang = '${id}'`;
  database.query(sql, (err, db) => {
    if (err) throw err;
  });
};

module.exports = Category;
