const express = require("express");
const router = express.Router();
const manage = require("../controllers/ManageController");
//READ
router.get("/api", manage.getAPI);
router.get("/product", manage.getAllProduct);
router.get("/customer", manage.getAllCustomer);
router.get("/order", manage.getAllOrder);
router.get("/order/:id", manage.getOnlyOrderById);
router.get("/order/details/:id", manage.getOrderDetailsById);
router.get("/table/customer/search", manage.getTableSearch);

//CREATE
router.post("/product/add", manage.addProduct);
router.post("/image/upload", manage.uploadImageJson);
//UPDATE
router.put("/product/update/:id", manage.updateProductById);
router.put("/product/image/update/:id", manage.updateProductImageById);
router.put("/customer/update/:id", manage.updateUserById);
router.put("/order/update/:id", manage.updateOrderById);
router.patch("/customer/updateonly/:id", manage.updateCustomerNotAll);
router.patch("/product/updateonly/:id", manage.updateProductNotAll);
router.patch("/order/updateonly/:id", manage.updateOrderNotAll);
router.patch("/order/details/updateonly/:id", manage.updateOrderDetailsNotAll);

//DELETE
router.delete("/product/delete/:id", manage.deleteProductById);
router.delete("/customer/delete/:id", manage.deleteCustomerById);
router.delete("/order/delete/:id", manage.deleteOrderById);

module.exports = router;
