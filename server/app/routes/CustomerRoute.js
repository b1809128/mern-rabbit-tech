const express = require("express");
const router = express.Router();
const customer = require("../controllers/CustomerController");
//READ
router.get("/details/:id", customer.details);
router.get("/order/:id", customer.getAllOrderCustomerById);
router.get("/order/details/:id", customer.getDetailsOrderById);
//CREATE
router.post("/add", customer.addCustomer);
//UPDATE
router.put("/update/:id", customer.updateCustomerById);
//DELETE
router.delete("/delete/:id", customer.deleteCustomerById);
module.exports = router;
