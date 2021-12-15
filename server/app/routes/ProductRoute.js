const express = require("express");
const router = express.Router();
const product = require("../controllers/ProductController");
router.get("/", product.getAllProducts);
router.get("/details/:id", product.details);
router.get("/group/:id", product.group);
router.get("/sort/price/high", product.sortHigh);
router.get("/sort/price/low", product.sortLow);
router.get("/bestsale", product.bestSale);
router.get("/search",product.search);
module.exports = router;
