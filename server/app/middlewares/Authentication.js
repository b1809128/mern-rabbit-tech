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

module.exports = sess;
