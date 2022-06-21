const express = require("express");
const router = express.Router();
const auth = require("../controllers/AuthController");
const passport = require("passport");
const Auth = require("../models/AuthModel");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
let profileUser;
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

//TODO: Google Login
const CLIENT_URL = "http://localhost:3000/";

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

router.get("/google/callback", (req, res) => {
  passport.authenticate(
    "google",
    {
      // successRedirect: CLIENT_URL,
      failureRedirect: "/login/failed",
      keepSessionInfo: false,
    },
    (err, user) => {
      // console.log(user);
      // You can send cookies and data in response here.
      // req.cookies.user = user;
      // profileUser = req.cookies.user;
      profileUser = user;
      if (profileUser) {
        res.redirect(CLIENT_URL);
      }
    }
  )(req, res);
});

router.get("/google/login/success", (req, res) => {
  if (profileUser) {
    Auth.checkLoginAuth(profileUser.name.familyName, (result) => {
      if (result.length > 0) {
        const userID = result[0].user;
        const token = jwt.sign({ userID }, "jwtSecret", {
          expiresIn: "3600s",
        });
        res.status(200).json({
          loggedIn: true,
          result: result.map((data) => {
            return {
              id: data.id,
              user: data.user,
            };
          }),
          token: token,
        });
      } else {
        if (profileUser) {
          var hashPash = crypto
            .createHash("md5")
            .update(profileUser.name.familyName)
            .digest("hex");
          data = [profileUser.name.familyName, hashPash];
          Auth.createUser(data);
        }
        res.setHeader("Content-Type", "application/json");
        res.status(200).json({ create: "Add user by Google success" });
      }
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/google/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.clearCookie("user");
    res.redirect(CLIENT_URL);
  });
});

router.get("/api/google", (req, res) => {
  console.log(req.cookies);
  res.send(profileUser);
});

//TODO: Facebook Login

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/facebook/login/success", (req, res) => {
  if (profileUser) {
    Auth.checkLoginAuth(profileUser.name.familyName, (result) => {
      if (result.length > 0) {
        const userID = result[0].user;
        const token = jwt.sign({ userID }, "jwtSecret");
        res.status(200).json({
          loggedIn: true,
          result: result.map((data) => {
            return {
              id: data.id,
              user: data.user,
            };
          }),
          token: token,
        });
      } else {
        if (profileUser) {
          var hashPash = crypto
            .createHash("md5")
            .update(profileUser.name.familyName)
            .digest("hex");
          data = [profileUser.name.familyName, hashPash];
          Auth.createUser(data);
        }
        res.setHeader("Content-Type", "application/json");
        res.status(200).json({ create: "Add user by Google success" });
      }
    });
  }
});

module.exports = router;
