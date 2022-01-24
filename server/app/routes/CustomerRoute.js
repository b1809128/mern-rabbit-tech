const express = require("express");
const router = express.Router();
const customer = require("../controllers/CustomerController");
//READ
router.get("/all/:id", customer.getAllHaveAddressById);
router.get("/order/:id", customer.getAllOrderCustomerById);
router.get("/order/details/:id", customer.getDetailsOrderById);
//CREATE
router.post("/add", customer.addCustomer);
router.post("/address/add/", customer.addAddressCustomer);
//UPDATE
router.put("/update/:id", customer.updatePutCustomerById);
//DELETE
router.delete("/delete/:id", customer.deleteCustomerById);
module.exports = router;
