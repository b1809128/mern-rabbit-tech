const Auth = require("../models/AuthModel");
const crypto = require("crypto");
exports.loginAuth = (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
};

exports.logoutAuth = (req, res) => {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send(
      "You have been logged out of your session. Please login to contiune"
    );
  });
};

exports.setLoginAuth = (req, res) => {
  var user = req.body.user;
  var password = req.body.password;

  Auth.checkLoginAuth(user, (result) => {
    if (result.length > 0) {
      if (password) {
        var hashPash = crypto
          .createHash("md5")
          .update(password)
          .digest("hex");
        // console.log([hashPash, result[0].password]);
        if (hashPash === result[0].password) {
          res.send({ loggedIn: true, result: result });
        } else {
          res.send("Wrong password.Please, try again !");
        }
      }
    } else {
      res.send("User doesn't exist !");
    }
  });
  // console.log([user, password]);
};

exports.setRegisterAuth = (req, res) => {
  if (req.body.password) {
    var hashPash = crypto.createHash("md5").update(req.body.password).digest("hex");
  }
  data = [req.body.user, hashPash];
  Auth.createUser(data);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Add User Successful");
};
