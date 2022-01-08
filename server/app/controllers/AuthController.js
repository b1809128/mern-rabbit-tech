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
          res.send({ loggedIn: true, result: result });
        } else {
          res.send({wrongPassword:"Wrong password.Please, try again !"});
        }
      }
    } else {
      res.send({wrongUser:"User doesn't exist !"});
    }
  });
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
