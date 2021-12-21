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
  const sql = "SELECT * FROM nhanvien";
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Staff.addStaff = (data) => {
  const sql =
    "INSERT INTO nhanvien(MSNV,HoTenNV,ChucVu,DiaChi,SoDienThoai,User,Password) values (?,?,?,?,?,?,?)";
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Staff.updateStaffById = (id, data) => {
  const sql = `update nhanvien set MSNV=?,HoTenNV=?,ChucVu=?,DiaChi=?,SoDienThoai=?,User=?,Password=? where MSNV='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Staff.updateStaffNotAll = (id, data) => {
  const sql = `update nhanvien set ? where MSNV='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Staff.deleteStaffById = (id) => {
  const sql = `delete from nhanvien where MSNV='${id}'`;
  database.query(sql, (err, db) => {
    if (err) throw err;
  });
};

/*
{
    "MSNV":"NV001",
    "HoTenNV":"Nguyen Thi Thao Anh",
    "ChucVu":"Director",
    "DiaChi":"001001001",
    "SoDienThoai":"tma@gmail.com",
    "User":"ad",
    "Password":"ad"
}
*/

module.exports = Staff;
