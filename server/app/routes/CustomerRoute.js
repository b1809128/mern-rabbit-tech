const express = require("express");
const router = express.Router();
const customer = require("../controllers/CustomerController");
router.get("/", customer.getList);
router.get("/details/:id", customer.details);
router.post("/add", customer.add);
module.exports = router;
