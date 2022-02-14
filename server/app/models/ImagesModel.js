const database = require("../database/connect");

const Images = (data) => {
  this.ID = data.ID;
  this.MSHH = data.MSHH;
  this.PATH = data.PATH;
};

Images.uploadImageJson = (data) => {
  const sql = "INSERT INTO hinhanh(MSHH,PATH) values (?,?)";
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Images.updateProductImageById = (id, data) => {
  const sql = `update hinhanh set PATH=? where MSHH='${id}'`;
  database.query(sql, data, (err, db) => {
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
module.exports = Images;
