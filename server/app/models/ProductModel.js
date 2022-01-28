const database = require("../database/connect");

const Product = (data) => {
  this.MSHH = data.MSHH;
  this.TenHH = data.TenHH;
  this.Gia = data.Gia;
  this.SoLuongHang = data.SoLuongHang;
  this.Mota = data.Mota;
  this.MaLoaiHang = data.MaLoaiHang;
  this.tags = data.tags;
};

Product.getAll = (result) => {
  const sql = "SELECT * FROM hinhanh as a, hanghoa as b where a.MSHH = b.MSHH";
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getDetailsById = (id, result) => {
  const sql = `SELECT * FROM hinhanh as a, hanghoa as b where a.MSHH = b.MSHH AND a.MSHH = '${id}'`;
  // const sql = `SELECT * FROM hanghoa where MSHH = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getByGroup = (id, result) => {
  const sql = `SELECT * FROM hanghoa as a, hinhanh as b where a.MSHH = b.MSHH and MaLoaiHang = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getSortByPriceASC = (result) => {
  const sql = `SELECT * FROM hinhanh as a, hanghoa as b where a.MSHH = b.MSHH order by b.Gia ASC`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getSortByPriceDESC = (result) => {
  const sql = `SELECT * FROM hinhanh as a, hanghoa as b where a.MSHH = b.MSHH order by b.Gia DESC`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getSortByNameASC = (result) => {
  const sql = `SELECT * FROM hinhanh as a, hanghoa as b where a.MSHH = b.MSHH order by b.TenHH ASC`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getSortByNameDESC = (result) => {
  const sql = `SELECT * FROM hinhanh as a, hanghoa as b where a.MSHH = b.MSHH order by b.TenHH DESC`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getBestSale = (result) => {
  const sql = `SELECT * FROM hinhanh as a, hanghoa as b where a.MSHH = b.MSHH and b.SoLuongHang <= 10`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getSearch = (tagName, result) => {
  const sql = `SELECT * from hinhanh as a, hanghoa as b where a.MSHH=b.MSHH and concat(',',b.tags,',') LIKE concat(',%${tagName}%,')`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.addProduct = (data) => {
  const sql =
    "INSERT INTO hanghoa(MSHH,TenHH,Gia,SoLuongHang,Mota,MaLoaiHang,tags) values (?,?,?,?,?,?,?)";
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
