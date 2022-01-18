const express = require("express");
const router = express.Router();
const manage = require("../controllers/ManageController");
//READ
router.get("/api", manage.getAPI);
router.get("/product", manage.getAllProduct);
router.get("/customer", manage.getAllCustomer);
router.get("/staff", manage.getAllStaff);
router.get("/order", manage.getAllOrder);
router.get("/order/details/:id", manage.getOrderDetails);
//CREATE
router.post("/product/add", manage.addProduct);
router.post("/staff/add", manage.addStaff);
router.post("/upload", manage.uploadImage);
//UPDATE
router.put("/product/update/:id", manage.updateProductById);
router.put("/customer/update/:id", manage.updateUserById);
router.put("/staff/update/:id", manage.updateStaffById);
router.put("/order/update/:id", manage.updateOrderById);
router.patch("/customer/updateonly/:id", manage.updateUserNotAll);
router.patch("/product/updateonly/:id", manage.updateProductNotAll);
router.patch("/staff/updateonly/:id", manage.updateStaffNotAll);
router.patch("/order/updateonly/:id", manage.updateOrderNotAll);

//DELETE
router.delete("/product/delete/:id", manage.deleteProductById);
router.delete("/customer/delete/:id", manage.deleteUserById);
router.delete("/staff/delete/:id", manage.deleteStaffById);
router.delete("/order/delete/:id", manage.deleteOrderById);

module.exports = router;
