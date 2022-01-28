const express = require("express");
const router = express.Router();
const product = require("../controllers/ProductController");
//READ
router.get("/all", product.getAllProducts);
router.get("/details/:id", product.details);
router.get("/group/:id", product.group);
router.get("/bestsale", product.bestSale);
router.get("/search", product.search);
//CREATE, UPDATE, DELETE in manage

module.exports = router;
