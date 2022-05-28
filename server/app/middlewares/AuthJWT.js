const Auth = require("../models/AuthModel");
const jwt = require("jsonwebtoken");
       
Auth.checkLoginAuth(user, (result) => {
    if (result.length > 0) {
      if (password) {
        // console.log([password, result[0].password]);
        if (password === result[0].password) {
          const userID = result[0].user;
          // res.send({ loggedIn: true, result: result });
          // console.log("id",result);
          const token = jwt.sign({ userID }, "jwtSecret");
          res.json({
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
          res.send({ wrongPassword: "Wrong password.Please, try again !" });
        }
      }
    } else {
      res.send({ wrongUser: "User doesn't exist !" });
    }
  });