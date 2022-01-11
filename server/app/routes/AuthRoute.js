const express = require("express");
const router = express.Router();
const auth = require("../controllers/AuthController")
//GET
router.get('/login',auth.loginAuth);
router.get('/logout',auth.logoutAuth);
//POST
router.post('/login',auth.setLoginAuth);
router.post('/register',auth.setRegisterAuth);
router.post('/testJWT',auth.testLoginAuth);

module.exports = router;