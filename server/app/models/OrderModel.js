const database = require("../database/connect");

const Order = (data) => {
    this.SoDonDH = data.SoDonDH;
    this.MSKH = data.MSKH;
    this.MSNV = data.MSNV;
    this.NgayDH = data.NgayDH;
    this.NgayGH = data.NgayGH;
}

Order.getAll = (result) => {
    const sql = "SELECT * FROM dathang"
    database.query(sql,(err,data) => {
        if (err) throw err;
        result(data);
    })
}

module.exports = Order;