const express = require("express");
const bodyParser = require("body-parser");
const homeRouter = require("./app/routes/home");
const productRouter = require("./app/routes/ProductRoute");
const customerRouter = require("./app/routes/CustomerRoute");
const manageRouter = require("./app/routes/ManageRoute")
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = 5000;

/**Su dung middleware */
app.use("/", homeRouter);
app.use("/product", productRouter);
app.use("/customer", customerRouter);
app.use("/manage", manageRouter);
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
