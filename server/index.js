const express = require("express");
const bodyParser = require("body-parser");
const homeRouter = require("./app/routes/home");
const productRouter = require("./app/routes/ProductRoute");
const customerRouter = require("./app/routes/CustomerRoute");
const manageRouter = require("./app/routes/ManageRoute");
const authRouter = require("./app/routes/AuthRoute");
const cors = require("cors");
const app = express();

//Express-Session
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cookieParser());
app.use(
  session({
    secret: "secret-token",
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true },
    cookie: { maxAge: 60000 },
  })
);

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

const PORT = 5000;

/**Su dung middleware */
app.use("/", homeRouter);
app.use("/product", productRouter);
app.use("/customer", customerRouter);
app.use("/manage", manageRouter);
app.use("/auth", authRouter);

const path = require("path");
const multer = require("multer");

//FIXME: Set The Storage Engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

app.post('/upload', upload.single('file'), function (req, res) {
  res.json({})
})

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
