const express = require("express");
const router = express.Router();
const auth = require("../controllers/AuthController");
const passport = require("passport");
//GET
router.get("/login", auth.loginAuth);
router.get("/logout", auth.logoutAuth);

//Authorization same routes of client
router.post(
  "/profile",
  auth.checkAlreadyLogin,
  auth.checkAuthenticationProfile,
  auth.profileAuth
);
router.post(
  "/admin",
  auth.checkAlreadyLogin,
  auth.checkAuthenticationAdmin,
  auth.adminAuth
);

//POST
router.post("/login", auth.setLoginAuth);
router.post("/register", auth.setRegisterAuth);

//Test JWT
router.post("/testJWT", auth.testLoginAuth);

//Google Login
const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
  // if (req.user) {
  res.status(200).json({
    success: true,
    message: "successfull",
    user: req.user,
    cookies: req.cookies,
  });
  // }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/google", passport.authenticate("google", { scope: ["profile","email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get('/api/google', (req, res) => {
  res.send(req.user);
});

module.exports = router;
