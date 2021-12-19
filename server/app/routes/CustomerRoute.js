const express = require("express");
const router = express.Router();
const customer = require("../controllers/CustomerController");
//READ
router.get("/", customer.getList);
router.get("/details/:id", customer.details);
router.get("/order/:id", customer.orderCustomerId);
router.get("/order/details/:id", customer.orderById);
//CREATE
router.post("/add", customer.add);
//UPDATE
router.put("/update/:id",customer.updateById);
//DELETE
router.delete("/delete/:id", customer.deleteById);
module.exports = router;
