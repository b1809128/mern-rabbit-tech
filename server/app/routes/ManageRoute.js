const express = require("express");
const router = express.Router();
const manage = require("../controllers/ManageController");
//READ
router.get("/api", manage.getAPICustomers__Controller);
router.get("/product", manage.getAllProducts__Controller);
router.get("/customer", manage.getAPICustomers__Controller);
router.get("/order", manage.getAllOrder__Controller);
router.get("/order/details", manage.getAllDetailOrders__Controller);
router.get("/order/:id", manage.getOnlyAllOrderById__Controller);
router.get("/order/details/:id", manage.getOrderDetailsById__Controller);
router.get("/table/customer/search", manage.getTableCustomerSearch__Controller);
router.get("/table/product/search", manage.getTableProductSearch__Controller);
router.get("/table/order/search", manage.getTableOrderSearch__Controller);
router.get("/product/brand", manage.getAllBrandProducts__Controller);

//CREATE
router.post("/product/add", manage.addProduct__Controller);
router.post("/image/upload", manage.uploadImageJson);
router.post("/categories/add", manage.addCategories__Controller);

//UPDATE
router.put("/product/update/:id", manage.updateProductById__Controller);
router.put("/product/image/update/:id", manage.updateProductImageById__Controller);
router.put("/order/update/:id", manage.updateOrderById__Controller);
router.patch("/customer/updateonly/:id", manage.updateCustomerNotAll__Controller);
router.patch("/product/updateonly/:id", manage.updateProductNotAll__Controller);
router.patch("/order/updateonly/:id", manage.updateOrderNotAll__Controller);
router.patch("/order/details/updateonly/:id", manage.updateOrderDetailsNotAll__Controller);

//DELETE
router.delete("/product/delete/:id", manage.deleteProductById__Controller);
router.delete("/customer/delete/:id", manage.deleteCustomerById__Controller);
router.delete("/order/delete/:id", manage.deleteOrderById__Controller);
router.delete("/categories/delete/:id", manage.deleteCategories__Controller);

module.exports = router;
