const Auth = require("../models/AuthModel");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
exports.loginAuth = (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
};

exports.logoutAuth = (req, res) => {
  res.send(true);
};

exports.setLoginAuth = (req, res) => {
  var user = req.body.user;
  var password = req.body.password;

  Auth.checkLoginAuth(user, (result) => {
    if (result.length > 0) {
      if (password) {
        // console.log([password, result[0].password]);
        if (password === result[0].password) {
          const userID = result[0].user;
          // res.send({ loggedIn: true, result: result });
          // console.log("id",result);
          const token = jwt.sign({ userID }, "jwtSecret");
          res.json({ loggedIn: true, result: result, token: token });
        } else {
          res.send({ wrongPassword: "Wrong password.Please, try again !" });
        }
      }
    } else {
      res.send({ wrongUser: "User doesn't exist !" });
    }
  });
};

exports.setRegisterAuth = (req, res) => {
  if (req.body.password) {
    var hashPash = crypto
      .createHash("md5")
      .update(req.body.password)
      .digest("hex");
  }
  data = [req.body.user, hashPash];
  Auth.createUser(data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Add User Successful");
};

//Test JWT
exports.testLoginAuth = (req, res) => {
  var user = req.body.user;
  var password = req.body.password;
  if (password) {
    var hashPash = crypto.createHash("md5").update(password).digest("hex");
  }
  Auth.checkLoginAuth(user, (result) => {
    if (result.length > 0) {
      if (password) {
        // console.log([password, result[0].password]);
        if (hashPash === result[0].password) {
          const id = result[0].id;
          const token = jwt.sign({ id }, "jwtSecret", {
            expiresIn: 300,
          });
          res.json({ loggedIn: true, result: result, token: token });
        } else {
          res.send({ wrongPassword: "Wrong password.Please, try again !" });
        }
      }
    } else {
      res.send({ wrongUser: "User doesn't exist !" });
    }
  });
};


// Authorization
exports.profileAuth = (req, res) => {
  res.send({
    logged: true,
    message: "Customer and Admin can go here with your access token",
  });
};

exports.adminAuth = (req, res) => {
  res.send({
    logged: true,
    message: "Admin, You can go here with your access token",
  });
};

//function reducer auth
exports.checkAlreadyLogin = (req, res, next) => {
  try {
    var token = req.body.token;
    var id = jwt.verify(token, "jwtSecret");
    // console.log(id);
    Auth.checkLoginAuth(id.userID, (result) => {
      if (result) {
        req.data = result[0];
        next();
      } else {
        res.json({ logged: false, message: "Not Permission" });
      }
    });
  } catch (error) {
    res.json({ logged: false, message: "Not access token" });
  }
};

exports.checkAuthenticationProfile = (req, res, next) => {
  const role = req.data.role;
  if (role == "customer" || role == "administrator") {
    next();
  } else {
    res.json({ logged: false, message: "Not Permission" });
  }
};

exports.checkAuthenticationAdmin = (req, res, next) => {
  const role = req.data.role;
  if (role == "administrator") {
    next();
  } else {
    res.json({ logged: false, message: "Not Permission" });
  }
};
