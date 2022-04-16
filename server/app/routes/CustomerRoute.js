const express = require("express");
const router = express.Router();
const customer = require("../controllers/CustomerController");
//READ
router.get("/all/:id", customer.getAllHaveAddressById__Controller);
router.get("/order/:id", customer.getAllOrderCustomerById__Controller);
router.get("/order/details/:id", customer.getDetailsOrderById__Controller);
//CREATE
router.post("/add", customer.addCustomer__Controller);
router.post("/address/add/", customer.addAddressCustomer__Controller);
router.post("/order/add/:id", customer.addOrder__Controller);
router.post("/order-details/add", customer.addOrderDetails__Controller);

//TEST
router.get("/order-details/test", customer.addTestOrderDetails__Controller);


//UPDATE
router.put("/update/:id", customer.updateCustomerById__Controller);
router.put("/update/address/:id", customer.updateAddressById__Controller);

//DELETE
router.delete("/delete/:id", customer.deleteCustomerById__Controller);
module.exports = router;
