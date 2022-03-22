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
router.post("/order/add/:id", customer.addOrder);
router.post("/order-details/add", customer.addOrderDetails);
router.get("/order-details/test", customer.addTestOrderDetails);


//UPDATE
router.put("/update/:id", customer.updatePutCustomerById);
//DELETE
router.delete("/delete/:id", customer.deleteCustomerById);
module.exports = router;
