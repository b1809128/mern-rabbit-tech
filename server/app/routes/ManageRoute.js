const express = require("express");
const router = express.Router();
const manage = require("../controllers/ManageController");
//READ
router.get("/api", manage.getAPI);
router.get("/product", manage.getAllProduct);
router.get("/user", manage.getAllUser);
router.get("/staff", manage.getAllStaff);
router.get("/order", manage.getAllOrder);
router.get("/order/details/:id", manage.getOrderDetails);
//CREATE
router.post("/product/add", manage.addProduct);
router.post("/staff/add", manage.addStaff);
//UPDATE
router.put("/product/update/:id",manage.updateProductById);
router.put("/user/update/:id",manage.updateUserById);
router.put("/staff/update/:id",manage.updateStaffById);
router.put("/order/update/:id",manage.updateOrderById);
//DELETE
router.delete("/product/delete/:id", manage.deleteProductById);
router.delete("/user/delete/:id", manage.deleteUserById);
router.delete("/staff/delete/:id", manage.deleteStaffById);
router.delete("/order/delete/:id", manage.deleteOrderById);

module.exports = router;
