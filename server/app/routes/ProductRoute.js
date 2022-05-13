const express = require("express");
const router = express.Router();
const product = require("../controllers/ProductController");
//READ
router.get("/all", product.getAllProducts__Controller);
router.get("/details/:id", product.getProductDetailsById__Controller);
router.get("/group/:id", product.getProductByGroup__Controller);
router.get("/bestsale", product.getProductBestSale__Controller);
router.get("/search", product.getProductSearch__Controller);
router.get("/categories", product.getAllCategories__Controller);

//TEST
router.post("/cart/:slug", product.addToCart);
router.get("/checkout", product.getCheckOut);
router.get("/setcookie", product.productSetCookie);

//CREATE, UPDATE, DELETE in manage
module.exports = router;
