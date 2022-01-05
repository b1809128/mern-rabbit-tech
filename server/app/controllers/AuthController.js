const Auth = require("../models/AuthModel");

exports.loginAuth = (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
};

exports.logoutAuth = (req, res) => {
  res.send({ loggedOut: true });
};

exports.setLoginAuth = (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  Auth.checkLoginAuth(user, (result) => {
    if (result.length > 0) {
      if (password === result[0].password) {
        req.session.user = result;
        req.session.save();
        res.send(result);
        // console.log(result[0].password);
        // console.log(req.session.user);
      } else {
        res.send("Wrong password.Please, try again !");
      }
    } else {
      res.send("User doesn't exist !");
    }
  });
  // console.log([user, password]);
};

exports.setRegisterAuth = (req, res) => {
  data = [req.body.user, req.body.password];
  Auth.createUser(data);
  // console.log(data)
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("Add User Successful");
};
