const database = require("../database/connect");

const Staff = (data) => {
  this.MSNV = data.MSNV;
  this.HoTenNV = data.HoTenNV;
  this.ChucVu = data.ChucVu;
  this.DiaChi = data.DiaChi;
  this.SoDienThoai = data.SoDienThoai;
  this.User = data.User;
  this.Password = data.Password;
};


Staff.getAll = (result) => {
    const sql = "SELECT * FROM nhanvien"
    database.query(sql,(err,data) => {
        if (err) throw err;
        result(data);
    })
}

module.exports = Staff;
