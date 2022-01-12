const express = require("express");
const router = express.Router();
const auth = require("../controllers/AuthController");
//GET
router.get("/login", auth.loginAuth);
router.get("/logout", auth.logoutAuth);

//Authorization same routes of client
router.post("/profile", auth.checkAlreadyLogin, auth.checkAuthenticationProfile, auth.profileAuth);
router.post("/admin", auth.checkAlreadyLogin, auth.checkAuthenticationAdmin, auth.adminAuth);


//POST
router.post("/login", auth.setLoginAuth);
router.post("/register", auth.setRegisterAuth);

//Test JWT
router.post("/testJWT", auth.testLoginAuth);

module.exports = router;
