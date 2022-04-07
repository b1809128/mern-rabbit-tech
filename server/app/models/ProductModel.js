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

Product.getAllProducts__Model = (result) => {
  const sql = "SELECT * FROM hinhanh as a, hanghoa as b where a.MSHH = b.MSHH";
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getProductDetailsById__Model = (id, result) => {
  const sql = `SELECT * FROM hinhanh as a, hanghoa as b where a.MSHH = b.MSHH AND a.MSHH = '${id}'`;
  // const sql = `SELECT * FROM hanghoa where MSHH = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getAllBrandProducts__Model = (result) => {
  const sql = "SELECT * FROM loaihanghoa";
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getProductByGroup__Model = (id, result) => {
  const sql = `SELECT * FROM hanghoa as a, hinhanh as b where a.MSHH = b.MSHH and MaLoaiHang = '${id}'`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getSortByPriceASC__Model = (result) => {
  const sql = `SELECT * FROM hinhanh as a, hanghoa as b where a.MSHH = b.MSHH order by b.Gia ASC`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getSortByPriceDESC__Model = (result) => {
  const sql = `SELECT * FROM hinhanh as a, hanghoa as b where a.MSHH = b.MSHH order by b.Gia DESC`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getSortByNameASC__Model = (result) => {
  const sql = `SELECT * FROM hinhanh as a, hanghoa as b where a.MSHH = b.MSHH order by b.TenHH ASC`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getSortByNameDESC__Model = (result) => {
  const sql = `SELECT * FROM hinhanh as a, hanghoa as b where a.MSHH = b.MSHH order by b.TenHH DESC`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getProductBestSale__Model = (result) => {
  const sql = `SELECT * FROM hinhanh as a, hanghoa as b where a.MSHH = b.MSHH and b.SoLuongHang <= 10`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.getProductSearch__Model = (tagName, result) => {
  const sql = `SELECT * from hinhanh as a, hanghoa as b where a.MSHH=b.MSHH and concat(',',b.tags,',') LIKE concat(',%${tagName}%,')`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    result(data);
  });
};

Product.addProduct__Model = (data) => {
  const sql =
    "INSERT INTO hanghoa(MSHH,TenHH,Gia,SoLuongHang,Mota,MaLoaiHang,tags) values (?,?,?,?,?,?,?)";
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Product.updateProductById__Model = (id, data) => {
  const sql = `update hanghoa set MSHH = ?,TenHH = ?,Gia = ?,SoLuongHang = ?,Mota = ?,MaLoaiHang = ?,tags = ? where MSHH='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Product.updateProductNotAll__Model = (id, data) => {
  const sql = `update hanghoa set ? where MSHH='${id}'`;
  database.query(sql, data, (err, db) => {
    if (err) throw err;
  });
};

Product.deleteProductById__Model = (id) => {
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
