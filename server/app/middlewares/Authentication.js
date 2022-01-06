const session = require("express-session");

const sess = session({
  key: "userId",
  secret: "abc123",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  },
});

//Login, Register
app.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  Auth.checkLoginAuth(user, (result) => {
    if (result.length > 0) {
      if (password === result[0].password) {
        // req.session.user = result;
        req.session.loggedIn = true;
				req.session.user = user;
        res.send({loggedIn:true,result:result});
        // console.log(result[0].password);
        // console.log(req.session.user);
      } else {
        res.send("Wrong password.Please, try again !");
      }
      
    } else {
      res.send("User doesn't exist !");
    }
  });
  // console.log([user,password]);
});

module.exports = sess;
