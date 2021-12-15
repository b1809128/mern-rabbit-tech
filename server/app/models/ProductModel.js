const database = require('../database/connect');

const Product = (data)=>{
    this.MSHH = data.MSHH;
    this.TenHH = data.TenHH;
    this.Gia_Cu = data.Gia_Cu;
    this.Gia = data.Gia;
    this.SoLuongHang = data.SoLuongHang;
    this.Mota = data.Mota;
    this.HinhAnh = data.HinhAnh;
    this.MaLoaiHang = data.MaLoaiHang;
}

Product.getAll = (result) => {
    const sql = 'SELECT * FROM hanghoa';
    database.query(sql, (err,data) => {
        if (err) throw err;
        result(data);
    })
}

Product.getById = (id,result) => {
    const sql = `SELECT * FROM hanghoa where MSHH = '${id}'`;
    database.query(sql, (err,data) => {
        if (err) throw err;
        result(data);
    })
}

Product.getByGroup = (id,result) => {
    const sql = `SELECT * FROM hanghoa where MaLoaiHang = '${id}'`;
    database.query(sql, (err,data) => {
        if (err) throw err;
        result(data);
    })
}

Product.getSortHigh = (result) => {
    const sql = `SELECT * FROM hanghoa order by Gia desc`;
    database.query(sql, (err,data) => {
        if (err) throw err;
        result(data);
    })
}

Product.getSortLow = (result) => {
    const sql = `SELECT * FROM hanghoa order by Gia asc`;
    database.query(sql, (err,data) => {
        if (err) throw err;
        result(data);
    })
}
Product.getBestSale = (result) => {
    const sql = `SELECT * FROM hanghoa where SoLuongHang <= 10`;
    database.query(sql, (err,data) => {
        if (err) throw err;
        result(data);
    })
}
module.exports = Product;