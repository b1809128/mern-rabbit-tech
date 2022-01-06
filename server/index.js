const express = require("express");
const bodyParser = require("body-parser");
const homeRouter = require("./app/routes/home");
const productRouter = require("./app/routes/ProductRoute");
const customerRouter = require("./app/routes/CustomerRoute");
const manageRouter = require("./app/routes/ManageRoute");
const authRouter = require("./app/routes/AuthRoute");
const Auth = require("./app/models/AuthModel");
const cors = require("cors");
const app = express();

//Express-Session
/*const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cookieParser());
app.use(session({
  key: "userId",
  secret: "subscribe",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  },
}))
*/
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = 5000;

/**Su dung middleware */
app.use("/", homeRouter);
app.use("/product", productRouter);
app.use("/customer", customerRouter);
app.use("/manage", manageRouter);
app.use("/auth", authRouter);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
