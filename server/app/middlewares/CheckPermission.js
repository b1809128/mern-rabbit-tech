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
