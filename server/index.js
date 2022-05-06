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

const fs = require("fs");
const multer = require("multer");

//FIXME: Set The Storage Engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let targetDir = "./images/" + req.query.folderData;
    if (!fs.existsSync(targetDir))
      fs.mkdirSync(targetDir, (err) => {
        if (err)
          res
            .status(500)
            .json({ status: "failed", message: "can not create user folder" });
        else cb(null, targetDir);
      });
    else cb(null, targetDir);
    // cb(null, './images')
  },
  filename: (req, file, cb) => {
    // console.log(file);
    let now = new Date();
    let originalName = file.originalname.substring(
      0,
      file.originalname.lastIndexOf(".")
    );
    let ext = file.originalname.substring(
      file.originalname.lastIndexOf(".") + 1,
      file.originalname.length
    );
    // console.log(originalName, ext, file.originalname);
    const uniqueSuffix =
      originalName +
      "_" +
      now.getMonth() +
      now.getDate() +
      now.getFullYear() +
      "_" +
      now.getHours() +
      now.getMinutes() +
      now.getSeconds();
    cb(null, uniqueSuffix + "." + ext);
  },
});

function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

//TODO: Su dung cai nay de load anh theo thu muc public
const path = require("path");
app.use("/images", express.static(path.join(__dirname, "/images")));

app.post("/upload", upload.array("file"), function (req, res) {
  res.json("File Uploaded");
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
